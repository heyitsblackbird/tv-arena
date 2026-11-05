"use client";
import type { Game, Metric } from "@/types/game";
import { useRouter } from "next/navigation";
import { GameSearch } from "@/components/GameSearch";

type ArenaPickersProp = {
  games: Game[];
  aSlug: string;
  bSlug: string;
  aName: string;
  bName: string;
  metric: Metric;
};

export function ArenaPickers({
  games,
  aSlug,
  bSlug,
  aName,
  bName,
  metric,
}: ArenaPickersProp) {
  const router = useRouter();
  function pickA(slug: string) {
    router.push(`/arena?a=${slug}&b=${bSlug}&metric=${metric}`);
  }
  function pickB(slug: string) {
    router.push(`/arena?a=${aSlug}&b=${slug}&metric=${metric}`);
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <GameSearch games={games} selectedName={aName} onSelect={pickA} />
      <GameSearch games={games} selectedName={bName} onSelect={pickB} />
    </div>
  );
}
