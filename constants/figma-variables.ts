/**
 * Переменные из Figma Design System
 * Источник: https://www.figma.com/design/njxXU3HWWVCMQlPSdKfHKP/FB2-Library
 * 
 * Эти переменные должны использоваться на всех страницах сайта для обеспечения консистентности дизайна.
 */

export const FIGMA_VARIABLES = {
  /**
   * Цвета для подсветки (Glow/Highlight)
   */
  glow: {
    /**
     * Основной цвет подсветки из переменной Figma
     * Используется для компонента GlowEffect
     */
    lighter: "#0060E5",
    darker: "#023273",
  },
  
  /**
   * Цвета фона
   */
  background: {
    primary: "#040D15",
    secondary: "#1C253A",
  },
  
  /**
   * Цвета текста
   */
  text: {
    primary: "#ffffff",
    secondary: "rgba(255, 255, 255, 0.7)",
    accent: "#00bfff",
  },
  
  /**
   * Цвета границ
   */
  border: {
    default: "rgba(255, 255, 255, 0.1)",
    accent: "#00bfff",
  },
} as const;

/**
 * Размеры для эффектов подсветки
 */
export const GLOW_EFFECT_SIZES = {
  wide: {
    width: "1701px",
    height: "614px",
  },
  narrow: {
    width: "500px",
    height: "500px",
  },
  blur: {
    wide: "500px",
    medium: "250px",
    small: "150px",
  },
} as const;

/**
 * Прозрачность для эффектов
 */
export const GLOW_OPACITY = {
  default: 0.9,
  bright: 1.5,
  dim: 0.5,
} as const;
