"use client";

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  icon: ReactNode;
  color: string;
  data: { x: number; value: number }[];
}

export default function ChartCard({ color, data }: ChartCardProps) {
  return (
    <div
      className={`
        bg-black/70 backdrop-blur-xl 
        border rounded-2xl p-6
        mb-5
        ${color}
      `}
    >
      <div className="h-40 mb-4">
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="x" hide />
            <YAxis hide />
            <Line
              type="monotone"
              dataKey="value"
              strokeWidth={3}
              stroke="currentColor"
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
