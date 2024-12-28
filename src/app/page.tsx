"use client";

import React from "react";
import useFetchData from "../hooks/useFetchData";
import usePaginatedData from "../hooks/usePaginatedData";
import useIndustryMetrics from "../hooks/useIndustryMetrics";
import useTopAndLowestPrices from "../hooks/useTopAndLowestPrices";
import DataTable from "../components/DataTable";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import MetricBox from "../components/MetricBox";
import BarChart from "../components/BarChart";
import PriceTable from "../components/PriceTable";
import DonutChart from "../components/DonutChart";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useFetchData();
  const itemsPerPage = 15;

  const {
    currentData,
    searchQuery,
    setSearchQuery,
    currentPage,
    totalPages,
    handlePageChange,
  } = usePaginatedData({ data, itemsPerPage });

  const {
    industryDistribution,
    highestPositiveChangeItem,
    highestNegativeChangeItem,
  } = useIndustryMetrics(data);

  const { top5, lowest5 } = useTopAndLowestPrices(data);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-blue-500 text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-900 ">
      <div className="flex flex-1">
        {/* سایدبار */}
        <Sidebar />

        {/* محتوای اصلی */}
        <div className="flex-1 mr-0 md:mr-64 p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ستون وسط */}
          <div className="space-y-6 lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <MetricBox
                title="بیشترین رشد"
                color="green"
                data={[
                  { label: "برند", value: highestPositiveChangeItem.name },
                  {
                    label: "میزان تغییر",
                    value: highestPositiveChangeItem.LastTradedPrice_change,
                  },
                  {
                    label: "آخرین قیمت",
                    value: highestPositiveChangeItem.LastTradedPrice,
                  },
                ]}
              />
              <MetricBox
                title="کمترین رشد"
                color="red"
                data={[
                  { label: "برند", value: highestNegativeChangeItem.name },
                  {
                    label: "میزان تغییر",
                    value: highestNegativeChangeItem.LastTradedPrice_change,
                  },
                  {
                    label: "آخرین قیمت",
                    value: highestNegativeChangeItem.LastTradedPrice,
                  },
                ]}
              />
            </div>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <DataTable data={currentData} />
            <Pagination
              totalItems={totalPages}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
            <BarChart data={industryDistribution} />
          </div>
          {/* ستون چپ */}
          <div className="space-y-6 lg:col-span-1">
            <DonutChart data={industryDistribution} />
            <PriceTable title="ارزانترین قیمت" data={lowest5} />
            <PriceTable title="بیشترین قیمت" data={top5} />
          </div>
        </div>
      </div>

      {/* فوتر */}
      <Footer />
    </div>
  );
};

export default Dashboard;
