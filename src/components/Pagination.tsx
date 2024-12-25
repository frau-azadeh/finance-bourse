import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"; // آیکون‌ها

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages === 1) return null;

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <div className="p-4 bg-white shadow-md rounded-lg flex items-center gap-4">
        {/* دکمه قبلی */}
        <button
          className={`flex items-center justify-center px-3 py-2 text-sm font-medium rounded-full shadow ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <MdChevronLeft className="w-5 h-5" />
        </button>

        {/* شماره صفحات */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`flex items-center justify-center px-3 py-2 text-sm font-medium rounded-full shadow ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handlePageClick(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* دکمه بعدی */}
        <button
          className={`flex items-center justify-center px-3 py-2 text-sm font-medium rounded-full shadow ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <MdChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
