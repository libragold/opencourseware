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
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import StarIcon from '@mui/icons-material/Star';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const SOLVE_LABELS = {
  live: 'solved live at',
  upsolve: 'upsolved at',
};

function getSolveLabel(solveType) {
  return SOLVE_LABELS[solveType] || 'solved at';
}

function getSolveIcon(problem) {
  if (problem?.credits === 2) {
    return <StarIcon sx={{ fontSize: '1rem', color: '#f2b01e', verticalAlign: 'text-bottom' }} />;
  }
  if (problem?.credits === 1) {
    return <StarIcon sx={{ fontSize: '1rem', color: '#b0b7c3', verticalAlign: 'text-bottom' }} />;
  }
  if (problem?.credits === 0) {
    return (
      <InfoOutlinedIcon sx={{ fontSize: '1rem', color: '#6b7280', verticalAlign: 'text-bottom' }} />
    );
  }
  return null;
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
              <ul>
                {row.competitionsForHandle.map((competition) => {
                  const competitionId = String(competition.competition_id);
                  const meta = competitionMeta.get(competitionId) || {};
                  const competitionName =
                    meta.name || competition.name || `Contest ${competitionId}`;
                  const competitionLink =
                    meta.link || competition.link || `https://codeforces.com/contest/${competitionId}`;
                  const competitionProblems = meta.problems || [];
                  const problems = competition.problems || [];
                  return (
                    <li key={`${row.handle}-${competitionId}`}>
                      <a href={competitionLink}>
                        {competitionName}
                      </a>
                      <ul>
                        {problems.map((problem, problemIndex) => {
                          const problemInfo = competitionProblems.find(
                            (p) => String(p.id) === String(problem.problem_id),
                          );
                          const solveIcon = getSolveIcon(problem);
                          const solveLabel = `${getSolveLabel(problem.solve_type)} ${problem.submitted_at}`;
                          const problemTitle = problemInfo?.title ?? `Problem ${problem.problem_id}`;
                          const problemLink =
                            problemInfo?.link ??
                            `${competitionLink}/problem/${problem.problem_id}`;
                          return (
                            <li key={`${row.handle}-${competitionId}-${problem.problem_id}-${problemIndex}`}>
                              <a href={problemLink}>
                                {problem.problem_id}. {problemTitle}
                              </a>
                              {solveIcon ? (
                                <Tooltip title={solveLabel}>
                                  <span
                                    style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      marginLeft: '0.25rem',
                                      verticalAlign: 'text-bottom',
                                      lineHeight: 1,
                                    }}
                                  >
                                    {solveIcon}
                                  </span>
                                </Tooltip>
                              ) : (
                                solveLabel
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
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
      <Table
        aria-label="collapsible table"
        sx={{
          '& .MuiTableCell-root': {
            padding: '4px 8px',
          },
        }}
      >
        <TableHead>
          <TableRow sx={{ '& th': { fontWeight: 700 } }}>
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
