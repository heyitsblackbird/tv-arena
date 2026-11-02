import { changePercent } from "@/lib/compare/changePercent";
import { games } from "@/lib/mock/games";
import type { GameStats } from "@/types/game";

function todayAndChange(values: number[] | null) {
    if (values === null) {
        return { today: null, change: null };
    }

    const today = values[values.length - 1];
    const yesterday = values[values.length - 2];

    return { today, change: changePercent(today, yesterday) };
}

export async function getGameStats(slug: string): Promise<GameStats | null> {
    const game = games.find((game) => game.slug === slug);
    if (!game) {
        return null;
    }

    const players = todayAndChange(game.players);
    const viewers = todayAndChange(game.viewers);

    return {
        slug: game.slug,
        name: game.name,
        publisher: game.publisher,
        onSteam: game.players !== null,
        players: players.today,
        viewers: viewers.today,
        playersChange: players.change,
        viewersChange: viewers.change,
    };
}
