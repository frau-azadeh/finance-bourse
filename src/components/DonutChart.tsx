import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ثبت پلاگین‌های Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  data: { [key: string]: number }; // داده‌هایی که درصد سهم هر صنعت را نشان می‌دهند
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateDarkMode = () => {
      const darkModeEnabled =
        document.documentElement.classList.contains("dark");
      setIsDarkMode(darkModeEnabled);
    };

    // فراخوانی اولیه و همچنین شنیدن تغییرات دارک مد
    updateDarkMode();
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

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
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // حذف نوشته‌های پایین نمودار
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const percentage = ((context.raw as number) / total) * 100;
            return `${context.label}: ${context.raw} (${percentage.toFixed(2)}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full md:w-1/2 lg:w-full mx-auto p-4 bg-white rounded-lg shadow-md dark:bg-[#334155] border border-white">
      <h2 className="text-lg text-center mb-4 dark:text-white">
        10 صنعت برتر در معاملات بورس امروز
      </h2>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DonutChart;
