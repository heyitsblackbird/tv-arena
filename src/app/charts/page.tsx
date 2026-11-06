import { MetricToggle } from "@/components/MetricToggle";
import { getTopSeries } from "@/lib/data/getTopSeries";
import type { Metric } from "@/types/game";
import { Card } from "@/components/Card";
import { TrendChart } from "@/components/TrendChart";
import { toChartRows, toChartLines } from "@/lib/charts/toChartRows";

export default async function Charts({searchParams}: PageProps<"/charts">) {
  const {metric: metricdata} = await searchParams;
  const metric: Metric = metricdata === "viewers" ? "viewers": "players"; 
  const series = await getTopSeries(metric, 6);
  return (
    <>
      <div className="flex justify-end">
        <MetricToggle current={metric} basePath="/charts"/>

        </div>
<Card className="mt-6">
  <TrendChart rows={toChartRows(series)} lines={toChartLines(series)} />
</Card>

    </>
  );
}