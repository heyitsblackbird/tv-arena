import { changePercent } from "@/lib/compare/changePercent";
import { games } from "@/lib/mock/games";
import type { LeaderboardRow, Metric } from "@/types/game";

export async function getLeaderboard(metric: Metric): Promise<LeaderboardRow[]> {
    const rows = games.flatMap((game) => {
        const values = game[metric];
        if (values === null) {
            return [];
        }

        const today = values[values.length - 1];
        const yesterday = values[values.length - 2];

        return [{
            slug: game.slug,
            name: game.name,
            publisher: game.publisher,
            value: today,
            changePercent: changePercent(today, yesterday),
        }];
    });

    rows.sort((a, b) => b.value - a.value);

    const topValue = rows[0]?.value ?? 0;

    return rows.map((row, index) => ({
        ...row,
        rank: index + 1,
        share: topValue === 0 ? 0 : row.value / topValue,
    }));
}
