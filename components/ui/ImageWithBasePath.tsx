import Image, { ImageProps } from 'next/image';

/**
 * Обертка над Next.js Image компонентом, которая автоматически добавляет basePath
 * для правильной работы на GitHub Pages
 */
export default function ImageWithBasePath({ src, ...props }: ImageProps) {
  // basePath для GitHub Pages - используем переменную окружения или хардкод для продакшена
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/fastboard-site';
  
  // Если src - строка и начинается с '/', добавляем basePath
  const imageSrc = typeof src === 'string' && src.startsWith('/')
    ? `${basePath}${src}`
    : src;
  
  return <Image src={imageSrc} {...props} />;
}
