#!/usr/bin/env python3
import csv
import hashlib
import json
import os
import random
import re
import time
from datetime import datetime, timezone
from urllib.parse import urlencode
from urllib.request import urlopen, Request

try:
    from zoneinfo import ZoneInfo
except ImportError:  # pragma: no cover
    from backports.zoneinfo import ZoneInfo  # type: ignore

BASE_URL = "https://codeforces.com/api"
OUTPUT_BASENAME = "codeforces_activity"
ROSTER_PATH = "roster_with_codeforces.csv"
GROUP_CONTESTS_PATH = "group_contests.txt"
GROUP_CODE = "AnBhEByjKm"
TIMEZONE = "America/Phoenix"

# Adjust if needed.
OFFICIAL_START_DATE = "2026-01-14"
def load_api_credentials():
    env_key = os.environ.get("CF_API_KEY", "").strip()
    env_secret = os.environ.get("CF_API_SECRET", "").strip()
    if env_key and env_secret:
        return env_key, env_secret
    if not os.path.exists(".env"):
        return "", ""
    key = ""
    secret = ""
    with open(".env", "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if ":" not in line:
                continue
            k, v = [part.strip() for part in line.split(":", 1)]
            if k.lower() == "key":
                key = v
            elif k.lower() == "secret":
                secret = v
    return key, secret


API_KEY, API_SECRET = load_api_credentials()


def api_get(endpoint, params=None):
    params = params or {}
    if API_KEY and API_SECRET:
        params = dict(params)
        params["apiKey"] = API_KEY
        params["time"] = int(time.time())
        query = urlencode(sorted(params.items()))
        rand = f"{random.randint(0, 999999):06d}"
        sig_src = f"{rand}/{endpoint}?{query}#{API_SECRET}"
        params["apiSig"] = rand + hashlib.sha512(sig_src.encode("utf-8")).hexdigest()
    query = urlencode(params)
    url = f"{BASE_URL}/{endpoint}"
    if query:
        url = f"{url}?{query}"
    req = Request(url, headers={"User-Agent": "cse494-codex/1.0"})
    with urlopen(req, timeout=30) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    if data.get("status") != "OK":
        raise RuntimeError(f"API error: {data}")
    return data["result"]


def clean_handle(handle):
    handle = (handle or "").strip()
    handle = handle.replace("http://", "").replace("https://", "")
    handle = re.sub(r"^(www\.)?codeforces\.com/profile/", "", handle)
    return handle.strip("/")


def load_handles():
    handles = []
    with open(ROSTER_PATH, newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            handle = clean_handle(row.get("Codeforces Handle"))
            if handle:
                handles.append(handle)
    return sorted(set(handles))


def find_latest_output():
    pattern = re.compile(rf"^{OUTPUT_BASENAME}_(\d{{8}}T\d{{6}})\.csv$")
    latest_path = ""
    latest_ts = 0
    for name in os.listdir("."):
        match = pattern.match(name)
        if not match:
            continue
        stamp = match.group(1)
        try:
            dt = datetime.strptime(stamp, "%Y%m%dT%H%M%S")
        except ValueError:
            continue
        ts = int(dt.replace(tzinfo=timezone.utc).timestamp())
        if ts > latest_ts:
            latest_ts = ts
            latest_path = name
    return latest_path, latest_ts


def load_existing_rows(path):
    if not path or not os.path.exists(path):
        return []
    with open(path, "r", encoding="utf-8", newline="") as f:
        reader = csv.reader(f)
        rows = list(reader)
    if not rows:
        return []
    header = rows[0]
    expected = [
        "submission_datetime",
        "handle",
        "contest_name",
        "contest_id",
        "contest_link",
        "contest_start",
        "contest_end",
        "live_or_upsolve",
        "credits",
        "problem_id",
        "problem_title",
        "problem_link",
        "remark",
    ]
    if header != expected:
        return []
    return rows[1:]


def phoenix_now_iso():
    tz = ZoneInfo(TIMEZONE)
    return datetime.now(tz=tz).isoformat(timespec="seconds")

def format_dt(ts, tz):
    return datetime.fromtimestamp(ts, tz=tz).strftime("%Y-%m-%d %H:%M:%S %Z")


def contest_end_seconds(contest):
    return contest["startTimeSeconds"] + contest["durationSeconds"]


def load_group_contests():
    if not (API_KEY and API_SECRET):
        raise RuntimeError("CF_API_KEY/CF_API_SECRET required to fetch group contests.")
    return api_get("contest.list", {"gym": "false", "groupCode": GROUP_CODE})


def load_official_contests():
    all_contests = api_get("contest.list", {"gym": "false"})
    start_dt = datetime.fromisoformat(OFFICIAL_START_DATE)
    start_ts = int(start_dt.replace(tzinfo=timezone.utc).timestamp())
    filtered = []
    for contest in all_contests:
        if contest.get("startTimeSeconds", 0) < start_ts:
            continue
        name = contest.get("name", "")
        if "Div. 1" in name or "Div. 2" in name:
            filtered.append(contest)
    return filtered


def classify_submission(sub, contest, contest_kind):
    created = sub.get("creationTimeSeconds", 0)
    end_time = contest_end_seconds(contest)
    is_live = created <= end_time
    status = "live" if is_live else "upsolve"
    credits = 0

    if contest_kind == "group":
        if is_live:
            credits = 2
        else:
            if created <= end_time + 168 * 3600:
                credits = 1
            else:
                credits = 0
    else:
        if is_live:
            credits = 2
            name = contest.get("name", "")
            if "Div. 2" in name and sub.get("problem", {}).get("index") == "A":
                credits = 0
        else:
            credits = 0
    return status, credits


def main():
    handles = load_handles()
    last_path, last_checked = find_latest_output()
    existing_rows = load_existing_rows(last_path)

    try:
        group_contests = load_group_contests()
    except Exception as exc:
        group_contests = []
        print(
            "Warning: failed to load group contests. If this group is private, set "
            "CF_API_KEY and CF_API_SECRET. Error:",
            exc,
        )
    official_contests = load_official_contests()
    group_by_id = {c["id"]: c for c in group_contests if c.get("id") is not None}
    official_by_id = {c["id"]: c for c in official_contests if c.get("id") is not None}

    new_rows = []
    tz = ZoneInfo(TIMEZONE)

    for cid, contest in group_by_id.items():
        contest_start = contest.get("startTimeSeconds", 0)
        contest_end = contest_end_seconds(contest)
        start_str = format_dt(contest_start, tz)
        end_str = format_dt(contest_end, tz)
        for handle in handles:
            submissions = api_get("contest.status", {"contestId": cid, "handle": handle})
            for sub in submissions:
                if sub.get("verdict") != "OK":
                    continue
                created = sub.get("creationTimeSeconds", 0)
                if created <= last_checked:
                    continue
                status, credits = classify_submission(sub, contest, "group")
                dt = format_dt(created, tz)
                contest_name = contest.get("name", "").replace("\t", " ").strip()
                contest_link = f"https://codeforces.com/group/{GROUP_CODE}/contest/{cid}"
                problem = sub.get("problem", {})
                problem_index = problem.get("index", "")
                problem_name = problem.get("name", "").replace("\t", " ").strip()
                problem_link = f"https://codeforces.com/contest/{cid}/problem/{problem_index}"
                new_rows.append(
                    [
                        dt,
                        handle,
                        contest_name,
                        str(cid),
                        contest_link,
                        start_str,
                        end_str,
                        status,
                        str(credits),
                        problem_index,
                        problem_name,
                        problem_link,
                        "",
                    ]
                )

    for handle in handles:
        submissions = api_get("user.status", {"handle": handle})
        for sub in submissions:
            if sub.get("verdict") != "OK":
                continue
            created = sub.get("creationTimeSeconds", 0)
            if created <= last_checked:
                continue
            cid = sub.get("contestId")
            if cid not in official_by_id:
                continue
            contest = official_by_id[cid]
            contest_start = contest.get("startTimeSeconds", 0)
            contest_end = contest_end_seconds(contest)
            start_str = format_dt(contest_start, tz)
            end_str = format_dt(contest_end, tz)
            status, credits = classify_submission(sub, contest, "official")
            dt = format_dt(created, tz)
            contest_name = contest.get("name", "").replace("\t", " ").strip()
            contest_link = f"https://codeforces.com/contest/{cid}"
            problem = sub.get("problem", {})
            problem_index = problem.get("index", "")
            problem_name = problem.get("name", "").replace("\t", " ").strip()
            problem_link = f"https://codeforces.com/contest/{cid}/problem/{problem_index}"
            new_rows.append(
                [
                    dt,
                    handle,
                    contest_name,
                    str(cid),
                    contest_link,
                    start_str,
                    end_str,
                    status,
                    str(credits),
                    problem_index,
                    problem_name,
                    problem_link,
                    "",
                ]
            )

    new_rows.sort()
    now_stamp = datetime.now(tz=ZoneInfo(TIMEZONE)).strftime("%Y%m%dT%H%M%S")
    output_path = f"{OUTPUT_BASENAME}_{now_stamp}.csv"
    header = [
        "submission_datetime",
        "handle",
        "contest_name",
        "contest_id",
        "contest_link",
        "contest_start",
        "contest_end",
        "live_or_upsolve",
        "credits",
        "problem_id",
        "problem_title",
        "problem_link",
        "remark",
    ]
    with open(output_path, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(header)
        for row in existing_rows:
            writer.writerow(row)
        for row in new_rows:
            writer.writerow(row)


if __name__ == "__main__":
    main()
