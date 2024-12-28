import React from "react";
import { DataItem } from "../services/dataService";

interface DataTableProps {
  data: DataItem[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="table-auto w-full border-collapse bg-white text-gray-800">
        <thead className="bg-green-700 text-white dark:bg-[#334155]">
          <tr>
            <th className="px-4 py-3 border border-gray-300">برند</th>
            <th className="px-4 py-3 border border-gray-300">نام شرکت</th>
            <th className="px-4 py-3 border border-gray-300">قیمت</th>
            <th className="px-4 py-3 border border-gray-300">تغییر</th>
            <th className="px-4 py-3 border border-gray-300">صنعت</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`text-center ${
                index % 2 === 0
                  ? "bg-yellow-100 dark:bg-[#cbd5e1]"
                  : "bg-white dark:bg-[#475569]"
              } hover:bg-lime-200 transition duration-200 dark:hover:bg-slate-500`}
            >
              <td className="px-4 py-3 border border-gray-300">
                {item.name ?? "N/A"}
              </td>
              <td className="px-4 py-3 border border-gray-300">
                {item.Full_Name ?? "Unknown"}
              </td>
              <td className="px-4 py-3 border border-gray-300">
                {item.LastTradedPrice ?? "N/A"}
              </td>

              <td
                className={`px-4 py-3 border border-gray-300 ${
                  item.LastTradedPrice_change >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.LastTradedPrice_change}
              </td>
              <td className="px-4 py-3 border border-gray-300">
                {item.Industry ?? "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
