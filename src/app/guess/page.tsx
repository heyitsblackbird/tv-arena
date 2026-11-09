import { getGuessPool } from "@/lib/data/getGuessPool";
import { GuessGame } from "@/components/GuessGame";

export default async function Guess() {
  const pool = await getGuessPool();

  return (
    <>
      <GuessGame pool={pool} />
    </>
  );
}
