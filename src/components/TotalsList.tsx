import { GameSeries } from "@/types/game";
import { formatNumber } from "@/lib/format/number";

type TotalsListProps = {
  series: GameSeries[];
};

export function TotalsList({ series }: TotalsListProps) {
  const topValue = series[0]?.points[series[0].points.length - 1].value ?? 0;

  return (
    <div className="mt-8 flex flex-col gap-4">
      {series.map((game) => {
        const value = game.points[game.points.length - 1].value;
        const share = topValue === 0 ? 0 : value / topValue;
        return (
          <div key={game.slug} className="flex items-center gap-4">
            <p className="w-40 truncate font-serif">{game.name}</p>
            <div className="h-2 flex-1 rounded-full bg-surface">
              <div
                className="h-full rounded-full bg-linear-to-r from-accent/50 to-accent"
                style={{ width: `${share * 100}%` }}
              />
            </div>

            <p className="w-28 text-right font-serif">{formatNumber(value)}</p>
          </div>
        );
      })}
    </div>
  );
}
