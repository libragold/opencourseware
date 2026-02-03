#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const yaml = require('js-yaml');

const BASE_URL = 'https://codeforces.com/api';
const GROUP_CODE = 'AnBhEByjKm';
const TIME_ZONE = 'America/Phoenix';
const START_DATE = '2026-01-12'; // local date in America/Phoenix
const END_DATE = '2026-05-01'; // local date in America/Phoenix (inclusive)

const OUTPUT_PATH = path.join('src', 'data', 'cse494s26_leaderboard.yaml');
const EXCEPTIONS_PATH = path.join('src', 'data', 'cse494s26_exceptions.yaml');
const EXCLUDED_HANDLES_PATH = path.join('src', 'data', 'cse494s26_excluded_handles.yaml');

function parseDotEnv(filepath) {
  if (!fs.existsSync(filepath)) return {};
  const text = fs.readFileSync(filepath, 'utf8');
  const env = {};
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    const value = line.slice(eq + 1).trim();
    if (!key) continue;
    env[key] = value;
  }
  return env;
}

function loadApiCredentials() {
  const envFile = parseDotEnv(path.resolve('.env'));
  const candidates = { ...envFile, ...process.env };
  const apiKey =
    candidates.CF_API_KEY ||
    candidates.API_KEY ||
    candidates.api_key ||
    candidates.ApiKey ||
    '';
  const apiSecret =
    candidates.CF_API_SECRET ||
    candidates.API_SECRET ||
    candidates.api_secret ||
    candidates.ApiSecret ||
    '';
  return { apiKey: String(apiKey).trim(), apiSecret: String(apiSecret).trim() };
}

function formatPhoenix(epochSeconds) {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short',
  });
  const parts = dtf.formatToParts(new Date(epochSeconds * 1000));
  const byType = new Map(parts.map((p) => [p.type, p.value]));
  // en-US formatToParts: month/day/year etc; we rebuild to stable YYYY-MM-DD
  const year = byType.get('year');
  const month = byType.get('month');
  const day = byType.get('day');
  const hour = byType.get('hour');
  const minute = byType.get('minute');
  const second = byType.get('second');
  const tz = byType.get('timeZoneName') || 'MST';
  return `${year}-${month}-${day} ${hour}:${minute}:${second} ${tz}`;
}

function phoenixStartOfDayEpochSeconds(isoDate) {
  // America/Phoenix is UTC-07:00 year-round (no DST).
  // Using an explicit offset avoids needing extra timezone libraries.
  const ms = Date.parse(`${isoDate}T00:00:00-07:00`);
  if (!Number.isFinite(ms)) {
    throw new Error(`Invalid date: ${isoDate}`);
  }
  return Math.floor(ms / 1000);
}

function phoenixStartOfNextDayEpochSeconds(isoDate) {
  return phoenixStartOfDayEpochSeconds(isoDate) + 24 * 60 * 60;
}

function buildSortedQuery(params) {
  const entries = Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => [String(k), String(v)]);
  entries.sort(([a], [b]) => a.localeCompare(b));
  const search = new URLSearchParams();
  for (const [k, v] of entries) search.append(k, v);
  return search.toString();
}

function withSignature(method, params, apiKey, apiSecret) {
  if (!apiKey || !apiSecret) return { ...params };
  const signed = { ...params, apiKey, time: Math.floor(Date.now() / 1000) };
  const query = buildSortedQuery(signed);
  const rand = String(Math.floor(Math.random() * 1_000_000)).padStart(6, '0');
  const sigSrc = `${rand}/${method}?${query}#${apiSecret}`;
  const hash = crypto.createHash('sha512').update(sigSrc).digest('hex');
  return { ...signed, apiSig: `${rand}${hash}` };
}

let lastRequestAtMs = 0;
async function rateLimit(minIntervalMs = 400) {
  const now = Date.now();
  const waitMs = Math.max(0, lastRequestAtMs + minIntervalMs - now);
  if (waitMs > 0) await new Promise((r) => setTimeout(r, waitMs));
  lastRequestAtMs = Date.now();
}

