import { useFormContext } from "react-hook-form";
import * as styles from "./ReviewDisease.style.css";
import { IcRightArror } from "@asset/svg/index";
import BtnToChip from "@app/review/write/_component/BtnToChip";
import { getNameById } from "@app/review/write/_utils/getNameById";
import { ReviewFormData } from "@app/review/write/page";

interface ReviewDiseaseProps {
  onCategoryChange: (category: "symptom" | "disease") => void;
}

const ReviewDisease = ({ onCategoryChange }: ReviewDiseaseProps) => {
  const { watch } = useFormContext<ReviewFormData>();
  const selectedDiseaseId = watch("diseaseId");

  const diseaseName = selectedDiseaseId !== -1 ? getNameById(selectedDiseaseId) : "진단 내용 추가하기";

  return (
    <div className={styles.wrapper}>
      <span className={styles.questionStyle}>진단받은 내용이 있나요?</span>
      <BtnToChip
        label={diseaseName}
        rightIcon={<IcRightArror stroke={selectedDiseaseId !== -1 ? "#3DC4F5" : undefined} />}
        onClick={() => onCategoryChange("disease")}
        selected={selectedDiseaseId !== -1}
      />
    </div>
  );
};

export default ReviewDisease;
