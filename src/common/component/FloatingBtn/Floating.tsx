import * as styles from "./Floating.css";
import { Plus } from "@asset/svg";

interface FloatingBtnProps {
  disabled?: boolean;
  onClick?: () => void;
}

function FloatingBtn({ disabled = false, onClick }: FloatingBtnProps) {
  const floatingBtn = `${styles.floatingBtnBase} ${
    disabled ? styles.floatingBtnDisabled : styles.floatingBtnEnabled
  }`;

  return (
    <button className={floatingBtn} onClick={onClick} disabled={disabled}>
      <Plus />
    </button>
  );
}

export default FloatingBtn;
