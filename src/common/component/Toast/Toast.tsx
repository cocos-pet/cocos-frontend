import React, { useEffect, useState } from "react";
import {
  icon,
  toast,
  ToastVariants,
} from "@common/component/Toast/Toast.css.ts";
import { IcDelete } from "@asset/svg";

interface ToastProps {
  message: string;
  onClick?: () => void;
}

type CombinedButtonProps = ToastProps & Exclude<ToastVariants, undefined>;

/**
 * Toast 컴포넌트
 * @param message 토스트 메세지
 * @param variant 종류 (default, error)
 * @param iconColor 아이콘 색상 (black, white)
 * @param onClick 토스트 삭제 버튼 이벤트
 * @constructor
 */

export const Toast = ({
  message,
  variant,
  iconColor,
  onClick,
}: CombinedButtonProps) => {
  const [isVisible, setIsVisible] = useState(message !== "");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [5000]);

  const handleDelete = () => {
    setIsVisible(false);
    if (onClick) {
      onClick();
    }
  };

  if (!isVisible) return null;

  return (
    <div className={toast({ variant })}>
      {message}
      <IcDelete
        className={icon({ iconColor })}
        stroke={iconColor === "black" ? "black" : "white"}
        onClick={handleDelete}
        width={21}
        height={21}
      />
    </div>
  );
};
