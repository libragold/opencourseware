#!/usr/bin/env python3
"""
Generate a YAML summary from a Codeforces activity CSV.

Usage:
    python generate_activity_yaml.py [path/to/codeforces_activity_YYYYMMDDTHHMMSS.csv]

If no path is provided, the script looks for the latest file matching
`codeforces_activity_*.csv` in the current directory and writes
`codeforces_activity.yaml`.
"""
import argparse
import csv
import json
import re
from pathlib import Path
from typing import Dict, List


def find_latest_csv(basename: str = "codeforces_activity") -> Path:
    pattern = re.compile(rf"^{re.escape(basename)}_(\d{{8}}T\d{{6}})\.csv$")
    latest_path = None
    latest_stamp = ""
    for entry in Path(".").iterdir():
        if not entry.is_file():
            continue
        match = pattern.match(entry.name)
        if not match:
            continue
        stamp = match.group(1)
        if stamp > latest_stamp:
            latest_stamp = stamp
            latest_path = entry
    if latest_path is None:
        raise FileNotFoundError(f"No {basename}_*.csv file found in current directory.")
    return latest_path


def parse_cutoff_from_filename(path: Path) -> str:
    """Derive cutoff timestamp (Phoenix/MST) from a filename stamp."""
    stem = path.stem
    stamp = stem.split("_")[-1]
    if not re.match(r"^\d{8}T\d{6}$", stamp):
        raise ValueError(f"Filename does not end with YYYYMMDDTHHMMSS: {path.name}")
    date_part, time_part = stamp.split("T")
    return (
        f"{date_part[:4]}-{date_part[4:6]}-{date_part[6:]}"
        f" {time_part[:2]}:{time_part[2:4]}:{time_part[4:]} MST"
    )


def load_rows(csv_path: Path) -> List[Dict[str, str]]:
    with csv_path.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return list(reader)


def aggregate(rows: List[Dict[str, str]]):
    competitions = []
    competition_seen: Dict[str, int] = {}
    records: Dict[str, dict] = {}

    for row in rows:
        cid = row["contest_id"]
        if cid not in competition_seen:
            competition_seen[cid] = len(competitions)
            competitions.append(
                {
                    "id": int(cid),
                    "name": row["contest_name"],
                    "link": row["contest_link"],
                    "start": row["contest_start"],
                    "end": row["contest_end"],
                }
            )

        handle = row["handle"]
        credits = int(row["credits"])
        solve_type = row["live_or_upsolve"]
        submitted_at = row["submission_datetime"]
        handle_bucket = records.setdefault(
            handle,
            {
                "total_credits": 0,
                "total_live_credits": 0,
                "total_upsolve_credits": 0,
                "competitions": {},
            },
        )
        comp_bucket = handle_bucket["competitions"].setdefault(
            cid,
            {
                "competition_id": int(cid),
                "total_credits": 0,
                "live_credits": 0,
                "upsolve_credits": 0,
                "problems_by_id": {},
            },
        )
        problem_id = row["problem_id"]
        existing = comp_bucket["problems_by_id"].get(problem_id)
        if existing is None:
            comp_bucket["problems_by_id"][problem_id] = {
                "id": problem_id,
                "title": row["problem_title"],
                "link": row["problem_link"],
                "submitted_at": submitted_at,
                "solve_type": solve_type,
                "credits": credits,
            }
            handle_bucket["total_credits"] += credits
            if solve_type == "live":
                handle_bucket["total_live_credits"] += credits
            else:
                handle_bucket["total_upsolve_credits"] += credits
            comp_bucket["total_credits"] += credits
            if solve_type == "live":
                comp_bucket["live_credits"] += credits
            else:
                comp_bucket["upsolve_credits"] += credits
        elif submitted_at < existing["submitted_at"]:
            old_credits = existing["credits"]
            old_solve_type = existing["solve_type"]
            handle_bucket["total_credits"] -= old_credits
            if old_solve_type == "live":
                handle_bucket["total_live_credits"] -= old_credits
            else:
                handle_bucket["total_upsolve_credits"] -= old_credits
            comp_bucket["total_credits"] -= old_credits
            if old_solve_type == "live":
                comp_bucket["live_credits"] -= old_credits
            else:
                comp_bucket["upsolve_credits"] -= old_credits

            existing.update(
                {
                    "title": row["problem_title"],
                    "link": row["problem_link"],
                    "submitted_at": submitted_at,
                    "solve_type": solve_type,
                    "credits": credits,
                }
            )
            handle_bucket["total_credits"] += credits
            if solve_type == "live":
                handle_bucket["total_live_credits"] += credits
            else:
                handle_bucket["total_upsolve_credits"] += credits
            comp_bucket["total_credits"] += credits
            if solve_type == "live":
                comp_bucket["live_credits"] += credits
            else:
                comp_bucket["upsolve_credits"] += credits

    # Convert competition buckets to ordered lists in first-seen order
    records_by_handle: Dict[str, dict] = {}
    for handle, data in records.items():
        comps = data["competitions"]
        ordered = []
        for cid in competition_seen:
            if cid in comps:
                comp = comps[cid]
                problems = list(comp["problems_by_id"].values())
                problems.sort(key=lambda p: p["submitted_at"])
                ordered.append(
                    {
                        "competition_id": comp["competition_id"],
                        "total_credits": comp["total_credits"],
                        "live_credits": comp["live_credits"],
                        "upsolve_credits": comp["upsolve_credits"],
                        "problems": problems,
                    }
                )
        records_by_handle[handle] = {
            "total_credits": data["total_credits"],
            "total_live_credits": data["total_live_credits"],
            "total_upsolve_credits": data["total_upsolve_credits"],
            "competitions": ordered,
        }

    return competitions, records_by_handle


