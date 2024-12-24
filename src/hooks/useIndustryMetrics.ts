import { useMemo } from "react";
import { DataItem } from "../services/dataService";

const useIndustryMetrics = (data: DataItem[], industry: string) => {
  // فیلتر کردن داده‌ها بر اساس صنعت
  const industryData = useMemo(
    () => data.filter((item) => item.Industry === industry),
    [data, industry],
  );

  // محاسبه بالاترین تغییر قیمت صعودی
  const highestPositiveChangeItem = useMemo(() => {
    const positiveChanges = industryData.filter(
      (item) => item.LastTradedPrice_change > 0,
    );
    if (positiveChanges.length === 0) {
      return { name: "N/A", LastTradedPrice_change: 0, LastTradedPrice: 0 };
    }
    return positiveChanges.reduce((prev, curr) =>
      curr.LastTradedPrice_change > prev.LastTradedPrice_change ? curr : prev,
    );
  }, [industryData]);

  // محاسبه بالاترین تغییر قیمت نزولی
  const highestNegativeChangeItem = useMemo(() => {
    const negativeChanges = industryData.filter(
      (item) => item.LastTradedPrice_change < 0,
    );
    if (negativeChanges.length === 0) {
      return { name: "N/A", LastTradedPrice_change: 0, LastTradedPrice: 0 };
    }
    return negativeChanges.reduce((prev, curr) =>
      curr.LastTradedPrice_change < prev.LastTradedPrice_change ? curr : prev,
    );
  }, [industryData]);

  return { highestPositiveChangeItem, highestNegativeChangeItem };
};

export default useIndustryMetrics;
