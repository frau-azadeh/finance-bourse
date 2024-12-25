import { useState, useEffect } from "react";
import { fetchAllData, DataItem } from "../services/dataService";

const useFetchData = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchAllData();
        console.log("Fetched Data:", result); // بررسی داده‌ها
        setData(result);
      } catch (err: any) {
        console.error("Error fetching data:", err.message);
        setError(err.message || "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetchData;
