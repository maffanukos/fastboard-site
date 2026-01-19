/**
 * Утилита для получения правильного пути к изображению с учетом basePath
 * Используется для GitHub Pages, где нужен basePath: '/fastboard-site'
 */
export function getImagePath(path: string): string {
  // Если путь уже начинается с basePath, возвращаем как есть
  if (path.startsWith('/fastboard-site/')) {
    return path;
  }
  
  // Если путь начинается с '/', добавляем basePath
  if (path.startsWith('/')) {
    return `/fastboard-site${path}`;
  }
  
  // Если путь относительный, возвращаем как есть (будет работать относительно текущей страницы)
  return path;
}
