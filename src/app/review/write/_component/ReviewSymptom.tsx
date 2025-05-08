import { useFormContext } from "react-hook-form";
import { IcRightArror, IcReviewRightIcon } from "@asset/svg/index";
import * as styles from "./ReviewSymptom.style.css";
import BtnToChip from "@app/review/write/_component/BtnToChip";
import { getNameById } from "@app/review/write/_component/SearchSymptomDisease"; // 이미 있는 util 함수 사용
import { ReviewFormData } from "@app/review/write/page";
interface ReviewSymptomProps {
  onCategoryChange: (category: "symptom" | "disease") => void;
}
const ReviewSymptom = ({ onCategoryChange }: ReviewSymptomProps) => {
  const { watch, setValue } = useFormContext<ReviewFormData>();
  const selectedSymptomIds = watch("symptomIds");

  const handleRemoveSymptom = (removeId: number) => {
    const updated = selectedSymptomIds.filter((id) => id !== removeId);
    setValue("symptomIds", updated);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.questionStyle}>어떤 증상으로 방문했나요?</span>
      {selectedSymptomIds.map((id) => (
        <BtnToChip
          key={id}
          label={getNameById(id)}
          selected={true}
          rightIcon={<IcReviewRightIcon />}
          onRightIconClick={() => handleRemoveSymptom(id)}
        />
      ))}
      <BtnToChip label="증상 없음" rightIcon={<IcRightArror />} onClick={() => onCategoryChange("symptom")} />
    </div>
  );
};

export default ReviewSymptom;
