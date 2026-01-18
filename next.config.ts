import type { NextConfig } from "next";

// Мы управляем локалью через сегмент маршрута [locale] ("/ru", "/en"),
// поэтому убираем встроенную i18n-конфигурацию Next.js, чтобы избежать
// конфликтов и циклов переадресации.
const nextConfig: NextConfig = {};

export default nextConfig;
