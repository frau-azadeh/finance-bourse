import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();

// فعال کردن CORS
app.use(cors());

// جلوگیری از کش شدن داده‌ها
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

// مسیر برای ارائه داده‌ها از فایل JSON
app.get('/data', (req: Request, res: Response) => {
  try {
    const filePath = path.join(__dirname, 'data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // اطمینان از ارسال صحیح ساختار داده
    res.json({ ok: true, data });
  } catch (error: any) {
    console.error('Error reading data:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// شروع سرور
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
