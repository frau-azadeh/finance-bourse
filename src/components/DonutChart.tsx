import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  TooltipItem,
} from "chart.js";

// ثبت پلاگین‌های Chart.js
ChartJS.register(ArcElement, Tooltip);

interface DonutChartProps {
  data: { [key: string]: number }; // داده‌هایی که درصد سهم هر صنعت را نشان می‌دهند
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  // گرفتن 10 صنعت برتر
  const sortedData = Object.entries(data)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);

  const labels = sortedData.map(([key]) => key); // برچسب‌ها
  const values = sortedData.map(([, value]) => value); // مقادیر

  const total = values.reduce((sum, val) => sum + val, 0); // مجموع برای درصدها

  const chartData = {
    labels,
    datasets: [
      {
        label: "Top 10 Industries",
        data: values,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFD700",
          "#40E0D0",
          "#8A2BE2",
          "#FF4500",
        ],
        borderColor: "#FFFFFF",
        borderWidth: 2,
        hoverOffset: 10, // فاصله هنگام هاور
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          boxWidth: 15,
          font: {
            size: 14,
          },
          color: "#555",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"doughnut">) {
            const percentage = ((context.raw as number) / total) * 100;
            return `${context.label}: ${context.raw} (${percentage.toFixed(
              2
            )}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full md:w-1/2 lg:w-full mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-center mb-4">Top 10 Industries</h2>
      <Doughnut data={chartData} options={options} />
      <p className="text-center text-gray-500 mt-2">Share of top industries</p>
    </div>
  );
};

export default DonutChart;
