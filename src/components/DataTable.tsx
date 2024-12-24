import React from "react";
import { DataItem } from "../services/dataService";

interface DataTableProps {
  data: DataItem[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Full Name</th>
            <th className="px-4 py-2 border">EPS</th>
            <th className="px-4 py-2 border">Industry</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center hover:bg-gray-100">
              <td className="px-4 py-2 border">{item.name ?? "N/A"}</td>
              <td className="px-4 py-2 border">
                {item.Full_Name ?? "Unknown"}
              </td>
              <td className="px-4 py-2 border">{item.eps ?? "N/A"}</td>
              <td className="px-4 py-2 border">{item.Industry ?? "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
