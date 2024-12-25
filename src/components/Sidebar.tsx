import React, { useState } from "react";
import {
  FaHome,
  FaChartBar,
  FaCog,
  FaQuestionCircle,
  FaBars,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "داشبورد", icon: <FaHome /> },
    { label: "گزارش‌ها", icon: <FaChartBar /> },
    { label: "تنظیمات", icon: <FaCog /> },
    { label: "کمک", icon: <FaQuestionCircle /> },
  ];

  return (
    <>
      {/* منوی کناری برای دسکتاپ */}
      <div className="hidden md:flex fixed inset-y-0 right-0 bg-gray-800 text-white w-30 flex-col">
        <h2 className="text-lg font-semibold text-center py-4">منوی ناوبری</h2>
        <ul className="flex-1 overflow-y-auto space-y-4 px-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* منوی همبرگری برای موبایل */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-800 text-white z-50">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-semibold">منو</h2>
          <button
            className="text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
        {isMenuOpen && (
          <div className="bg-gray-700">
            <ul className="space-y-2 px-4 py-2">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-600 rounded cursor-pointer"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
