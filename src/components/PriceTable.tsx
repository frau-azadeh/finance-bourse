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
      <h2 className="bg-blue-600 text-white text-lg font-semibold px-6 py-3">
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm leading-normal">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Industry</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Change</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-6 py-3">{item.name}</td>
                <td className="px-6 py-3">{item.Industry}</td>
                <td className="px-6 py-3">{item.LastTradedPrice}</td>
                <td
                  className={`px-6 py-3 ${
                    item.LastTradedPrice_change >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.LastTradedPrice_change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
