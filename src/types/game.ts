export type Metric = "players" | "viewers";

export type Game = {
    slug: string;
    name: string;
    publisher: string;
    onSteam: boolean;
};

export type DailyPoint = {
    day: string;
    value: number;
};

export type GameSeries = {
    slug: string;
    name: string;
    points: DailyPoint[];
};

export type LeaderboardRow = {
    rank: number;
    slug:string;
    name: string;
    publisher: string;
    value: number;
    changePercent: number | null;
    share: number;
};

export interface GameStats extends Game {
    players: null | number;
    viewers: null | number;
    playersChange: null | number;
    viewersChange: null | number;
}

export type GuessItem = {
    slug: string;
    name: string;
    publisher: string;
    value: number;
};

