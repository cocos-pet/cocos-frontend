import * as styles from "./Floating.css";
import { Plus } from "@asset/svg";
import { useNavigate } from "react-router-dom"; // react-router-dom의 useNavigate 훅 가져오기

interface FloatingBtnProps {
  disabled?: boolean;
  onClick?: () => void;
}

function FloatingBtn({ disabled = false, onClick }: FloatingBtnProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (!disabled) {
      navigate("/community/write");
    }
  };

  const floatingBtn = `${styles.floatingBtnBase} ${disabled ? styles.floatingBtnDisabled : styles.floatingBtnEnabled}`;

  return (
    <button className={floatingBtn} onClick={handleClick} disabled={disabled}>
      <Plus style={{ width: "2.4rem" }} />
    </button>
  );
}

export default FloatingBtn;
