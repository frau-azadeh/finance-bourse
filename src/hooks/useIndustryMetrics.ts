import { useMemo } from "react";
import { DataItem } from "../services/dataService";

const useIndustryMetrics = (data: DataItem[]) => {
  // محاسبه توزیع داده‌ها بر اساس صنعت
  const industryDistribution = useMemo(() => {
    const distribution: { [key: string]: number } = {};
    data.forEach((item) => {
      distribution[item.Industry] = (distribution[item.Industry] || 0) + 1;
    });
    return distribution;
  }, [data]);

  // محاسبه بالاترین تغییر قیمت صعودی
  const highestPositiveChangeItem = useMemo(() => {
    const positiveChanges = data.filter(
      (item) => item.LastTradedPrice_change > 0,
    );
    if (positiveChanges.length === 0) {
      return { name: "N/A", LastTradedPrice_change: 0, LastTradedPrice: 0 };
    }
    return positiveChanges.reduce((prev, curr) =>
      curr.LastTradedPrice_change > prev.LastTradedPrice_change ? curr : prev,
    );
  }, [data]);

  // محاسبه بالاترین تغییر قیمت نزولی
  const highestNegativeChangeItem = useMemo(() => {
    const negativeChanges = data.filter(
      (item) => item.LastTradedPrice_change < 0,
    );
    if (negativeChanges.length === 0) {
      return { name: "N/A", LastTradedPrice_change: 0, LastTradedPrice: 0 };
    }
    return negativeChanges.reduce((prev, curr) =>
      curr.LastTradedPrice_change < prev.LastTradedPrice_change ? curr : prev,
    );
  }, [data]);

  return {
    industryDistribution,
    highestPositiveChangeItem,
    highestNegativeChangeItem,
  };
};

export default useIndustryMetrics;
