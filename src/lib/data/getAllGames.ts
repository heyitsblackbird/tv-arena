import { games } from "@/lib/mock/games";
import type { Game } from "@/types/game";

export async function getAllGames(): Promise<Game[]> {
    return games.map((game) => ({
        slug: game.slug,
        name: game.name,
        publisher: game.publisher,
        onSteam: game.players !== null,
    }));
}
