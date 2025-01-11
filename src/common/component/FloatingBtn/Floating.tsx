import * as styles from "./Floating.css";

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
      <span style={{ fontSize: "1.5rem", color: "#FFFFFF" }}>+</span>
    </button>
  );
}

export default FloatingBtn;
