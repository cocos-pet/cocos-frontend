import clsx from "clsx";
import React from "react";
import {
  button,
  ButtonVariants,
  icon,
} from "@common/component/Button/styles.css.ts";

interface ButtonProps extends ButtonVariants {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Button 공통 컴포넌트
 * @param label
 * @param leftIcon 왼쪽 아이콘
 * @param rightIcon 오른쪽 아이콘
 * @param size 버튼 사이즈 small | medium | large
 * @param variant 버튼 종류 solidPrimary | solidNeutral | outlinePrimary
 * @param disabled 비활성화 여부
 * @param onClick
 * @constructor minjeoong
 */

export const Button: React.FC<ButtonProps> = ({
  label = "Button",
  leftIcon,
  rightIcon,
  size = "medium",
  variant = "solidPrimary",
  disabled,
  onClick,
}) => {
  return (
    <button
      className={button({ size, variant, disabled })}
      disabled={disabled}
      onClick={onClick}
    >
      {leftIcon && <div className={icon}>{leftIcon}</div>}
      {label}
      {rightIcon && <div className={icon}>{rightIcon}</div>}
    </button>
  );
};
