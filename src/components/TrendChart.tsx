"use client";

import type { ChartLine, ChartRow } from "@/lib/charts/toChartRows";
import { ResponsiveContainer, CartesianGrid, LineChart,XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import { formatCompact, formatNumber } from "@/lib/format/number";

type TrendChartProps = {
  rows: ChartRow[];
  lines: ChartLine[];
};

export function TrendChart({rows, lines}: TrendChartProps) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={rows}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--color-bg-deep)" />
        <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 11, fill: "var(--color-muted)" }} />
        <YAxis tickFormatter={formatCompact} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "var(--color-muted)" }} />
        <Tooltip formatter={(value) => formatNumber(Number(value))} />
        <Legend position="top" iconType="circle" itemSorter={null} wrapperStyle={{ fontSize: 12, color: "var(--color-muted)" }}/>
        {lines.map((line) => (
          <Line key={line.slug} type="linear" dataKey={line.slug} name={line.name} stroke={line.color} strokeWidth={2} dot={{ r: 3 }} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
