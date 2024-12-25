import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// تنظیم __dirname برای ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// مسیر فایل JSON
const filePath = path.join(__dirname, "data.json");

// تابع برای دریافت داده‌ها از API و ذخیره در فایل JSON
const fetchAndSaveData = async () => {
  try {
    const apiUrl =
      "https://bourse.chartapi.ir/ickvopfg9pb5dno6kqmnpg7o7dvd4sx1/alldata";
    const response = await axios.get(apiUrl);

    // بررسی ساختار داده‌ها و ذخیره در فایل
    if (response.data && Array.isArray(response.data.data)) {
      const cleanedData = response.data.data;

      fs.writeFileSync(filePath, JSON.stringify(cleanedData, null, 2), "utf-8");
      console.log("Data successfully fetched and saved to data.json");
    } else {
      console.error("Invalid data format from API");
    }
  } catch (error: any) {
    console.error("Error fetching data from API:", error.message || error);
  }
};

// مسیر برای ارائه داده‌ها از فایل JSON
app.get("/data", (req: Request, res: Response): void => {
  try {
    if (!fs.existsSync(filePath)) {
      res.status(404).json({ ok: false, error: "Data file not found" });
      return;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");

    if (!fileContent || fileContent.trim() === "") {
      res
        .status(500)
        .json({ ok: false, error: "Data file is empty or invalid" });
      return;
    }

    const data = JSON.parse(fileContent);
    res.json({ ok: true, data });
  } catch (error: any) {
    console.error("Error reading data file:", error.message || error);
    res.status(500).json({ ok: false, error: "Failed to read data file" });
  }
});

// شروع سرور
const PORT = 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  // دریافت داده‌ها از API هنگام شروع سرور
  await fetchAndSaveData();

  // به‌روزرسانی داده‌ها هر 5 دقیقه
  setInterval(fetchAndSaveData, 5 * 60 * 1000);
});
