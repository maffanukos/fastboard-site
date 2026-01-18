export const GLOW_SIZES = {
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

export const OPACITY = {
  glow: {
    default: 0.9,
    light: 0.5,
    medium: 0.6,
    heavy: 1.0,
  },
} as const;
