export interface DataItem {
  name: string;
  Full_Name: string;
  eps: number;
  Industry: string;
  [key: string]: any; // برای انعطاف‌پذیری با سایر فیلدها
}

export const fetchAllData = async (): Promise<DataItem[]> => {
  try {
    const response = await fetch(
      `http://localhost:5000/data?_=${new Date().getTime()}`,
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const json = await response.json();

    // بازگرداندن فقط آرایه داده‌ها
    if (json.ok && Array.isArray(json.data)) {
      return json.data;
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error: any) {
    console.error("Fetch error:", error.message);
    throw new Error("Failed to fetch data");
  }
};
