-- One row per TV show
CREATE TABLE IF NOT EXISTS shows (
  id          INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name        TEXT        NOT NULL,
  slug        TEXT        NOT NULL UNIQUE,   -- "the-last-of-us", used in URLs
  network     TEXT,                           -- "HBO", "Netflix"
  wiki_title  TEXT        NOT NULL UNIQUE,   -- "The_Last_of_Us_(TV_series)"
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- One row per show per day
CREATE TABLE IF NOT EXISTS daily_views (
  show_id  INTEGER NOT NULL REFERENCES shows(id) ON DELETE CASCADE,
  day      DATE    NOT NULL,
  views    INTEGER NOT NULL CHECK (views >= 0),
  PRIMARY KEY (show_id, day)                 -- reruns update, never duplicate
);

-- Leaderboard and charts filter by date
CREATE INDEX IF NOT EXISTS daily_views_day_idx ON daily_views (day);

-- One row per run of the daily job, for monitoring
CREATE TABLE IF NOT EXISTS update_runs (
  id            INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  started_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  finished_at   TIMESTAMPTZ,
  status        TEXT NOT NULL DEFAULT 'running'
                CHECK (status IN ('running', 'success', 'partial', 'failed')),
  shows_ok      INTEGER NOT NULL DEFAULT 0,
  shows_failed  INTEGER NOT NULL DEFAULT 0,
  error         TEXT
);