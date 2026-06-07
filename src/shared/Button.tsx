import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  variant?: "surface" | "surfaceObject";
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
  uniformPadding?: boolean;
  size?: "sm" | "md" | "lg";
  shape?: "circle";
  className?: string;
};

export function Button({
  variant = "surface",
  children,
  type = "button",
  onClick,
  disabled,
  "aria-label": ariaLabel,
  uniformPadding,
  size = "md",
  shape,
  className,
}: Props) {
  const sizeClass = { sm: styles.sm, md: "", lg: styles.lg }[size];
  return (
    <button
      className={`${styles.button} ${variant === "surfaceObject" ? styles.surfaceObject : styles.surface} ${uniformPadding ? styles.paddingEqual : ""} ${sizeClass} ${shape === "circle" ? styles.circle : ""} ${className ?? ""}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
