import { SvgChevronDown } from "@asset/svg";
import { useState } from "react";
import { styles } from "./ChipStyle.css.ts";

interface ChipProps {
  label: string;
  variant?: "withoutIcon" | "withIcon";
  active?: boolean;
}

const Chip = ({ label, variant = "withoutIcon", active = false }: ChipProps) => {
  const [isActive, setIsActive] = useState(active);

  const chipStyle = variant === "withIcon" ? styles.icon : styles.default;
  const activeStyle = isActive ? styles.active : "";

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div className={`${chipStyle} ${activeStyle}`} onClick={handleClick}>
      {label}
      {variant === "withIcon" && <SvgChevronDown />}
    </div>
  );
};

export default Chip;
