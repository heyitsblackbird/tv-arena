import type { GuessItem } from "@/types/game";
import { games } from "@/lib/mock/games";

export async function getGuessPool(): Promise<GuessItem[]> {
  const rows = games.flatMap((game) => {
    const values = game.players;
    if (values === null) {
      return [];
    }

    const todayValue = values[values.length - 1];
    return [
      {
        slug: game.slug,
        name: game.name,
        publisher: game.publisher,
        value: todayValue,
      },
    ];
  });

  return rows;
}
