import type { GameStats, Metric } from "@/types/game";
import { Card } from "@/components/Card";
import { compareGames } from "@/lib/compare/compareGames";
import { SplitBar } from "@/components/SplitBar";
import { formatNumber } from "@/lib/format/number";
import { EmptyState } from "@/components/EmptyState";

type ArenaCardProps = {
  statsA: GameStats;
  statsB: GameStats;
  metric: Metric;
};

export function ArenaCard({ statsA, statsB, metric }: ArenaCardProps) {
  if (statsA.slug === statsB.slug) {
    return (
      <Card>
        <EmptyState message="Pick two different games!" />
      </Card>
    );
  }
  const valueA = statsA[metric];
  const valueB = statsB[metric];

  const result =
    valueA !== null && valueB !== null ? compareGames(valueA, valueB) : null;

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
          {valueA === null ? "Not on Steam" : formatNumber(valueA)}
        </p>
        <p className="font-serif text-2xl sm:text-3xl text-right">
          {valueB === null ? "Not on Steam" : formatNumber(valueB)}
        </p>
      </div>
      {result && (
        <div className="mt-6">
          <SplitBar shareA={result.shareA} shareB={result.shareB} />
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        {result ? (
          <>
            <p className="font-serif text-lg">
              {result.leader === "tie"
                ? "Dead even"
                : `${result.leader === "a" ? statsA.name : statsB.name} leads`}
            </p>
            {result.leader !== "tie" && (
              <p className="text-xs text-muted">
                {formatNumber(result.difference)} more · +
                {result.percentMore.toFixed(1)}%
              </p>
            )}
          </>
        ) : (
          <p className="text-sm text-muted">Switch to Viewers to compare</p>
        )}
      </div>
    </Card>
  );
}
