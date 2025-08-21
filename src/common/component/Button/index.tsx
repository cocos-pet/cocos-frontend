"use client";

import React from "react";
import { button, ButtonVariants, icon } from "@common/component/Button/styles.css.ts";

interface ButtonProps {
  width?: string;
  label?: string | React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  className?: string;
}

type CombinedButtonProps = ButtonProps & Exclude<ButtonVariants, undefined>;

/**
 * Button 공통 컴포넌트
 * @param label
 * @param leftIcon 왼쪽 아이콘
 * @param rightIcon 오른쪽 아이콘
 * @param size 버튼 사이즈 small | medium | large
 * @param variant 버튼 종류 solidPrimary | solidNeutral | outlinePrimary
 * @param disabled 비활성화 여부
 * @param style 버튼 스타일
 * @param className 버튼 클래스
 * @param onClick
 * @param props
 * @constructor minjeoong
 */

export const Button = ({
  width = "",
  label = "Button",
  leftIcon,
  rightIcon,
  size = "medium",
  variant = "solidPrimary",
  disabled,
  onClick,
  style,
  className,
  ...props
}: CombinedButtonProps) => {
  const buttonStyle = {
    ...style,
    ...(width && { width }),
  };

  return (
    <button
      style={buttonStyle}
      className={`${button({ size, variant, disabled })} ${className ?? ""}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {leftIcon && <div className={icon}>{leftIcon}</div>}
      {label}
      {rightIcon && <div className={icon}>{rightIcon}</div>}
    </button>
  );
};
