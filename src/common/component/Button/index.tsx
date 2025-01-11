import clsx from "clsx";
import React from "react";
import { styles } from "@common/component/Button/styles.css.ts";

interface TextFieldProps {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

export const Button: React.FC<TextFieldProps> = ({
  label,
  leftIcon,
  rightIcon,
  size,
  disabled,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        size && styles[size],
        disabled && styles.disabled
      )}
      disabled={disabled}
    >
      {leftIcon && <div className={styles.icon}>{leftIcon}</div>}
      {label}
      {rightIcon && <div className={styles.icon}>{rightIcon}</div>}
    </button>
  );
};
