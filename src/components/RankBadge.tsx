type RankBadgeProps = {
  rank: number;
};

export function RankBadge({ rank }: RankBadgeProps) {
  return (
    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${rank === 1 ? "bg-accent text-white" : "bg-surface text-muted" } `}>
      {rank}
    </div>
  );
}