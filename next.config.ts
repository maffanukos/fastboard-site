import type { NextConfig } from "next";

// Мы управляем локалью через сегмент маршрута [locale] ("/ru", "/en"),
// поэтому убираем встроенную i18n-конфигурацию Next.js, чтобы избежать
// конфликтов и циклов переадресации.
const nextConfig: NextConfig = {
  // Для GitHub Pages нужен статический экспорт
  output: 'export',
  // Если репозиторий не основной (username.github.io), раскомментируйте:
  // basePath: '/fastboard-site',
  images: {
    unoptimized: true, // GitHub Pages не поддерживает оптимизацию изображений Next.js
  },
};

export default nextConfig;
