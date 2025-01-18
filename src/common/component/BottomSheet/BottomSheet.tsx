import {} from "react";
import * as styles from "./BottomSheet.css";

interface BottomSheetPropTypes {
  isOpen: boolean;
  handleOpen: (isOpen: boolean) => void;
  children: JSX.Element; //ReactNode는 범위가 너무 넓음
}

//화면 전체를 차지하는 바텀시트 틀 (children 필요)
const BottomSheet = ({
  isOpen,
  children,
  handleOpen,
}: BottomSheetPropTypes) => {
  if (!isOpen) return;

  const handleClose = () => {
    handleOpen(false);
  };

  const handleBottomSheetClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 이벤트 전파 차단
  };

  return (
    <div
      className={styles.overlay}
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <div className={styles.bottomSheet} onClick={handleBottomSheetClick}>
        <div className={styles.bottomTabBar}>
          <div
            className={styles.bar}
            onClick={handleClose}
            onKeyDown={handleClose}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
