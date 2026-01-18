/**
 * Цвета из Figma Design System
 * Используются на всех страницах сайта для обеспечения консистентности
 */
export const COLORS = {
  background: {
    primary: "#040D15",
    secondary: "#1C253A",
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255, 255, 255, 0.7)",
    accent: "#00bfff",
  },
  glow: {
    /**
     * Основной цвет подсветки из переменной Figma (#0060E5)
     * Используется для компонента GlowEffect на всех страницах
     */
    lighter: "#0060E5",
    darker: "#023273",
  },
  border: {
    default: "rgba(255, 255, 255, 0.1)",
    accent: "#00bfff",
  },
} as const;