async function apiGet(method, params, { apiKey, apiSecret, requireAuth = false } = {}) {
  if (requireAuth && !(apiKey && apiSecret)) {
    throw new Error(
      `Missing API credentials for ${method}. Set API_KEY and API_SECRET in .env (or CF_API_KEY/CF_API_SECRET).`,
    );
  }
  const signedParams = withSignature(method, params || {}, apiKey, apiSecret);
  const query = buildSortedQuery(signedParams);
  const url = `${BASE_URL}/${method}${query ? `?${query}` : ''}`;

  for (let attempt = 0; attempt < 5; attempt += 1) {
    await rateLimit();
    let resp;
    try {
      resp = await fetch(url, {
        headers: { 'User-Agent': 'cse494s26-leaderboard/1.0 (node)' },
      });
    } catch (err) {
      const backoff = 500 * 2 ** attempt;
      await new Promise((r) => setTimeout(r, backoff));
      continue;
    }

    if (resp.status === 429 || resp.status === 503) {
      const backoff = 500 * 2 ** attempt;
      await new Promise((r) => setTimeout(r, backoff));
      continue;
    }
    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      throw new Error(`HTTP ${resp.status} for ${method}: ${text.slice(0, 400)}`);
    }

    const data = await resp.json();
    if (data?.status !== 'OK') {
      const comment = data?.comment ? String(data.comment) : '';
      if (comment.toLowerCase().includes('limit') || comment.toLowerCase().includes('too many')) {
        const backoff = 500 * 2 ** attempt;
        await new Promise((r) => setTimeout(r, backoff));
        continue;
      }
      throw new Error(`API error for ${method}: ${JSON.stringify(data).slice(0, 800)}`);
    }
    return data.result;
  }

  throw new Error(`Rate limit / transient failures for ${method}: exhausted retries.`);
}

async function fetchText(url) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    await rateLimit();
    let resp;
    try {
      resp = await fetch(url, {
        headers: { 'User-Agent': 'cse494s26-leaderboard/1.0 (node)' },
      });
    } catch (err) {
      const backoff = 500 * 2 ** attempt;
      await new Promise((r) => setTimeout(r, backoff));
      continue;
    }
    if (resp.status === 429 || resp.status === 503) {
      const backoff = 500 * 2 ** attempt;
      await new Promise((r) => setTimeout(r, backoff));
      continue;
    }
    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      throw new Error(`HTTP ${resp.status} for ${url}: ${text.slice(0, 200)}`);
    }
    return resp.text();
  }
  throw new Error(`Rate limit / transient failures: exhausted retries for ${url}`);
}

function extractHandlesFromHtml(html) {
  const handles = [];
  // Matches links like /profile/tourist
  const re = /href="\/profile\/([^"\/?#]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    const raw = m[1];
    try {
      handles.push(decodeURIComponent(raw));
    } catch {
      handles.push(raw);
    }
  }
  return handles
    .map((h) => String(h).trim())
    .filter(Boolean)
    .filter((h) => !h.includes(' '));
}

async function fetchGroupMembersByScraping(groupCode) {
  // Codeforces API does not provide a group-members endpoint; scrape the group members page instead.
  const all = new Set();
  for (let pageIndex = 1; pageIndex <= 50; pageIndex += 1) {
    const suffix = pageIndex === 1 ? '' : `?pageIndex=${pageIndex}`;
    const url = `https://codeforces.com/group/${groupCode}/members${suffix}`;
    let html;
    try {
      html = await fetchText(url);
    } catch (err) {
      if (pageIndex === 1) throw err;
      break;
    }
    const before = all.size;
    for (const h of extractHandlesFromHtml(html)) all.add(h);
    if (all.size === before) break;
  }
  return Array.from(all).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
}

async function fetchHandlesFromStandings(contestId, creds) {
  const handles = new Set();
  const pageSize = 500;
  for (let from = 1, loops = 0; loops < 200; loops += 1, from += pageSize) {
    const res = await apiGet(
      'contest.standings',
      { contestId, from, count: pageSize, showUnofficial: true },
      { ...creds, requireAuth: true },
    );
    const rows = Array.isArray(res?.rows) ? res.rows : [];
    for (const row of rows) {
      const members = row?.party?.members;
      if (!Array.isArray(members)) continue;
      for (const m of members) {
        const h = m?.handle;
        if (h) handles.add(String(h).trim());
      }
    }
    if (rows.length < pageSize) break;
  }
  return handles;
}

async function fetchGroupMembers(groupCode, includedGroupContestIds, creds, exceptions) {
  try {
    const scraped = await fetchGroupMembersByScraping(groupCode);
    if (scraped.length > 0) {
      console.log(`  loaded ${scraped.length} members from group members page`);
      return scraped;
    }
  } catch (err) {
    console.warn(`  failed to scrape group members page; falling back to contest standings. (${String(err)})`);
  }

  const handles = new Set();
  for (const ex of exceptions || []) handles.add(ex.handle);
  for (const contestId of includedGroupContestIds) {
    const contestHandles = await fetchHandlesFromStandings(contestId, creds);
    for (const h of contestHandles) handles.add(h);
  }
  const list = Array.from(handles).filter(Boolean);
  list.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
  console.log(`  derived ${list.length} handles from group contest standings`);
  return list;
}

