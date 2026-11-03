import { getLeaderboard } from "@/lib/data/getLeaderboard";
import { Card } from "@/components/Card";
import { RankBadge } from "@/components/RankBadge";
import { ChangeBadge } from "@/components/ChangeBadge";
import { MetricToggle } from "@/components/MetricToggle";
import { SplitBar } from "@/components/SplitBar";
import { EmptyState } from "@/components/EmptyState";
export default async function Home() {
  const rows = await getLeaderboard("players");
  return (
    <>
      <h2>Leaderboard</h2>
    </>
  );
}
