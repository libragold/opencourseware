import React from 'react';

const SOLVE_LABELS = {
  live: 'solved live at',
  upsolve: 'upsolved at',
};

function getSolveLabel(solveType) {
  return SOLVE_LABELS[solveType] || 'solved at';
}

function countLiveSolves(problems) {
  return (problems || []).filter((problem) => problem.solve_type === 'live').length;
}

function buildLiveCountsByContest(competitions) {
  const liveCounts = new Map();
  (competitions || []).forEach((competition) => {
    liveCounts.set(String(competition.competition_id), countLiveSolves(competition.problems));
  });
  return liveCounts;
}

function sumLiveSolves(allCompetitions, liveCounts) {
  return (allCompetitions || []).reduce((sum, competition) => {
    const id = String(competition.id);
    return sum + (liveCounts.get(id) || 0);
  }, 0);
}

function buildRows(data) {
  const competitions = data.competitions || [];
  const recordsByHandle = data.records_by_handle || {};
  const rows = Object.keys(recordsByHandle).map((handle) => {
    const record = recordsByHandle[handle] || {};
    const competitionsForHandle = record.competitions || [];
    const liveCounts = buildLiveCountsByContest(competitionsForHandle);
    const totalLiveSolves = sumLiveSolves(competitions, liveCounts);
    return {
      handle,
      record,
      competitionsForHandle,
      liveCounts,
      totalLiveSolves,
    };
  });

  rows.sort((a, b) => {
    if (b.totalLiveSolves !== a.totalLiveSolves) {
      return b.totalLiveSolves - a.totalLiveSolves;
    }
    return a.handle.localeCompare(b.handle, 'en', { sensitivity: 'base' });
  });

  return rows;
}

export default function LeaderboardTable({ data }) {
  const competitions = data?.competitions || [];
  const competitionMeta = new Map(
    competitions.map((competition) => [String(competition.id), competition]),
  );
  const rows = buildRows(data || {});

  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Handle</th>
          {competitions.map((competition) => (
            <th key={competition.id}>
              <a href={competition.link || `https://codeforces.com/contest/${competition.id}`}>
                {competition.id}
              </a>
            </th>
          ))}
          <th>Total live solves</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.handle}>
            <td>{index + 1}</td>
            <td>{row.handle}</td>
            {competitions.map((competition) => (
              <td key={`${row.handle}-${competition.id}`}>
                {row.liveCounts.get(String(competition.id)) || 0}
              </td>
            ))}
            <td>{row.totalLiveSolves}</td>
            <td>
              <details>
                <summary>View</summary>
                <ul>
                  {row.competitionsForHandle.map((competition) => {
                    const competitionId = String(competition.competition_id);
                    const meta = competitionMeta.get(competitionId) || {};
                    const competitionName =
                      meta.name || competition.name || `Contest ${competitionId}`;
                    const competitionLink =
                      meta.link || competition.link || `https://codeforces.com/contest/${competitionId}`;
                    const problems = competition.problems || [];
                    return (
                      <li key={`${row.handle}-${competitionId}`}>
                        <a href={competitionLink}>
                          {competitionName} ({competitionId})
                        </a>
                        <ul>
                          {problems.map((problem, problemIndex) => (
                            <li key={`${row.handle}-${competitionId}-${problem.id}-${problemIndex}`}>
                              <a href={problem.link}>
                                {problem.id}. {problem.title}
                              </a>{' '}
                              — {getSolveLabel(problem.solve_type)} {problem.submitted_at}
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
                <p>
                  <strong>
                    Total points (live + upsolve): {row.record.total_credits ?? 0}
                  </strong>
                </p>
              </details>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
