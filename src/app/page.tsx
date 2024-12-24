"use client";

import React from "react";
import useFetchData from "../hooks/useFetchData";
import DataTable from "../components/DataTable";

const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useFetchData();

  if (isLoading) {
    return <p className="text-center mt-10 text-blue-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  // بررسی اینکه داده‌ها آرایه هستند
  if (!Array.isArray(data)) {
    return (
      <p className="text-center mt-10 text-red-500">Invalid data format</p>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Finance Dashboard</h1>
      <DataTable data={data} />
    </div>
  );
};

export default Dashboard;
