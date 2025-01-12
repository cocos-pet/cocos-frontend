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
      <Plus style={{ width: "2.4rem", height: "2.4rem" }} />
    </button>
  );
}

export default FloatingBtn;
