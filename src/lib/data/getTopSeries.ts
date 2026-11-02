import { games } from "@/lib/mock/games";
import type { GameSeries, Metric } from "@/types/game";

export async function getTopSeries(metric: Metric, count: number): Promise<GameSeries[]> {
    const series = games.flatMap((game) => {
        const values = game[metric];
        if (values === null) {
            return [];
        }

        return [{
            slug: game.slug,
            name: game.name,
            points: values.map((value, index) => {
                const daysAgo = values.length - 1 - index;
                return { day: daysAgo === 0 ? "now" : `-${daysAgo}d`, value };
            }),
        }];
    });

    const todayValue = (item: GameSeries) => item.points[item.points.length - 1].value;

    return series.sort((a, b) => todayValue(b) - todayValue(a)).slice(0, count);
}
