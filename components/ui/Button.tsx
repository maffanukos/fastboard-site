"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ui" | "ui-colored";
export type ButtonSize = "large" | "medium" | "small";
export type ButtonState = "default" | "hover" | "clicked" | "disabled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: ReactNode;
  iconOnly?: boolean;
}

const buttonStyles = {
  base: "relative inline-flex items-center justify-center rounded-full font-medium backdrop-blur-md transition-all duration-200 z-10",
  
  // Sizes
  size: {
    large: "h-[52px] px-9 text-lg",
    medium: "h-[42px] px-6 text-base font-semibold",
    small: "h-[36px] px-4 text-sm font-semibold",
  },
  
  sizeIcon: {
    large: "h-[52px] w-[52px]",
    medium: "h-[42px] w-[42px]",
    small: "h-[36px] w-[36px]",
  },
  
  // Variants
  variant: {
    primary: {
      base: "overflow-hidden border border-[#00d4ff]/70 bg-gradient-to-t from-[#00bfff]/40 via-[#00bfff]/10 to-transparent text-white shadow-[0_0_30px_rgba(0,212,255,0.3)]",
      hover: "hover:border-[#00d4ff] hover:from-[#00bfff]/50 hover:via-[#00bfff]/15 hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]",
      disabled: "disabled:border-[#666666] disabled:bg-gradient-to-t disabled:from-[#444444]/20 disabled:via-transparent disabled:to-transparent disabled:text-white/30 disabled:shadow-none disabled:cursor-not-allowed",
    },
    secondary: {
      base: "border border-white/20 bg-white/5 text-white",
      hover: "hover:border-white/30 hover:bg-white/10",
      disabled: "disabled:border-white/10 disabled:bg-white/5 disabled:text-white/30 disabled:cursor-not-allowed",
    },
    ui: {
      base: "border border-[#888888]/50 bg-[#888888]/10 text-white",
      hover: "hover:border-[#888888]/70 hover:bg-[#888888]/20",
      disabled: "disabled:border-[#666666] disabled:bg-[#444444]/20 disabled:text-white/30 disabled:cursor-not-allowed",
    },
    "ui-colored": {
      base: "overflow-hidden border border-[#009dff]/70 bg-gradient-to-t from-[#009dff]/40 via-[#009dff]/10 to-transparent text-white shadow-[0_0_30px_rgba(0,157,255,0.3)]",
      hover: "hover:border-[#009dff] hover:from-[#009dff]/50 hover:via-[#009dff]/15 hover:shadow-[0_0_40px_rgba(0,157,255,0.5)]",
      disabled: "disabled:border-[#666666] disabled:bg-gradient-to-t disabled:from-[#444444]/20 disabled:via-transparent disabled:to-transparent disabled:text-white/30 disabled:shadow-none disabled:cursor-not-allowed",
    },
  },
};

export default function Button({
  variant = "primary",
  size = "large",
  children,
  icon,
  iconOnly = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const variantStyles = buttonStyles.variant[variant];
  const sizeStyles = iconOnly ? buttonStyles.sizeIcon[size] : buttonStyles.size[size];

  return (
    <button
      className={cn(
        buttonStyles.base,
        sizeStyles,
        variantStyles.base,
        variantStyles.hover,
        variantStyles.disabled,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && !iconOnly && <span className="mr-2">{icon}</span>}
      {iconOnly ? icon : children}
    </button>
  );
}
