import IcBottomSheetLine from "@asset/svg/IcBottomSheetLine";
import * as styles from "./SimpleBottomSheet.css";
import { Button } from "../Button";
import React from "react";

interface BottomSheetProps {
  isOpen: boolean;
  handleClose: () => void;
  content: string;
  subContent?: string;
  leftText: string;
  rightText: string;
  leftOnClick: React.MouseEventHandler<HTMLButtonElement>;
  rightOnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SimpleBottomSheet = ({
  isOpen,
  handleClose,
  content,
  subContent = undefined,
  leftText,
  rightText,
  leftOnClick,
  rightOnClick,
}: BottomSheetProps) => {
  if (!isOpen) return;

  const handleBottomSheetClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 이벤트 전파 차단
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div
        className={styles.bottomSheetContainer}
        onClick={handleBottomSheetClick}
      >
        <div className={styles.bottomSheetHeader}>
          <IcBottomSheetLine width={80} onClick={handleClose} />
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.contentWrapper}>
            <p className={styles.content}>{content}</p>
            {subContent && <p className={styles.subContent}>{subContent}</p>}
          </div>
          <div className={styles.buttonContainer}>
            <Button
              label={`${leftText}`}
              size="large"
              variant="solidNeutral"
              disabled={false}
              onClick={leftOnClick}
            />
            <Button
              label={`${rightText}`}
              size="large"
              variant="solidPrimary"
              disabled={false}
              onClick={rightOnClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleBottomSheet;
