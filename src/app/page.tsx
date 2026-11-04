import { EmptyState } from "@/components/EmptyState";
import { LeaderboardRow } from "@/components/LeaderboardRow";
import { MetricToggle } from "@/components/MetricToggle";
import { getLeaderboard } from "@/lib/data/getLeaderboard";
import { Metric } from "@/types/game";

export default async function Home({ searchParams }: PageProps<"/">) {
  const { metric: metricdata } = await searchParams;
  const metric: Metric = metricdata === "viewers" ? "viewers" : "players";
  const rows = await getLeaderboard(metric);
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted">
          {metric === "viewers"
            ? "Twitch viewers, daily average"
            : "Steam players, daily average"}
        </p>
        <MetricToggle current={metric} basePath="/" />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {rows.length === 0 ? (
          <EmptyState message="No game to show for now!" />
        ) : (
          rows.map((row) => <LeaderboardRow key={row.slug} row={row} />)
        )}
      </div>
    </>
  );
}
