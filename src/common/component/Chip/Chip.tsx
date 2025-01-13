import { useState } from "react";
import { styles } from "./ChipStyle.css.ts";
import { IcDelete } from "@asset/svg/index.ts";

interface ChipProps {
  label?: string;
  variant?: "withoutIcon" | "withIcon";
  active?: boolean;
}

const Chip = ({ label = "Label", variant = "withIcon", active = false }: ChipProps) => {
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
      {variant === "withIcon" && <IcDelete className={styles.svg} />}
    </div>
  );
};

export default Chip;
