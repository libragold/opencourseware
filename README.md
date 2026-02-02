# Open Courseware

A Docusaurus-based website for course documentation.

## Structure

- `docs/` - Course documentation (edit markdown files here)
- `src/` - Docusaurus source files (pages, CSS, etc.)
- `static/` - Static assets (images, etc.)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Editing Course Content

Edit markdown files directly in `docs/cse494s26/`. The development server will automatically reload with your changes.

## CSE494S26 Codeforces Leaderboard

This repo includes a script to generate the Codeforces activity leaderboard YAML used by `docs/cse494s26/leaderboard.md`.

### Prerequisites

- Node.js `>=18`
- A `.env` file in the repo root containing Codeforces API credentials:

```bash
API_KEY=...
API_SECRET=...
```

### Run

```bash
node scripts/generate_cse494s26_leaderboard.js
```

This writes:

- `src/data/cse494s26_leaderboard.yaml`

### What it includes

- Activity window (America/Phoenix): `2026-01-12` through `2026-05-01` (inclusive)
- Group contests in `AnBhEByjKm` whose start time is within the window and not in the future
- Official Codeforces contests whose name contains `Div. 1` and/or `Div. 2`, whose start time is within the window and not in the future

### Scoring rules

- Group contests:
  - Live solve (submitted before contest end): `2` credits
  - Upsolve: `1` credit only if within `168` hours after contest end; otherwise `0`
- Official contests:
  - Live solve: `2` credits
  - Upsolve: `0` credits
  - Div. 2 Problem `A`: `0` credits (even if live)

### Exceptions file

Manual overrides live in:

- `src/data/cse494s26_exceptions.yaml`

It is a YAML list. Each entry targets a specific `(handle, competition_id, problem_id)` and overrides the computed `solve_type` and/or `credits`.

Example:

```yaml
- handle: parchmenter
  competition_id: 665693
  problem_id: A
  solve_type: upsolve
  credits: 1
  remark: "remote participation"
```

Notes:

- `handle` matching is case-insensitive; `problem_id` is normalized (e.g. `a` → `A`).
- Exceptions are applied even if the script didn’t observe an accepted submission for that problem (the entry will still appear in the output).
- If an exception can’t be matched to an included contest (e.g. wrong `competition_id` or contest excluded by date/window), the script prints a warning.

## Course Structure

Markdown files should include frontmatter with at least a `title` field:

```markdown
---
title: "Foundations"
---

# Foundations
...
```
