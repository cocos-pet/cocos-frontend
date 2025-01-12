import { useState } from "react";
import * as styles from "./Floating.css";
import { Plus } from "@asset/svg";

interface FloatingBtnProps {
  disabled?: boolean;
  onClick?: () => void;
}

function FloatingBtn({ disabled = false, onClick }: FloatingBtnProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOn = () => {
    if (!disabled) setIsHovered(true);
  };
  const handleMouseOff = () => {
    setIsHovered(false);
  };
  const floatingBtn = `${styles.floatingBtnBase} ${
    disabled
      ? styles.floatingBtnDisabled
      : `${styles.floatingBtnEnabled} ${
          isHovered ? styles.floatingBtnHovered : ""
        }`
  }`;

  return (
    <button
      className={floatingBtn}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
      disabled={disabled}
    >
      <Plus />
    </button>
  );
}

export default FloatingBtn;
