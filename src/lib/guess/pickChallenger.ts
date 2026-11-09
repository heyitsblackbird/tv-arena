import type { GuessItem } from "@/types/game";

export function pickChallenger(
  pool: GuessItem[],
  excludeSlugs: string[],
): GuessItem | null {
  const options = pool.filter((gameData) => {
    return excludeSlugs.includes(gameData.slug) === false;
  });

  if (options.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * options.length);

  return options[randomIndex];
}
