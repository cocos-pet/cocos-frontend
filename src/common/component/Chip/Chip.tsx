import { SvgChevronDown } from "@asset/svg";
import { styles } from "./ChipStyle.css.ts";

interface ChipProps {
  label: string;
  variant?: "withoutDropdown" | "withDropdown";
}

const Chip = ({ label, variant }: ChipProps) => {
  const chipStyle = variant === "withDropdown" ? styles.dropdown : styles.default;

  return (
    <div className={chipStyle}>
      {label}
      {variant === "withDropdown" && <SvgChevronDown />}
    </div>
  );
};

export default Chip;
