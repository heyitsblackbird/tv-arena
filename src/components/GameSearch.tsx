"use client";

import { useState } from "react";
import type { Game } from "@/types/game";

type GameSearchProps = {
    games: Game[];
    selectedName: string;
    onSelect: (slug: string) => void;
};

export function GameSearch({ games, selectedName, onSelect }: GameSearchProps) {
    const [query, setQuery] = useState("");
    const [notFound, setNotFound] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const text = query.trim().toLowerCase();
        if (text === "") {
            return;
        }

        const exactMatch = games.find((game) => game.name.toLowerCase() === text);
        const partialMatch = games.find((game) => game.name.toLowerCase().includes(text));
        const game = exactMatch ?? partialMatch;

        if (game) {
            onSelect(game.slug);
            setQuery("");
        } else {
            setNotFound(true);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="relative">
            <input
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setNotFound(false);
                }}
                placeholder={selectedName}
                aria-label="Search for a game"
                className="w-full rounded-xl bg-surface px-4 py-3 font-serif shadow-sm placeholder:text-ink focus:outline-none focus:ring-1 focus:ring-accent"
            />
            {notFound && <p className="mt-1 text-xs text-accent">No game found</p>}
        </form>
    );
}
