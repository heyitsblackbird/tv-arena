import { GameSeries } from "@/types/game";
export type ChartRow = Record<string, string | number>;
export type ChartLine = { slug: string; name: string; color: string };

export function toChartRows(series: GameSeries[]): ChartRow[] {
  if (series.length === 0) {
    return [];
  }

  const rows: ChartRow[] = [];
  const days = series[0].points;

  for (let i = 0; i < days.length; i++) {
    const row: ChartRow = { day: days[i].day };

    series.map((s) => {
      row[s.slug] = s.points[i].value;
    });
    rows.push(row);
  }
  return rows;
}

export function toChartLines(series: GameSeries[]): ChartLine[] {
  return series.map((game, i) => ({
    slug: game.slug,
    name: game.name,
    color: `var(--color-chart-${i + 1})`,
  }));
}
