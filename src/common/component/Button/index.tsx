import clsx from "clsx";
import React from "react";
import { styles, variants } from "@common/component/Button/styles.css.ts";

interface TextFieldProps {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "solidPrimary" | "solidNeutral" | "outlinePrimary";
  disabled?: boolean;
}

/**
 * Button 공통 컴포넌트
 * @param label
 * @param leftIcon 왼쪽 아이콘
 * @param rightIcon 오른쪽 아이콘
 * @param size 버튼 사이즈 small | medium | large
 * @param variant 버튼 종류 solidPrimary | solidNeutral | outlinePrimary
 * @param disabled 비활성화 여부
 * @constructor minjeoong
 */

export const Button: React.FC<TextFieldProps> = ({
  label = "Button",
  leftIcon,
  rightIcon,
  size = "medium",
  variant = "solidPrimary",
  disabled,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[size],
        disabled && styles.disabled,
        !disabled && variants[variant],
        disabled && variant === "outlinePrimary" && styles.disabledOutline
      )}
      disabled={disabled}
    >
      {leftIcon && <div className={styles.icon}>{leftIcon}</div>}
      {label}
      {rightIcon && <div className={styles.icon}>{rightIcon}</div>}
    </button>
  );
};
