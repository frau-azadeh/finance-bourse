export interface DataItem {
  name: string;
  Full_Name: string;
  eps: number;
  Industry: string;
  [key: string]: any; // برای انعطاف‌پذیری با سایر فیلدها
}

export const fetchAllData = async (): Promise<DataItem[]> => {
  try {
    const response = await fetch(`http://localhost:5000/data`);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const json: { ok: boolean; data: DataItem[] } = await response.json();

    if (json.ok && Array.isArray(json.data)) {
      return json.data;
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error: any) {
    console.error("Fetch error:", error.message);
    throw error;
  }
};
