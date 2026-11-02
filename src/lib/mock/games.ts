export type MockGame = {
    slug: string;
    name: string;
    publisher: string;
    players: number[] | null;
    viewers: number[];
};

// Made-up numbers. Each array is 7 days, oldest first, so the last number is today.
export const games: MockGame[] = [
    {
        slug: "counter-strike-2",
        name: "Counter-Strike 2",
        publisher: "Valve",
        players: [982000, 1015000, 1048000, 1003000, 1062000, 1094000, 1127000],
        viewers: [268000, 247000, 272000, 251000, 283000, 305000, 318000],
    },
    {
        slug: "dota-2",
        name: "Dota 2",
        publisher: "Valve",
        players: [612000, 640000, 598000, 625000, 661000, 634000, 652000],
        viewers: [142000, 156000, 138000, 149000, 171000, 187000, 196000],
    },
    {
        slug: "pubg-battlegrounds",
        name: "PUBG: Battlegrounds",
        publisher: "Krafton",
        players: [688000, 702000, 655000, 671000, 640000, 623000, 598000],
        viewers: [38000, 41000, 36000, 39000, 43000, 47000, 44000],
    },
    {
        slug: "marvel-rivals",
        name: "Marvel Rivals",
        publisher: "NetEase Games",
        players: [221000, 208000, 196000, 203000, 189000, 178000, 171000],
        viewers: [54000, 49000, 46000, 51000, 47000, 43000, 40000],
    },
    {
        slug: "apex-legends",
        name: "Apex Legends",
        publisher: "Electronic Arts",
        players: [184000, 176000, 192000, 205000, 198000, 213000, 226000],
        viewers: [62000, 58000, 65000, 71000, 65000, 74000, 81000],
    },
    {
        slug: "rust",
        name: "Rust",
        publisher: "Facepunch Studios",
        players: [142000, 151000, 147000, 158000, 166000, 172000, 165000],
        viewers: [47000, 52000, 45000, 49000, 56000, 61000, 64000],
    },
    {
        slug: "helldivers-2",
        name: "Helldivers 2",
        publisher: "PlayStation Publishing",
        players: [94000, 101000, 112000, 126000, 138000, 151000, 163000],
        viewers: [9800, 10900, 12300, 13800, 15200, 16900, 18400],
    },
    {
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        publisher: "Rockstar Games",
        players: [112000, 118000, 124000, 119000, 127000, 135000, 141000],
        viewers: [198000, 214000, 187000, 205000, 226000, 243000, 219000],
    },
    {
        slug: "baldurs-gate-3",
        name: "Baldur's Gate 3",
        publisher: "Larian Studios",
        players: [88000, 92000, 85000, 81000, 86000, 94000, 90000],
        viewers: [7200, 6800, 7500, 6900, 7700, 8300, 7900],
    },
    {
        slug: "stardew-valley",
        name: "Stardew Valley",
        publisher: "ConcernedApe",
        players: [72000, 69000, 74000, 78000, 82000, 85000, 81000],
        viewers: [5200, 4800, 5500, 5900, 6300, 5700, 5400],
    },
    {
        slug: "path-of-exile-2",
        name: "Path of Exile 2",
        publisher: "Grinding Gear Games",
        players: [87000, 82000, 78000, 74000, 71000, 76000, 73000],
        viewers: [31000, 28000, 26000, 29000, 27000, 24000, 23000],
    },
    {
        slug: "elden-ring",
        name: "Elden Ring",
        publisher: "Bandai Namco",
        players: [61000, 58000, 64000, 67000, 62000, 59000, 63000],
        viewers: [14800, 13500, 15000, 16300, 15100, 14200, 15400],
    },
    {
        slug: "team-fortress-2",
        name: "Team Fortress 2",
        publisher: "Valve",
        players: [58000, 61000, 56000, 54000, 57000, 60000, 62000],
        viewers: [2100, 1950, 2200, 2000, 2200, 2450, 2350],
    },
    {
        slug: "monster-hunter-wilds",
        name: "Monster Hunter Wilds",
        publisher: "Capcom",
        players: [46000, 43000, 40000, 42000, 39000, 37000, 35000],
        viewers: [8900, 8200, 7600, 8100, 7400, 6800, 6300],
    },
    {
        slug: "cyberpunk-2077",
        name: "Cyberpunk 2077",
        publisher: "CD Projekt",
        players: [38000, 41000, 44000, 42000, 39000, 36000, 34000],
        viewers: [6400, 5900, 6500, 7000, 6700, 6100, 5600],
    },
    {
        slug: "terraria",
        name: "Terraria",
        publisher: "Re-Logic",
        players: [24000, 26000, 25000, 27000, 29000, 28000, 30000],
        viewers: [1800, 2000, 1750, 1900, 2150, 2050, 2300],
    },
    {
        slug: "league-of-legends",
        name: "League of Legends",
        publisher: "Riot Games",
        players: null,
        viewers: [312000, 286000, 322000, 304000, 341000, 366000, 381000],
    },
    {
        slug: "valorant",
        name: "Valorant",
        publisher: "Riot Games",
        players: null,
        viewers: [215000, 238000, 204000, 226000, 251000, 274000, 289000],
    },
    {
        slug: "fortnite",
        name: "Fortnite",
        publisher: "Epic Games",
        players: null,
        viewers: [128000, 141000, 124000, 133000, 152000, 168000, 175000],
    },
    {
        slug: "minecraft",
        name: "Minecraft",
        publisher: "Mojang Studios",
        players: null,
        viewers: [76000, 83000, 72000, 79000, 86000, 94000, 88000],
    },
];
