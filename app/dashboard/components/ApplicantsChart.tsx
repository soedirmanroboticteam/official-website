"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ApplicantsChartProps {
  faculty: string;
  year: {
    name: string;
    value: number;
  }[];
}

const colors = ["#2563eb", "#60a5fa", "#93c5fd", "#c3dafe", "#e0eefc"];

export function ApplicantsChart({ data }: { data: ApplicantsChartProps[] }) {
  const chartDatas = data.map((chartData) => {
    return {
      faculty: chartData.faculty,
      ...chartData.year.reduce((obj: any, item, index) => {
        obj[`year${index}`] = item.value;
        return obj;
      }, {}),
    };
  });

  const chartConfigs = data[0].year.reduce((obj: any, item, index) => {
    obj[`year${index}`] = {
      label: item.name,
      color: colors[index % colors.length],
    };
    return obj;
  }, {}) satisfies ChartConfig;

  return (
    <ChartContainer
      config={chartConfigs}
      className="min-h-[200px] max-h-96 w-full"
    >
      <BarChart accessibilityLayer data={chartDatas}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="faculty"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        {data[0].year.map((_, index) => (
          <Bar
            key={index}
            dataKey={`year${index}`}
            fill={`var(--color-year${index})`}
            radius={4}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
}