def emit_yaml(cutoff_date: str, competitions: List[dict], records_by_handle: Dict[str, dict]) -> str:
    q = json.dumps
    lines = []
    lines.append(f"cutoff_date: {q(cutoff_date)}")
    lines.append("competitions:")
    for comp in competitions:
        lines.append(f"  - id: {comp['id']}")
        lines.append(f"    name: {q(comp['name'])}")
        lines.append(f"    link: {q(comp['link'])}")
        lines.append(f"    start: {q(comp['start'])}")
        lines.append(f"    end: {q(comp['end'])}")
    lines.append("records_by_handle:")
    for handle, data in records_by_handle.items():
        lines.append(f"  {handle}:")
        lines.append(f"    total_credits: {data['total_credits']}")
        lines.append(f"    total_live_credits: {data['total_live_credits']}")
        lines.append(f"    total_upsolve_credits: {data['total_upsolve_credits']}")
        lines.append("    competitions:")
        for comp in data["competitions"]:
            lines.append(f"      - competition_id: {comp['competition_id']}")
            lines.append(f"        total_credits: {comp['total_credits']}")
            lines.append(f"        live_credits: {comp['live_credits']}")
            lines.append(f"        upsolve_credits: {comp['upsolve_credits']}")
            lines.append("        problems:")
            for p in comp["problems"]:
                lines.append(f"          - id: {q(p['id'])}")
                lines.append(f"            title: {q(p['title'])}")
                lines.append(f"            link: {q(p['link'])}")
                lines.append(f"            submitted_at: {q(p['submitted_at'])}")
                lines.append(f"            solve_type: {q(p['solve_type'])}")
                lines.append(f"            credits: {p['credits']}")
    return "\n".join(lines) + "\n"


def main():
    parser = argparse.ArgumentParser(description="Convert Codeforces activity CSV to YAML.")
    parser.add_argument(
        "csv_path",
        nargs="?",
        type=Path,
        help="Path to codeforces_activity_YYYYMMDDTHHMMSS.csv (default: latest in CWD).",
    )
    args = parser.parse_args()

    csv_path = args.csv_path or find_latest_csv()
    if not csv_path.exists():
        raise FileNotFoundError(f"CSV not found: {csv_path}")

    rows = load_rows(csv_path)
    cutoff_date = parse_cutoff_from_filename(csv_path)
    competitions, records_by_handle = aggregate(rows)
    yaml_text = emit_yaml(cutoff_date, competitions, records_by_handle)
    out_path = csv_path.with_name("codeforces_activity.yaml")
    out_path.write_text(yaml_text, encoding="utf-8")
    print(f"Wrote {out_path}")


if __name__ == "__main__":
    main()
