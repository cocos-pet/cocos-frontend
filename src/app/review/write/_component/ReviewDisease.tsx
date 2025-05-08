import * as styles from "./ReviewDisease.style.css";
import { IcRightArror } from "@asset/svg/index";
import BtnToChip from "@app/review/write/_component/BtnToChip";

interface ReviewDiseaseProps {
  onCategoryChange: (category: "symptom" | "disease") => void;
}

const ReviewDisease = ({ onCategoryChange }: ReviewDiseaseProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.questionStyle}>진단받은 내용이 있나요?</span>
      <BtnToChip label="진단 내용 추가하기" rightIcon={<IcRightArror />} onClick={() => onCategoryChange("disease")} />
    </div>
  );
};

export default ReviewDisease;
