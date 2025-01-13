import { useEffect, useState } from "react";
import * as styles from "./BottomSheet.css";

interface BottomSheetPropTypes {
  isOpen: boolean;
  onClick?: () => void;
  children: JSX.Element; //ReactNode는 범위가 너무 넓음
}

//화면 전체를 차지하는 바텀시트 틀 (children 필요)
const BottomSheet = ({ isOpen: open, children, onClick }: BottomSheetPropTypes) => {
  const [isOpen, setIsOpen] = useState(open);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  if (!isOpen) return;

  const handleBarClick = (event: React.KeyboardEvent<HTMLDivElement>) => {
    setIsOpen(false);
  };

  const handleBottomSheetClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 이벤트 전파 차단
  };

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)} onKeyDown={handleBarClick}>
      <div className={styles.bottomSheet} onClick={handleBottomSheetClick}>
        <div className={styles.bottomTabBar}>
          <div className={styles.bar} onClick={() => setIsOpen(false)} onKeyDown={handleBarClick} />
        </div>

        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
