import type { NextConfig } from "next";

// Мы управляем локалью через сегмент маршрута [locale] ("/ru", "/en"),
// поэтому убираем встроенную i18n-конфигурацию Next.js, чтобы избежать
// конфликтов и циклов переадресации.
const basePath = '/fastboard-site';

const nextConfig: NextConfig = {
  // Для GitHub Pages нужен статический экспорт
  output: 'export',
  // Репозиторий не основной (username.github.io), поэтому нужен basePath
  basePath: basePath,
  // assetPrefix нужен для правильной загрузки статических ресурсов (_next, изображения)
  assetPrefix: basePath,
  images: {
    unoptimized: true, // GitHub Pages не поддерживает оптимизацию изображений Next.js
  },
  // Устанавливаем переменную окружения для использования в компонентах
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
