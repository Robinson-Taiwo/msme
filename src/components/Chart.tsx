"use client";
import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area
} from "recharts";
import { Button } from "@/components/ui/button";
import { Repeat } from "lucide-react";

const data = [
  { name: "JAN", value: 870 },
  { name: "FEB", value: 920 },
  { name: "MAR", value: 850 },
  { name: "APR", value: 950 },
  { name: "MAY", value: 1020 },
  { name: "JUN", value: 980 },
  { name: "JUL", value: 910 },
  { name: "AUG", value: 952 },
  { name: "SEP", value: 890 },
  { name: "OCT", value: 920 },
  { name: "NOV", value: 880 },
  { name: "DEC", value: 950 },
];

const ExchangeRateChart = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="w-full mt-[40px] pb-6 lg:pt-[29px] pt-5 lg:pb-[39px] lg:px-[42px]  mb-[42px] bg-[#181818] text-white  max-h-[545px] pl-5 rounded-lg">

      <h2 className="text-lg mb-[34px] font-bold">Exchange Rate</h2>


      {/* Title, Exchange Rate & Time Range Buttons */}
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div  className="flex flex-col gap-[10px]" >
          <h2 className="text-[14px] font-normal text-white text-opacity-50 ">Today</h2>
          <p className="text-xl flex items-center gap-2">
            <span className="font-bold">€1 EUR</span> = <span className="text-[#FFD900]">$952 USD</span>
            <Repeat size={18} className="text-[#FFD900]" />
          </p>
        </div>

        <div className="flex pr-6 mt-4 lg:mt-0 gap-2">
          {["Week", "Month", "Year", "Max"].map((label, index) => (
            <Button
              key={index}
              variant={label === "Month" ? "default" : "outline"}
              className={` rounded-[5px] border-none outline-none py-[5px] px-[8px]  text-sm ${label === "Month" ? "bg-[#FFD900] hover:bg-[#FFD900] text-black" : "bg-black hover:bg-[black] hover:text-white text-white"}`}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} onClick={(e) => setSelectedIndex(e.activeTooltipIndex ?? null)}>
            {/* Move defs to the top */}
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFD700" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#000000" stopOpacity={0.9} />
              </linearGradient>
            </defs>

            {/* X & Y Axes */}
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#aaa" }} axisLine={false} tickLine={false} />
            <YAxis
              yAxisId="right"
              domain={[800, 1050]}
              ticks={[800, 850, 900, 950, 1000, 1050]} // ✅ Ensure 6 lines
              orientation="right"
              tick={{ fontSize: 12, fill: "#aaa" }}
              axisLine={false}
              tickLine={false}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.2)" />

            {/* Tooltip */}
            <Tooltip
              cursor={{ stroke: "#FFD700", strokeWidth: 1 }}
              content={({ payload }) => {
                if (payload && payload.length && selectedIndex !== null) {
                  return (
                    <div className="bg-black text-white px-3 py-2 rounded-md text-sm shadow-lg">
                      <strong>${payload[0].value}</strong>
                      <div className="text-xs">20 Aug, 2023</div>
                    </div>
                  );
                }
                return null;
              }}
            />

            {/* Area with Gradient */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="none"
              fill="url(#gradient)"
              yAxisId="right"
            />

            {/* Line Chart */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#FFD900"
              strokeWidth={1}
              yAxisId="right"
              dot={(props) => {
                const { cx, cy, index } = props;
                return (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={index === selectedIndex ? 5 : 0} // Set radius to 0 when not selected
                    fill={index === selectedIndex ? "#FFD700" : "transparent"}
                    stroke={index === selectedIndex ? "black" : "transparent"}
                    strokeWidth={index === selectedIndex ? 2 : 0}
                  />
                );
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExchangeRateChart;
