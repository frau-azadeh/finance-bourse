import React from "react";

interface MetricBoxProps {
  title: string;
  data: { label: string; value: string | number }[];
  color: string;
}

const MetricBox: React.FC<MetricBoxProps> = ({ title, data, color }) => {
  return (
    <div
      className={`border rounded-lg p-6 shadow-md bg-white border-${color}-200 hover:shadow-lg transition-shadow duration-300 dark:bg-[#334155] `}
    >
      <h2
        className={`text-xl font-bold text-${color}-800 mb-4 text-center border-b pb-2 dark:text-white`}
      >
        {title}
      </h2>
      <div className="space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2 rounded-md shadow-sm bg-yellow-100 dark:bg-[#475569]"
          >
            <span className="text-sm font-medium text-gray-600 dark:text-white">
              {item.label}
            </span>
            <span
              className={`text-sm font-bold ${
                typeof item.value === "number" && item.value > 0
                  ? "text-green-500"
                  : typeof item.value === "number" && item.value < 0
                    ? "text-red-500"
                    : "text-gray-800 dark:text-white"
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricBox;
