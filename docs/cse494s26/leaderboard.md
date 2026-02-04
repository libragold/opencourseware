---
title: "Leaderboard"
---

import codeforcesActivity from '@site/src/data/cse494s26_leaderboard.yaml';
import LeaderboardTable from '@site/src/components/LeaderboardTable';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

# Leaderboard

Last updated: **{codeforcesActivity.last_updated}**

## Included Competitions

<ol>
  {codeforcesActivity.competitions.map((competition) => (
    <li key={competition.id}>
      <a
        href={competition.link || `https://codeforces.com/contest/${competition.id}`}
      >
        {competition.name}
      </a>
      <Tooltip title={`${competition.start} to ${competition.end}`}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginLeft: '0.25rem',
            verticalAlign: 'text-bottom',
            lineHeight: 1,
          }}
        >
          <InfoOutlinedIcon sx={{ fontSize: '1rem', color: '#6b7280' }} />
        </span>
      </Tooltip>
    </li>
  ))}
</ol>

## Rankings

Ranking is sorted by total live solves (descending). Ties are broken by total points (descending), then by handle in alphabetical order.

<LeaderboardTable data={codeforcesActivity} />
