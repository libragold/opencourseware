import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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

function Row({ row, index, competitions, competitionMeta }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right">{index + 1}</TableCell>
        <TableCell>{row.handle}</TableCell>
        {competitions.map((competition) => (
          <TableCell key={`${row.handle}-${competition.id}`} align="right">
            {row.liveCounts.get(String(competition.id)) || 0}
          </TableCell>
        ))}
        <TableCell align="right">{row.totalLiveSolves}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={competitions.length + 4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2 }}>
              <ol>
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
                        {competitionName}
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
              </ol>
              <p>
                <strong>
                  Total points: {row.record.total_credits ?? 0}
                </strong>
              </p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function LeaderboardTable({ data }) {
  const competitions = data?.competitions || [];
  const competitionMeta = new Map(
    competitions.map((competition) => [String(competition.id), competition]),
  );
  const rows = buildRows(data || {});

  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">#</TableCell>
            <TableCell>Handle</TableCell>
            {competitions.map((competition, index) => (
              <TableCell key={competition.id} align="right">
                <a href={competition.link || `https://codeforces.com/contest/${competition.id}`}>
                  {index + 1}
                </a>
              </TableCell>
            ))}
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row
              key={row.handle}
              row={row}
              index={index}
              competitions={competitions}
              competitionMeta={competitionMeta}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
