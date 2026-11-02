# Game Arena

Game Arena ranks and compares video games by Steam players and Twitch viewers.

> **Work in progress.** The data layer is built, but the pages aren't yet, and every number is made up for now. Real Steam and Twitch data comes later.

## Pages

| Page | Route | What it does |
| --- | --- | --- |
| Leaderboard | `/` | Ranks games by players or viewers, with the change since yesterday |
| Arena | `/arena` | Compares two games side by side, with a link you can share |
| Charts | `/charts` | Shows the top 6 games over the last 7 days |
| Guess | `/guess` | A higher-or-lower game on Steam player counts, with a streak to beat |

## How it works

Pages and components never touch the data source directly. They only call the functions in `src/lib/data/`:

| Function | Returns |
| --- | --- |
| `getLeaderboard(metric)` | Ranked rows for players or viewers |
| `getGameStats(slug)` | One game's numbers and daily change |
| `getAllGames()` | Every game, for the search boxes |
| `getTopSeries(metric, count)` | The top games' last 7 days, for charts |

Today these functions read from `src/lib/mock/games.ts`. Later, the same functions will query Postgres, so no page has to change when real data arrives. They're already `async` for that reason.

The mock data only stores 7 days of numbers for each game. Today's value and the daily change are calculated from those numbers, so every page shows the same figures.

## About the numbers

- **Players** means people playing on Steam. **Viewers** means people watching on Twitch.
- They measure different things, so they're never added together.
- Games that aren't on Steam, such as Valorant and Fortnite, have no player count and are left out of the Players ranking.

## Tech stack

- Next.js (App Router), React and TypeScript
- Tailwind CSS v4
- Recharts, for the Charts page (not used yet)
- Postgres, for real data (the schema in `db/` still needs rewriting for games)

## Run it locally

You need Node.js. The app doesn't need a database or any API keys yet.

```bash
git clone git@github.com:heyitsblackbird/tv-arena.git
cd tv-arena
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Project layout

```text
src/
  app/          pages and layout
  lib/data/     the functions pages call for data
  lib/mock/     made-up game data
  lib/compare/  change and head-to-head calculations
  lib/format/   number formatting
  types/        shared TypeScript types
db/             Postgres schema
docs/           build plan
```

## Disclaimer

Game Arena is a personal project. It isn't affiliated with Valve, Steam or Twitch.
