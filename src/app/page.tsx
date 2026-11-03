import {getLeaderboard} from "@/lib/data/getLeaderboard";
export default async function Home() {
  const rows = await getLeaderboard("players");
  return (
    <>
      <h2>Leaderboard</h2>
    </>

  );
}