function contestEndSeconds(contest) {
  return (contest.startTimeSeconds || 0) + (contest.durationSeconds || 0);
}

function isDiv1OrDiv2RatedName(name) {
  if (!name) return false;
  // Covers "Div. 1", "Div. 2", and "Div. 1 + Div. 2"
  return /Div\.\s*1/.test(name) || /Div\.\s*2/.test(name);
}

function isDiv2Name(name) {
  if (!name) return false;
  return /Div\.\s*2/.test(name);
}

async function fetchGroupContests(groupCode, creds) {
  // contest.list supports groupCode and returns all contests visible in the group.
  return apiGet('contest.list', { gym: 'false', groupCode }, { ...creds, requireAuth: true });
}

async function fetchOfficialDiv1Div2Contests(sinceEpochSeconds, creds) {
  const all = await apiGet('contest.list', { gym: 'false' }, { ...creds });
  return (all || [])
    .filter((c) => Number(c?.startTimeSeconds || 0) >= sinceEpochSeconds)
    .filter((c) => isDiv1OrDiv2RatedName(String(c?.name || '')));
}

async function fetchContestProblems(contestId, creds, { requireAuth } = {}) {
  // standings includes problem list; using count=1 keeps response small.
  const result = await apiGet(
    'contest.standings',
    { contestId, from: 1, count: 1, showUnofficial: true },
    { ...creds, requireAuth: Boolean(requireAuth) },
  );
  const problems = Array.isArray(result?.problems) ? result.problems : [];
  return problems
    .map((p) => ({
      id: normalizeProblemId(p?.index || ''),
      title: String(p?.name || '').trim(),
    }))
    .filter((p) => p.id.length > 0);
}

async function fetchContestSubmissions(handle, contestId, creds) {
  // Needed for group contests: group-contest submissions often don't appear in user.status.
  return apiGet('contest.status', { contestId, handle }, { ...creds, requireAuth: true });
}

async function fetchUserSubmissionsSince(handle, sinceEpochSeconds, creds) {
  const submissions = [];
  const pageSize = 1000;
  let from = 1;
  for (let page = 0; page < 50; page += 1) {
    const chunk = await apiGet('user.status', { handle, from, count: pageSize }, { ...creds });
    if (!Array.isArray(chunk) || chunk.length === 0) break;

    for (const sub of chunk) {
      const created = Number(sub?.creationTimeSeconds || 0);
      if (created >= sinceEpochSeconds) submissions.push(sub);
    }

    const oldest = chunk[chunk.length - 1];
    const oldestCreated = Number(oldest?.creationTimeSeconds || 0);
    if (oldestCreated < sinceEpochSeconds) break;
    from += pageSize;
  }
  return submissions;
}

function loadExceptions(filepath) {
  if (!fs.existsSync(filepath)) return [];
  const raw = fs.readFileSync(filepath, 'utf8');
  if (!raw.trim()) return [];
  const data = yaml.load(raw);
  if (!Array.isArray(data)) return [];
  return data
    .map((e) => ({
      handle: String(e?.handle || '').trim(),
      competition_id: Number(e?.competition_id),
      problem_id: String(e?.problem_id || '').trim(),
      solve_type: String(e?.solve_type || '').trim(),
      credits: Number(e?.credits),
      remark: e?.remark ? String(e.remark) : '',
    }))
    .filter((e) => e.handle && Number.isFinite(e.competition_id) && e.problem_id);
}

function parseHandleList(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === 'string') {
    return value
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (typeof value === 'object' && Array.isArray(value.handles)) {
    return value.handles.map(String);
  }
  return [];
}

function loadExcludedHandles(filepath) {
  const fromEnv = parseHandleList(process.env.CSE494S26_EXCLUDED_HANDLES);
  if (!fs.existsSync(filepath)) return fromEnv;
  const raw = fs.readFileSync(filepath, 'utf8');
  if (!raw.trim()) return fromEnv;
  const data = yaml.load(raw);
  return [...fromEnv, ...parseHandleList(data)];
}

