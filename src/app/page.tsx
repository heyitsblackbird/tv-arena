import Image from "next/image";
import {getLeaderboard} from "@/lib/data/getLeaderboard";
export default async function Home() {
  const rows = await getLeaderboard("players");
  return (
    <>
      <h1 className="font-serif text-4xl text-accent"> Leaderboard </h1>
    </>

  );
}
