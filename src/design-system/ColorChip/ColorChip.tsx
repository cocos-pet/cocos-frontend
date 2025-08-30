import * as styles from "./ColorChip.style.css";
import { ColorChipVariant } from "./ColorChip.style.css";

interface ColorChipProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type CombinedColorChipProps = ColorChipProps & Exclude<ColorChipVariant, undefined>;

const ColorChip = ({ label, onClick, type, selected = false }: CombinedColorChipProps) => {
  return (
    <button onClick={onClick} className={styles.chipStyle({ type, selected })}>
      {label}
    </button>
  );
};

export default ColorChip;
