"use client";

import React from "react";
import useFetchData from "../hooks/useFetchData";
import usePaginatedData from "../hooks/usePaginatedData";
import useIndustryMetrics from "../hooks/useIndustryMetrics"; // هوک برای محاسبه اطلاعات صنعت
import DataTable from "../components/DataTable";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import MetricBox from "../components/MetricBox"; // کامپوننت برای نمایش اطلاعات در باکس

const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useFetchData();
  const itemsPerPage = 10;

  const {
    currentData,
    searchQuery,
    setSearchQuery,
    currentPage,
    totalPages,
    handlePageChange,
  } = usePaginatedData({ data, itemsPerPage });

  // استفاده از هوک برای محاسبه بالاترین تغییرات صعودی و نزولی در صنعت دارویی
  const { highestPositiveChangeItem, highestNegativeChangeItem } =
    useIndustryMetrics(data, "مواد و محصولات دارویی");

  if (isLoading) {
    return <p className="text-center mt-10 text-blue-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Finance Dashboard</h1>

      {/* باکس‌های اطلاعات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* باکس تغییر صعودی */}
        <MetricBox
          title="Highest Positive Change"
          color="green"
          data={[
            { label: "Name", value: highestPositiveChangeItem.name },
            {
              label: "Change",
              value: highestPositiveChangeItem.LastTradedPrice_change,
            },
            {
              label: "Last Traded Price",
              value: highestPositiveChangeItem.LastTradedPrice,
            },
          ]}
        />

        {/* باکس تغییر نزولی */}
        <MetricBox
          title="Highest Negative Change"
          color="red"
          data={[
            { label: "Name", value: highestNegativeChangeItem.name },
            {
              label: "Change",
              value: highestNegativeChangeItem.LastTradedPrice_change,
            },
            {
              label: "Last Traded Price",
              value: highestNegativeChangeItem.LastTradedPrice,
            },
          ]}
        />
      </div>

      {/* کامپوننت جستجو */}
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {/* جدول داده‌ها */}
      <DataTable data={currentData} />

      {/* Pagination */}
      <Pagination
        totalItems={totalPages}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Dashboard;
