import { useState, useMemo } from "react";
import { DataItem } from "../services/dataService";

interface UsePaginatedDataProps {
  data: DataItem[];
  itemsPerPage: number;
}

const usePaginatedData = ({ data, itemsPerPage }: UsePaginatedDataProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // فیلتر کردن داده‌ها بر اساس جستجو
  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        item.Industry.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [data, searchQuery],
  );

  // محاسبه داده‌های صفحه فعلی
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = useMemo(
    () => filteredData.slice(indexOfFirstItem, indexOfLastItem),
    [filteredData, indexOfFirstItem, indexOfLastItem],
  );

  // تعداد صفحات
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // تغییر صفحه
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    currentData,
    searchQuery,
    setSearchQuery,
    currentPage,
    totalPages,
    handlePageChange,
  };
};

export default usePaginatedData;
