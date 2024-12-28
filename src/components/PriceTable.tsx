import React from "react";

interface PriceTableProps {
  title: string;
  data: {
    name: string;
    Industry: string;
    LastTradedPrice: number;
    LastTradedPrice_change: number;
  }[];
}

const PriceTable: React.FC<PriceTableProps> = ({ title, data }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      <h2 className="bg-green-700 text-white text-lg font-semibold px-6 py-3 dark:bg-[#334155]">
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-white">
          <thead>
            <tr className="bg-yellow-100 dark:bg-[#cbd5e1] text-gray-600 text-sm leading-normal">
              <th className="px-6 py-3 text-right">برند</th>
              <th className="px-6 py-3 text-right">صنعت</th>
              <th className="px-6 py-3 text-right">قیمت</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 hover:bg-gray-50 ${
                  index % 2 === 0
                    ? "bg-gray-50 dark:bg-[#475569] dark:text-white"
                    : "bg-white dark:bg-[#cbd5e1]"
                }`}
              >
                <td className="px-6 py-3">{item.name}</td>
                <td className="px-6 py-3">{item.Industry}</td>
                <td className="px-6 py-3">{item.LastTradedPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