function normalizeHandle(handle) {
  return String(handle || '').trim().toLowerCase();
}

function normalizeProblemId(problemId) {
  return String(problemId || '').trim().toUpperCase();
}

function exceptionKey(handle, contestId, problemId) {
  return `${normalizeHandle(handle)}::${Number(contestId)}::${normalizeProblemId(problemId)}`;
}

function classifySolve({ contest, problemId, submissionTimeSeconds }) {
  const end = contest.endTimeSeconds;
  const solveType = submissionTimeSeconds <= end ? 'live' : 'upsolve';
  const kind = contest.kind;
  let credits = 0;

  if (kind === 'group') {
    if (solveType === 'live') {
      credits = 2;
    } else {
      // Upsolve only counts within 168 hours (1 week) after contest end.
      credits = submissionTimeSeconds <= end + 168 * 60 * 60 ? 1 : 0;
    }
  } else {
    credits = solveType === 'live' ? 2 : 0;
    if (credits > 0 && contest.isDiv2 && problemId === 'A') {
      credits = 0;
    }
  }

  return { solveType, credits };
}

function ensureDirForFile(filepath) {
  const dir = path.dirname(filepath);
  fs.mkdirSync(dir, { recursive: true });
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has('--help') || args.has('-h')) {
    console.log('Usage: node scripts/generate_cse494s26_leaderboard.js');
    console.log('');
    console.log(`Activity window (America/Phoenix): ${START_DATE} to ${END_DATE} (inclusive)`);
    console.log('Reads API_KEY/API_SECRET from .env and writes:');
    console.log(`  - ${OUTPUT_PATH}`);
    console.log('Applies manual overrides from:');
    console.log(`  - ${EXCEPTIONS_PATH}`);
    process.exit(0);
  }

  const creds = loadApiCredentials();
  const startEpochSeconds = phoenixStartOfDayEpochSeconds(START_DATE);
  const endExclusiveEpochSeconds = phoenixStartOfNextDayEpochSeconds(END_DATE);
  const nowEpochSeconds = Math.floor(Date.now() / 1000);
  console.log(`Activity window (America/Phoenix): ${START_DATE} to ${END_DATE} (inclusive)`);

  console.log('Fetching group contests...');
  const groupContests = await fetchGroupContests(GROUP_CODE, creds);

  console.log('Fetching official CF contests (Div. 1 / Div. 2)...');
  const officialContests = await fetchOfficialDiv1Div2Contests(startEpochSeconds, creds);

  const contestsById = new Map();
  const includedGroupContestIds = [];
  const allGroupContestIds = [];
  for (const c of groupContests || []) {
    if (!c?.id) continue;
    const start = Number(c?.startTimeSeconds || 0);
    const id = Number(c.id);
    allGroupContestIds.push(id);
    if (start > nowEpochSeconds) continue; // exclude contests that have not started yet
    if (start < startEpochSeconds || start >= endExclusiveEpochSeconds) continue;
    includedGroupContestIds.push(id);
    contestsById.set(id, {
      id,
      kind: 'group',
      name: String(c?.name || '').trim(),
      link: `https://codeforces.com/group/${GROUP_CODE}/contest/${id}`,
      startTimeSeconds: start,
      endTimeSeconds: contestEndSeconds(c),
      problems: [],
      isDiv2: false,
    });
  }

  for (const c of officialContests || []) {
    if (!c?.id) continue;
    const id = Number(c.id);
    if (contestsById.has(id)) continue;
    const start = Number(c?.startTimeSeconds || 0);
    if (start > nowEpochSeconds) continue; // exclude contests that have not started yet
    if (start < startEpochSeconds || start >= endExclusiveEpochSeconds) continue;
    contestsById.set(id, {
      id,
      kind: 'official',
      name: String(c?.name || '').trim(),
      link: `https://codeforces.com/contest/${id}`,
      startTimeSeconds: start,
      endTimeSeconds: contestEndSeconds(c),
      problems: [],
      isDiv2: isDiv2Name(String(c?.name || '')),
    });
  }

  const contestList = Array.from(contestsById.values()).sort(
    (a, b) => a.startTimeSeconds - b.startTimeSeconds,
  );
  const groupCount = contestList.filter((c) => c.kind === 'group').length;
  const officialCount = contestList.length - groupCount;
  console.log(`  contests included: ${contestList.length} (group: ${groupCount}, official: ${officialCount})`);

  console.log('Fetching problem lists for group contests...');
  for (const contest of contestList) {
    if (contest.kind !== 'group') continue;
    const probs = await fetchContestProblems(contest.id, creds, { requireAuth: true });
    contest.problems = probs.map((p) => ({
      id: p.id,
      title: p.title,
      link: `https://codeforces.com/contest/${contest.id}/problem/${p.id}`,
    }));
  }

  console.log('Fetching problem lists for official contests...');
  for (const contest of contestList) {
    if (contest.kind !== 'official') continue;
    try {
      const probs = await fetchContestProblems(contest.id, creds, { requireAuth: false });
      contest.problems = probs.map((p) => ({
        id: p.id,
        title: p.title,
        link: `https://codeforces.com/contest/${contest.id}/problem/${p.id}`,
      }));
    } catch {
      // For BEFORE contests or temporarily unavailable standings, leave problems empty.
      contest.problems = [];
    }
  }

  const exceptions = loadExceptions(EXCEPTIONS_PATH);
  console.log(`Fetching group members for ${GROUP_CODE}...`);
  let handles = await fetchGroupMembers(GROUP_CODE, allGroupContestIds, creds, exceptions);
  const handleKeySet = new Set(handles.map((h) => normalizeHandle(h)));
  for (const ex of exceptions) {
    const key = normalizeHandle(ex.handle);
    if (!handleKeySet.has(key)) {
      handles.push(ex.handle);
      handleKeySet.add(key);
    }
  }
  const excludedHandles = loadExcludedHandles(EXCLUDED_HANDLES_PATH)
    .map(normalizeHandle)
    .filter(Boolean);
  const excludedSet = new Set(excludedHandles);
  if (excludedSet.size > 0) {
    const before = handles.length;
    handles = handles.filter((h) => !excludedSet.has(normalizeHandle(h)));
    const removed = before - handles.length;
    if (removed > 0) {
      console.log(`  excluded handles: removed ${removed}`);
    }
  }
  handles.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
  console.log(`  members: ${handles.length}`);

  const exceptionsByKey = new Map();
  const exceptionsByHandle = new Map();
  for (const e of exceptions) {
    exceptionsByKey.set(exceptionKey(e.handle, e.competition_id, e.problem_id), e);
    const key = normalizeHandle(e.handle);
    const list = exceptionsByHandle.get(key) || [];
    list.push(e);
    exceptionsByHandle.set(key, list);
  }
  if (exceptions.length > 0) {
    console.log(`Loaded manual exceptions: ${exceptions.length}`);
  }

  const recordsByHandle = {};
  const unappliedExceptions = new Set(exceptions.map((e) => exceptionKey(e.handle, e.competition_id, e.problem_id)));

  for (const [idx, handle] of handles.entries()) {
    console.log(`[${idx + 1}/${handles.length}] Fetching submissions for ${handle}...`);
    const earliestOk = new Map(); // contestId -> Map(problemId -> submissionTimeSeconds)

    // Group contests: use contest.status (more reliable than user.status for group contests).
    for (const contestId of includedGroupContestIds) {
      const contest = contestsById.get(contestId);
      if (!contest || contest.kind !== 'group') continue;
      const subs = await fetchContestSubmissions(handle, contestId, creds);
      for (const sub of subs || []) {
        if (sub?.verdict !== 'OK') continue;
        const problemId = normalizeProblemId(sub?.problem?.index || '');
        if (!problemId) continue;
        const created = Number(sub?.creationTimeSeconds || 0);
        if (!Number.isFinite(created) || created < startEpochSeconds || created >= endExclusiveEpochSeconds) {
          continue;
        }
        let byProblem = earliestOk.get(contestId);
        if (!byProblem) {
          byProblem = new Map();
          earliestOk.set(contestId, byProblem);
        }
        const existing = byProblem.get(problemId);
        if (!existing || created < existing) byProblem.set(problemId, created);
      }
    }

    // Official contests: use user.status once, then filter.
    const officialSubs = await fetchUserSubmissionsSince(handle, startEpochSeconds, creds);
    for (const sub of officialSubs) {
      if (sub?.verdict !== 'OK') continue;
      const contestId = Number(sub?.contestId);
      if (!Number.isFinite(contestId)) continue;
      const contest = contestsById.get(contestId);
      if (!contest || contest.kind !== 'official') continue;

      const problemId = normalizeProblemId(sub?.problem?.index || '');
      if (!problemId) continue;

      const created = Number(sub?.creationTimeSeconds || 0);
      if (!Number.isFinite(created) || created < startEpochSeconds || created >= endExclusiveEpochSeconds) {
        continue;
      }

      let byProblem = earliestOk.get(contestId);
      if (!byProblem) {
        byProblem = new Map();
        earliestOk.set(contestId, byProblem);
      }
      const existing = byProblem.get(problemId);
      if (!existing || created < existing) byProblem.set(problemId, created);
    }

    // Ensure any manual exceptions get applied even if no accepted submission was fetched.
    const manual = exceptionsByHandle.get(normalizeHandle(handle)) || [];
    for (const ex of manual) {
      const contestId = Number(ex.competition_id);
      const contest = contestsById.get(contestId);
      if (!contest) continue;
      const problemId = normalizeProblemId(ex.problem_id);
      let byProblem = earliestOk.get(contestId);
      if (!byProblem) {
        byProblem = new Map();
        earliestOk.set(contestId, byProblem);
      }
      if (!byProblem.has(problemId)) {
        const ts =
          String(ex.solve_type).toLowerCase() === 'upsolve'
            ? Number(contest.endTimeSeconds) + 1
            : Number(contest.endTimeSeconds);
        byProblem.set(problemId, ts);
      }
    }

    const competitions = [];
    let totalCredits = 0;
    let totalLiveCredits = 0;

    const contestIdsForHandle = Array.from(earliestOk.keys()).sort((a, b) => {
      const ca = contestsById.get(a);
      const cb = contestsById.get(b);
      return (ca?.startTimeSeconds || 0) - (cb?.startTimeSeconds || 0);
    });

    for (const contestId of contestIdsForHandle) {
      const contest = contestsById.get(contestId);
      if (!contest) continue;
      const byProblem = earliestOk.get(contestId) || new Map();
      const problems = [];
      for (const [problemId, timeSeconds] of byProblem.entries()) {
        const { solveType, credits } = classifySolve({
          contest,
          problemId,
          submissionTimeSeconds: timeSeconds,
        });
        problems.push({
          problem_id: normalizeProblemId(problemId),
          submitted_at: formatPhoenix(timeSeconds),
          solve_type: solveType,
          credits,
        });
      }

      // Apply manual exceptions (credits + solve_type override)
      for (const p of problems) {
        const key = exceptionKey(handle, contestId, p.problem_id);
        const ex = exceptionsByKey.get(key);
        if (!ex) continue;
        if (ex.solve_type) p.solve_type = ex.solve_type;
        if (Number.isFinite(ex.credits)) p.credits = ex.credits;
        unappliedExceptions.delete(key);
      }

      problems.sort((a, b) => a.submitted_at.localeCompare(b.submitted_at));
      const contestCredits = problems.reduce((sum, p) => sum + (Number(p.credits) || 0), 0);
      competitions.push({
        competition_id: contestId,
        total_credits: contestCredits,
        problems,
      });

      totalCredits += contestCredits;
      totalLiveCredits += problems
        .filter((p) => p.solve_type === 'live')
        .reduce((sum, p) => sum + (Number(p.credits) || 0), 0);
    }

    recordsByHandle[handle] = {
      total_credits: totalCredits,
      total_live_credits: totalLiveCredits,
      competitions,
    };
  }

  if (unappliedExceptions.size > 0) {
    console.warn('Warning: some exceptions did not match any detected accepted submission since the cutoff date:');
    for (const key of Array.from(unappliedExceptions).sort()) {
      console.warn(`  - ${key}`);
    }
  }

  const competitionsOut = contestList.map((c) => ({
    id: c.id,
    name: c.name,
    link: c.link,
    start: formatPhoenix(c.startTimeSeconds),
    end: formatPhoenix(c.endTimeSeconds),
    problems: Array.isArray(c.problems) ? c.problems : [],
  }));

  const orderedHandles = Object.keys(recordsByHandle).sort((a, b) =>
    a.localeCompare(b, 'en', { sensitivity: 'base' }),
  );
  const recordsOut = {};
  for (const h of orderedHandles) recordsOut[h] = recordsByHandle[h];

  const output = {
    last_updated: formatPhoenix(Math.floor(Date.now() / 1000)),
    competitions: competitionsOut,
    records_by_handle: recordsOut,
  };

  ensureDirForFile(OUTPUT_PATH);
  fs.writeFileSync(
    OUTPUT_PATH,
    yaml.dump(output, { lineWidth: -1, noRefs: true }),
    'utf8',
  );

  console.log(`Wrote ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error(err?.stack || String(err));
  process.exit(1);
});
