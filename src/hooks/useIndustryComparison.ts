import { useMemo } from "react";
import { DataItem } from "../services/dataService";

const useIndustryComparison = (data: DataItem[]) => {
  const industryData = useMemo(() => {
    const distribution: { [key: string]: number } = {};
    data.forEach((item) => {
      distribution[item.Industry] = (distribution[item.Industry] || 0) + 1; // شمارش تعداد
    });
    return distribution;
  }, [data]);

  return industryData;
};

export default useIndustryComparison;
