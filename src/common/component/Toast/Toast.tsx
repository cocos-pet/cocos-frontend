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

export const Toast = ({
  message,
  variant,
  iconColor,
  onClick,
}: CombinedButtonProps) => {
  const [isVisible, setIsVisible] = useState(true);

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
        stroke={iconColor}
        onClick={handleDelete}
      />
    </div>
  );
};
