import { useFormContext } from "react-hook-form";
import { IcRightArror, IcReviewRightIcon } from "@asset/svg/index";
import * as styles from "./ReviewSymptom.style.css";
import BtnToChip from "@app/review/write/_component/BtnToChip";
import { getSymptomNameById } from "@app/review/write/_utils/getNameById";
import { ReviewFormData } from "@app/review/write/page";
import { symptomGetResponse } from "@api/domain/register-pet/symptom";
import { diseaseGetResponse } from "@api/domain/register-pet/disease";

interface ReviewSymptomProps {
  onCategoryChange: (category: "symptom" | "disease") => void;
  symptomBodyData?: symptomGetResponse["data"];
  diseaseBodyData?: diseaseGetResponse["data"];
}

const ReviewSymptom = ({ onCategoryChange, symptomBodyData }: ReviewSymptomProps) => {
  const { watch, setValue } = useFormContext<ReviewFormData>();
  const selectedSymptomIds = watch("symptomIds");

  const handleRemoveSymptom = (removeId: number) => {
    const selectedSymptomIds = watch("symptomIds") ?? [];
    const updated = selectedSymptomIds.filter((id) => id !== removeId);
    setValue("symptomIds", updated);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.align}>
        <span className={styles.questionStyle}>어떤 증상으로 방문했나요?</span>
        <span className={styles.optionalStyle}>(선택)</span>
      </div>
      {selectedSymptomIds?.map((id) => (
        <BtnToChip
          key={id}
          label={getSymptomNameById(id, symptomBodyData)}
          selected
          rightIcon={<IcReviewRightIcon />}
          onRightIconClick={() => handleRemoveSymptom(id)}
        />
      ))}
      <BtnToChip label="증상 추가하기" rightIcon={<IcRightArror />} onClick={() => onCategoryChange("symptom")} />
    </div>
  );
};

export default ReviewSymptom;