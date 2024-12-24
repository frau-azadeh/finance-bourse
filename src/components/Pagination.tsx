import React from 'react';

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
    <div className="flex justify-center mt-4">
      <button
        className={`px-4 py-2 mx-1 border rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-white'}`}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`px-4 py-2 mx-1 border rounded ${
            currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white'
          }`}
          onClick={() => handlePageClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className={`px-4 py-2 mx-1 border rounded ${
          currentPage === totalPages ? 'bg-gray-300' : 'bg-white'
        }`}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
