import Link from "next/link";
import type { Metric } from "@/types/game";

type MetricToggleProps = {
  current: Metric;
  basePath: string;
  keep?: Record<string, string>;
};

const options: { label: string; value: Metric }[] = [
  { label: "Players", value: "players" },
  { label: "Viewers", value: "viewers" },
];

export function MetricToggle({ current, basePath, keep }: MetricToggleProps) {
  return (
    <div className="inline-flex gap-1 rounded-full bg-surface p-1 shadow-sm">
      {options.map((option) => {
        const isActive = option.value === current;
        const query = new URLSearchParams({ ...keep, metric: option.value });
        return (
          <Link
            key={option.value}
            href={`${basePath}?${query}`}
            aria-current={isActive ? "true" : undefined}
            className={`rounded-full px-3 py-1 text-xs transition-colors ${
              isActive ? "bg-ink text-surface" : "text-muted hover:text-ink"
            }`}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}
