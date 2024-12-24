import axios from 'axios';

const API_BASE_URL = 'https://bourse.chartapi.ir/ickvopfg9pb5dno6kqmnpg7o7dvd4sx1/';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 250000, // زمان انتظار (میلی‌ثانیه)
  headers: {
    'Content-Type': 'application/json',
  },
});

// اضافه کردن Interceptor برای مدیریت خطاها
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
