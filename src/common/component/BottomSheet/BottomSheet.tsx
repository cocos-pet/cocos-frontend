import { IcBottomSheetLine } from "@asset/svg";
import * as styles from "./BottomSheet.css";

const BottomSheet = () => {
  return (
    <div className={styles.bottomSheetContainer}>
      <div className={styles.bottomSheetHeader}>
        <IcBottomSheetLine />
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.content}>댓글을 정말 삭제할까요?</p>
        <button className={styles.buttonContainer}></button>
      </div>
    </div>
  );
};

export default BottomSheet;
