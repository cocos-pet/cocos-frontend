import { IcRightArror } from "@asset/svg/index";
import * as styles from "./ReviewSymptom.style.css";
import BtnToChip from "@app/review/write/_component/BtnToChip";

interface ReviewSymptomProps {
  handleOpenSearchSymptom: () => void;
}

const ReviewSymptom = ({ handleOpenSearchSymptom }: ReviewSymptomProps) => {
  return (
    <div className={styles.wrapper} onClick={handleOpenSearchSymptom}>
      <span className={styles.questionStyle}>어떤 증상으로 방문했나요?</span>
      <BtnToChip label="증상 없음" rightIcon={<IcRightArror />} />
    </div>
  );
};

export default ReviewSymptom;
