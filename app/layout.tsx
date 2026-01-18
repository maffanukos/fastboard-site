import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fastboard BI — Корпоративная BI‑система",
  description:
    "Корпоративный сайт компании‑разработчика отечественной BI‑системы Fastboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Весь реальный layout (html/body/шапка/футер) находится в app/[locale]/layout.tsx
  return children;
}

