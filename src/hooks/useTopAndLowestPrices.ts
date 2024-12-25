import { useMemo } from "react";
import { DataItem } from "../services/dataService";

const useTopAndLowestPrices = (data: DataItem[]) => {
  const top5 = useMemo(() => {
    return [...data]
      .sort((a, b) => b.LastTradedPrice - a.LastTradedPrice) // مرتب‌سازی نزولی
      .slice(0, 5)
      .map((item) => ({
        name: item.name || "N/A",
        Industry: item.Industry || "N/A",
        LastTradedPrice: item.LastTradedPrice || 0,
        LastTradedPrice_change: item.LastTradedPrice_change || 0,
      })); // تبدیل به قالب موردنظر
  }, [data]);

  const lowest5 = useMemo(() => {
    return [...data]
      .sort((a, b) => a.LastTradedPrice - b.LastTradedPrice) // مرتب‌سازی صعودی
      .slice(0, 5)
      .map((item) => ({
        name: item.name || "N/A",
        Industry: item.Industry || "N/A",
        LastTradedPrice: item.LastTradedPrice || 0,
        LastTradedPrice_change: item.LastTradedPrice_change || 0,
      })); // تبدیل به قالب موردنظر
  }, [data]);

  return { top5, lowest5 };
};

export default useTopAndLowestPrices;
