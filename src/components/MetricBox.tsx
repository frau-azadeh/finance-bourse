import React from "react";

interface MetricBoxProps {
  title: string;
  data: { label: string; value: string | number }[];
  color: string;
}

const MetricBox: React.FC<MetricBoxProps> = ({ title, data, color }) => {
  return (
    <div
      className={`border rounded-lg p-6 shadow bg-${color}-100 border-${color}-300`}
    >
      <h2 className={`text-xl font-semibold text-${color}-700 mb-2`}>
        {title}
      </h2>
      {data.map((item, index) => (
        <p key={index} className="text-gray-700">
          <strong>{item.label}:</strong> {item.value}
        </p>
      ))}
    </div>
  );
};

export default MetricBox;
