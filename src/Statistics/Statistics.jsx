import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    { name: "Basic HTML & CSS", Marks: 60 },
    { name: "Responsive", Marks: 50 },
    { name: "Bootstrap & Tailwind", Marks: 60 },
    { name: "Basic JS", Marks: 60 },
    { name: "Intermediate JS", Marks: 60 },
    { name: "Error Handling", Marks: 60 },
    { name: "JS Api", Marks: 54 },
    { name: "React Basic", Marks: 60 },
  ];
  return (
    <div>
      <h1
        style={{ backgroundColor: "#F9F9FF" }}
        className="bg-purple-500 text-center py-24 text-3xl font-bold"
      >
        Statistics
      </h1>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center my-20">
          <h3 className="mb-10 text-2xl font-bold">Assignment Marks Chart</h3>
          <AreaChart
            width={1200}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Marks"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
