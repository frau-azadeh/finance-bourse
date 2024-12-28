import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-end">
        <input
          type="text"
          className="w-full dark:bg-[#334155] dark:text-white px-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-700 text-right transition duration-300"
          placeholder="🔍 جستجو بر اساس صنعت..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
