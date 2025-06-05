import { useFormContext } from "react-hook-form";
import * as styles from "./ReviewDisease.style.css";
import { IcRightArror } from "@asset/svg/index";
import BtnToChip from "@app/review/write/_component/BtnToChip";
import { getDiseaseNameById } from "@app/review/write/_utils/getNameById";
import { ReviewFormData } from "@app/review/write/page";
import { diseaseGetResponse } from "@api/domain/register-pet/disease";

interface ReviewDiseaseProps {
  onCategoryChange: (category: "symptom" | "disease") => void;
  diseaseBodyData?: diseaseGetResponse["data"];
}

const ReviewDisease = ({ onCategoryChange, diseaseBodyData }: ReviewDiseaseProps) => {
  const { watch } = useFormContext<ReviewFormData>();
  const selectedDiseaseId = watch("diseaseId");

  const diseaseName =
    selectedDiseaseId !== undefined ? getDiseaseNameById(selectedDiseaseId, diseaseBodyData) : "진단 내용 추가하기";

  return (
    <div className={styles.wrapper}>
      <div className={styles.align}>
        <span className={styles.questionStyle}>진단받은 내용이 있나요?</span>
        <span className={styles.optionalStyle}>(선택)</span>
      </div>
      <BtnToChip
        label={diseaseName}
        rightIcon={<IcRightArror stroke={selectedDiseaseId !== undefined ? "#3DC4F5" : undefined} />}
        onClick={() => onCategoryChange("disease")}
        selected={selectedDiseaseId !== undefined}
      />
    </div>
  );
};

export default ReviewDisease;
