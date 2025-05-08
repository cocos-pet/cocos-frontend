import { IcRightArror } from "@asset/svg/index";
import * as styles from "./ReviewSymptom.style.css";
import BtnToChip from "@app/review/write/_component/BtnToChip";

interface ReviewSymptomProps {
  handleOpenBottomSheet: () => void;
}

const ReviewSymptom = ({ handleOpenBottomSheet }: ReviewSymptomProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.questionStyle}>어떤 증상으로 방문했나요?</span>
      <BtnToChip label="증상 없음" rightIcon={<IcRightArror />} onClick={handleOpenBottomSheet} />
    </div>
  );
};

export default ReviewSymptom;
