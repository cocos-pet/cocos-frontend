"use client";

import React, { useEffect, useState } from "react";
import { chipItem, ChipType } from "./ChipStyle.css.ts";
import { IcDelete } from "@asset/svg/index";

interface ChipProps {
  label?: string;
  icon?: boolean;
  color?: "blue" | "gray" | "red" | "border" | "solidBlue";
  onClick?: () => void;
  isSelected?: boolean;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
}

type CombinedChipProps = ChipProps & Exclude<ChipType, undefined>;
const Chip = ({
  label,
  icon = false,
  rightIcon,
  color = "blue",
  onClick,
  isSelected = false,
  disabled = false,
}: CombinedChipProps) => {
  const [isActive, setIsActive] = useState(isSelected);
  const size = icon ? "large" : "small";

  useEffect(() => {
    setIsActive(isSelected);
  }, [isSelected]);

  const handleClick = () => {
    if (disabled) return;
    if (color === "gray" || (size === "large" && icon === false)) return;
    if (!icon) setIsActive(!isActive);
    onClick?.();
  };

  return (
    <div className={chipItem({ size, color, active: isActive })} onClick={handleClick}>
      {label}
      {rightIcon ? (
        <>{rightIcon}</>
      ) : (
        icon && (
          <IcDelete
            width={24}
            height={24}
            stroke={color === "gray" ? "#717171" : "#14B5F0"}
            style={{ position: "relative", bottom: "1.3px" }}
          />
        )
      )}
    </div>
  );
};

export default Chip;
