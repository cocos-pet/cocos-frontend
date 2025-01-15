import { useEffect, useState } from "react";
import { ChipType, chipItem } from "./ChipStyle.css.ts";
import { IcDelete } from "@asset/svg/index";

interface ChipProps {
  label: string;
  icon?: boolean;
  color?: "blue" | "gray";
  onClick?: () => void;
  isSelected?: boolean;
}

type CombinedChipProps = ChipProps & Exclude<ChipType, undefined>;

const Chip = ({ label, icon = false, color = "blue", onClick, isSelected = false }: CombinedChipProps) => {
  const [isActive, setIsActive] = useState(isSelected);

  useEffect(() => {
    setIsActive(isSelected);
  }, [isSelected]);

  const handleClick = () => {
    if (color === "gray" || (size === "large" && icon === false)) return;
    if (!icon) setIsActive(!isActive);
    onClick?.();
  };

  const size = icon ? "large" : "small";

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className={chipItem({ size, color, active: isActive })} // 스타일 적용
      onClick={handleClick}
    >
      {label}
      {icon && (
        <IcDelete
          color={color === "gray" ? "#717171" : "#14B5F0"}
          style={{
            position: "relative",
            bottom: "1.3px",
          }}
        />
      )}
    </div>
  );
};

export default Chip;
