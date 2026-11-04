import type { LeaderboardRow as Row } from "@/types/game";
import Link from "next/link";
import { RankBadge } from "./RankBadge";
import { formatNumber } from "@/lib/format/number";
import { ChangeBadge } from "./ChangeBadge";

type LeaderboardRowProps = {
  row: Row;
};

export function LeaderboardRow({ row }: LeaderboardRowProps) {
  return (
    <Link
      href={`/arena?a=${row.slug}`}
      className="relative block overflow-hidden rounded-2xl transition hover:bg-accent/5"
    >
      <div
        className="absolute inset-y-0 left-0 bg-accent/10 rounded-2xl"
        style={{ width: `${row.share * 100}%` }}
      />
      <div className="relative flex items-center gap-4 px-4 py-3">
        <RankBadge rank={row.rank} />
        <div className="min-w-0">
          <p className="font-serif text-lg text-ink truncate">{row.name}</p>
          <p className="text-[11px] text-muted truncate">{row.publisher}</p>
        </div>
        <div className="ml-auto text-right">
          <p className="font-serif text-lg">{formatNumber(row.value)}</p>
          <ChangeBadge change={row.changePercent} />
        </div>
      </div>
    </Link>
  );
}
