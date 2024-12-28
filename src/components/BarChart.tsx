import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

interface BarChartProps {
  data: { [key: string]: number };
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const labels = Object.keys(data);
  const values = Object.values(data);
  const chartData: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: "Industry Comparison",
        data: values,
        backgroundColor: labels.map(
          (_, index) =>
            `rgba(${100 + index * 15}, ${150 - index * 10}, ${200 - index * 10}, 0.8)`,
        ), // رنگ‌های گرادیانت برای هر میله
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
        borderRadius: 5, // گوشه‌های گرد
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // عدم نمایش توضیحات
      },
      tooltip: {
        callbacks: {
          label: (context) => `Value: ${context.raw}`, // نمایش مقدار در Tooltip
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
          color: "#555",
        },
        grid: {
          display: false, // حذف خطوط عمودی
        },
        title: {
          display: true,
          text: "Industries",
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#333",
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
          color: "#555",
        },
        grid: {
          color: "rgba(200, 200, 200, 0.3)", // خطوط افقی کم‌رنگ
        },
        title: {
          display: true,
          text: "Values",
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#333",
        },
      },
    },
  };

  return (
    <div className="w-full md:w-3/4 lg:w-full mx-auto p-4 bg-white rounded-lg shadow-md ">
      <h2 className="text-lg font-semibold text-center mb-4">
        مقایسه صنعت ها در نمودار امروز
      </h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
