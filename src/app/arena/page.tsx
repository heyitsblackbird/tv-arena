import { EmptyState } from "@/components/EmptyState";
import { getAllGames } from "@/lib/data/getAllGames";
import { getGameStats } from "@/lib/data/getGameStats";
import { getLeaderboard } from "@/lib/data/getLeaderboard";
import type { Metric } from "@/types/game";
import { ArenaPickers } from "@/components/ArenaPickers";
import { ArenaCard } from "@/components/ArenaCard";
import { MetricToggle } from "@/components/MetricToggle";

export default async function Arena({ searchParams }: PageProps<"/arena">) {
  const { a: gameA, b: gameB, metric } = await searchParams;
  const cleanMetric: Metric = metric === "viewers" ? "viewers" : "players";
  const slugA = typeof gameA === "string" ? gameA : undefined;
  const slugB = typeof gameB === "string" ? gameB : undefined;

  const top = await getLeaderboard(cleanMetric);
  const leftSlug = slugA ?? top[0]?.slug;
  const rightSlug = slugB ?? top.find((row) => row.slug !== leftSlug)?.slug;

  if (!leftSlug || !rightSlug) {
    return <EmptyState message="No games to compare" />;
  }
  const allGamesData = await getAllGames();
  const slugAGameStats = await getGameStats(leftSlug);
  const slugBGameStats = await getGameStats(rightSlug);

  if (!slugAGameStats || !slugBGameStats) {
    return <EmptyState message="Game not Found!" />;
  }

  return (
    <>
      <div className="mb-4 flex justify-end">
        <MetricToggle
          current={cleanMetric}
          basePath="/arena"
          keep={{ a: leftSlug, b: rightSlug }}
        />
      </div>

      <ArenaPickers
        games={allGamesData}
        aSlug={leftSlug}
        bSlug={rightSlug}
        aName={slugAGameStats.name}
        bName={slugBGameStats.name}
        metric={cleanMetric}
      />
      <div className="mt-6">
        <ArenaCard
          statsA={slugAGameStats}
          statsB={slugBGameStats}
          metric={cleanMetric}
        />
      </div>
    </>
  );
}
