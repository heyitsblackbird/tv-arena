"use client";

import { isGuessRight, type Guess } from "@/lib/guess/isGuessRight";
import { formatNumber } from "@/lib/format/number";
import { pickChallenger } from "@/lib/guess/pickChallenger";
import type { GuessItem } from "@/types/game";
import { useState } from "react";

type GuessGameProps = { pool: GuessItem[] };
const BEST_KEY = "game-arena-best";

export function GuessGame({ pool }: GuessGameProps) {
  const [known, setKnown] = useState<GuessItem | null>(null);
  const [challenger, setChallenger] = useState<GuessItem | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [wasRight, setWasRight] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);

  function startGame() {
    try {
      const saved = localStorage.getItem(BEST_KEY);
      if (saved !== null) {
        setBest(Number(saved));
      }
    } catch {}

    const first = pickChallenger(pool, []);
    if (first === null) {
      return;
    }
    const second = pickChallenger(pool, [first.slug]);
    setKnown(first);
    setChallenger(second);
  }

  function guess(choice: Guess) {
    if (!known || !challenger) return;
    const correctAnswer = isGuessRight(known.value, challenger.value, choice);
    setRevealed(true);
    setWasRight(correctAnswer);
    if (correctAnswer) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > best) {
        setBest(newStreak);
        try {
          localStorage.setItem(BEST_KEY, String(newStreak));
        } catch {}
      }
    } else {
      setStreak(0);
    }
  }

  function next() {
    if (!known || !challenger) return;
    if (wasRight) {
      setKnown(challenger);
      setChallenger(pickChallenger(pool, [challenger.slug, known.slug]));
    } else {
      startGame();
    }
    setRevealed(false);
    setWasRight(null);
  }

  const buttonBase =
    "rounded-full px-8 py-3 text-sm uppercase tracking-widest shadow transition-opacity disabled:opacity-40";

  if (!known || !challenger) {
    return (
      <div className="flex flex-col items-center gap-4 pt-10 text-center">
        <p className="text-base text-muted sm:text-lg">
          Does the challenger have more Steam players, or fewer?
        </p>
        <button
          onClick={startGame}
          className={`${buttonBase} bg-accent text-surface`}
        >
          Play
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm uppercase tracking-widest text-muted">
        Streak <span className="font-semibold text-ink">{streak}</span>
        <span className="ml-6">Best</span>{" "}
        <span className="font-semibold text-ink">{best}</span>
      </p>

      <div className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-4">
        <div className="rounded-3xl bg-sage/10 p-4 shadow-md sm:p-8">
          <p className="text-xs uppercase tracking-widest text-muted">Known</p>
          <p className="mt-2 truncate font-serif text-xl sm:text-2xl">
            {known.name}
          </p>
          <p className="truncate text-sm text-muted">{known.publisher}</p>
          <p className="mt-6 font-serif text-2xl sm:text-4xl md:text-5xl">
            {formatNumber(known.value)}
          </p>
        </div>

        <div className="rounded-3xl border border-dashed border-sage/40 bg-sage/10 p-4 shadow-md sm:p-8">
          <p className="text-xs uppercase tracking-widest text-muted">
            Challenger
          </p>
          <p className="mt-2 truncate font-serif text-xl sm:text-2xl">
            {challenger.name}
          </p>
          <p className="truncate text-sm text-muted">{challenger.publisher}</p>
          <p className="mt-6 font-serif text-2xl sm:text-4xl md:text-5xl">
            {revealed ? formatNumber(challenger.value) : "?"}
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => guess("higher")}
          disabled={revealed}
          className={`${buttonBase} bg-accent text-surface`}
        >
          Higher
        </button>
        <button
          onClick={() => guess("lower")}
          disabled={revealed}
          className={`${buttonBase} bg-surface text-ink`}
        >
          Lower
        </button>
      </div>

      {revealed && (
        <div className="flex flex-col items-center gap-3">
          <p
            className={`font-serif text-lg ${wasRight ? "text-up" : "text-accent"}`}
          >
            {wasRight ? "Correct!" : "Not quite"}
          </p>
          <button
            onClick={next}
            className={`${buttonBase} bg-ink text-surface`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
