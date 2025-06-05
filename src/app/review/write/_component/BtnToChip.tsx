import * as styles from "./BtnToChip.style.css"

interface BtnToChipProps {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  rightIcon?: React.ReactNode;
  selected?: boolean;
  onRightIconClick?: React.MouseEventHandler<HTMLDivElement>;
}
const BtnToChip = ({ label = "BtnToChip", onClick, rightIcon, onRightIconClick, selected = false }: BtnToChipProps) => {
  return (
    <button onClick={onClick} className={styles.wrapper({ selected })}>
      <span className={styles.buttonText}>
        {label}
        {rightIcon && (
          <div className={styles.icon} onClick={onRightIconClick}>
            {rightIcon}
          </div>
        )}
      </span>
    </button>
  );
};

export default BtnToChip;
