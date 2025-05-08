import * as styles from "./BtnToChip.style.css";

interface BtnToChipProps {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  rightIcon?: React.ReactNode;
}

const BtnToChip = ({ label = "BtnToChip", onClick, rightIcon }: BtnToChipProps) => {
  return (
    <button onClick={onClick} className={styles.wrapper({ selected: false })}>
      <span className={styles.buttonText}>
        {label} {rightIcon && <div className={styles.icon}>{rightIcon}</div>}
      </span>
    </button>
  );
};

export default BtnToChip;
