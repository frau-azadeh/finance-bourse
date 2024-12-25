import React from "react";
import { DataItem } from "../services/dataService";

interface DataTableProps {
  data: DataItem[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="table-auto w-full border-collapse bg-white text-gray-800">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-3 border border-gray-300">Name</th>
            <th className="px-4 py-3 border border-gray-300">Full Name</th>
            <th className="px-4 py-3 border border-gray-300">EPS</th>
            <th className="px-4 py-3 border border-gray-300">Industry</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`text-center ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-blue-100 transition duration-200`}
            >
              <td className="px-4 py-3 border border-gray-300">
                {item.name ?? "N/A"}
              </td>
              <td className="px-4 py-3 border border-gray-300">
                {item.Full_Name ?? "Unknown"}
              </td>
              <td className="px-4 py-3 border border-gray-300">
                {item.eps ?? "N/A"}
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
