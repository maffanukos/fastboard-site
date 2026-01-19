import Image, { ImageProps } from 'next/image';

/**
 * Обертка над Next.js Image компонентом, которая автоматически добавляет basePath
 * для правильной работы на GitHub Pages
 * 
 * basePath должен совпадать с basePath в next.config.ts
 */
const BASE_PATH = '/fastboard-site';

export default function ImageWithBasePath({ src, ...props }: ImageProps) {
  // Если src - строка и начинается с '/', добавляем basePath
  // Проверяем, что basePath еще не добавлен
  const imageSrc = typeof src === 'string' && src.startsWith('/') && !src.startsWith(BASE_PATH)
    ? `${BASE_PATH}${src}`
    : src;
  
  return <Image src={imageSrc} {...props} />;
}
