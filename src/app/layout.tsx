import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "../context/themeContext";
import "./globals.css";
import "../styles/font.css";

export const metadata: Metadata = {
  title: "داشبورد معاملات بورس",
  description: "داشبورد مدیریتی معاملات بورس کشور",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="fa" dir="rtl">
        <body className="bg-green-50">
          <main>{children}</main>
        </body>
      </html>
    </ThemeProvider>
  );
}
