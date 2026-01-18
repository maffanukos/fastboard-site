import { COLORS, GLOW_SIZES, OPACITY } from "../../constants";

interface GlowEffectProps {
  variant?: "wide" | "narrow";
  color?: "lighter" | "darker";
  position?: "center" | "top" | "bottom";
  blur?: "small" | "medium" | "wide";
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function GlowEffect({
  variant = "wide",
  color = "lighter",
  position = "center",
  blur = "wide",
  opacity,
  className = "",
  style = {},
}: GlowEffectProps) {
  const glowColor = color === "lighter" ? COLORS.glow.lighter : COLORS.glow.darker;
  const blurValue = GLOW_SIZES.blur[blur];
  const size = variant === "wide" ? GLOW_SIZES.wide : GLOW_SIZES.narrow;
  const finalOpacity = opacity ?? OPACITY.glow.default;

  const positionStyles = {
    center: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
    top: { top: 0, left: "50%", transform: "translateX(-50%)" },
    bottom: { bottom: 0, left: "50%", transform: "translateX(-50%)" },
  };

  const finalWidth = style.width || size.width;
  const finalHeight = style.height || size.height;

  // Убираем width и height из style, чтобы они не перезаписывались
  const { width, height, ...restStyle } = style;

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        ...positionStyles[position],
        width: finalWidth,
        height: finalHeight,
        background: `radial-gradient(ellipse, ${glowColor} 0%, ${glowColor}FF 20%, ${glowColor}CC 40%, transparent 70%)`,
        opacity: finalOpacity || 1,
        filter: `blur(${blurValue})`,
        zIndex: 0,
        ...restStyle,
      }}
    />
  );
}
