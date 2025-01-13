import IcBottomSheetLine from "@asset/svg/IcBottomSheetLine";
import * as styles from "./BottomSheet.css";
import { Button } from "../Button";
import React from "react";

interface BottomSheetProps {
  leftClick?: React.MouseEventHandler<HTMLButtonElement>;
  rightClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const BottomSheet = ({ leftClick, rightClick }: BottomSheetProps) => {
  return (
    <div className={styles.bottomSheetContainer}>
      <div className={styles.bottomSheetHeader}>
        <IcBottomSheetLine />
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.content}>댓글을 정말 삭제할까요?</p>
        <div className={styles.buttonContainer}>
          <Button
            label="취소"
            size="large"
            variant="solidNeutral"
            disabled={false}
            onClick={leftClick}
          />

          <Button
            label="삭제할게요"
            size="large"
            variant="solidPrimary"
            disabled={false}
            onClick={rightClick}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
