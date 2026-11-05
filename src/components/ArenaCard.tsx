import type { GameStats, Metric } from "@/types/game";
import { Card } from "@/components/Card";
import { compareGames } from "@/lib/compare/compareGames";
import { SplitBar } from "@/components/SplitBar";
import { formatNumber } from "@/lib/format/number";

type ArenaCardProps = {
  statsA: GameStats;
  statsB: GameStats;
  metric: Metric;
};

export function ArenaCard({ statsA, statsB, metric }: ArenaCardProps) {
  const valueA = statsA[metric];
  const valueB = statsB[metric];

  if (valueA === null || valueB === null) {
    return <Card>Not on Steam. Switch to Viewers to compare.</Card>;
  }
  const { leader, difference, percentMore, shareA, shareB } = compareGames(
    valueA,
    valueB,
  );
  return (
    <Card>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div>
          <p className="font-serif text-2xl">{statsA.name}</p>
          <p className="text-[11px] text-muted">{statsA.publisher}</p>
        </div>
        <p className="font-serif italic text-muted">vs</p>
        <div className="text-right">
          <p className="font-serif text-2xl">{statsB.name}</p>
          <p className="text-[11px] text-muted text-right">
            {statsB.publisher}
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <p className="font-serif text-2xl sm:text-3xl">
          {formatNumber(valueA)}
        </p>
        <p className="font-serif text-2xl sm:text-3xl text-right">
          {formatNumber(valueB)}
        </p>
      </div>
      <div className="mt-6">
        <SplitBar shareA={shareA} shareB={shareB} />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-serif text-lg">
          {leader === "a" ? statsA.name : statsB.name} leads
        </p>
        <p className="text-xs text-muted">
          {formatNumber(difference)} more · +{percentMore.toFixed(1)}%
        </p>
      </div>
    </Card>
  );
}
