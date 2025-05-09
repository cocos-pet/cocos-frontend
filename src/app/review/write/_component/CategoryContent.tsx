import { styles } from "@shared/component/FilterBottomSheet/CategoryContent/CategoryContent.css";
import DropDownText from "@app/review/write/_component/DropDownText";
import { useFormContext } from "react-hook-form";
import type { ReviewFormData } from "@app/review/write/page";
import { bodiesGetResponse } from "@api/domain/register-pet/bodies";
import { symptomGetResponse } from "@api/domain/register-pet/symptom";
import { diseaseGetResponse } from "@api/domain/register-pet/disease";

// ⚠️ 삭제 예정 목데이터
export const dummyData = {
  symptom: [
    {
      id: 1,
      name: "기침",
      symptoms: [
        { id: 101, name: "마른 기침" },
        { id: 102, name: "가래 기침" },
      ],
    },
    {
      id: 2,
      name: "구토",
      symptoms: [
        { id: 201, name: "구역감" },
        { id: 202, name: "위통" },
      ],
    },
  ],
  disease: [
    {
      id: 1,
      name: "감기",
      diseases: [
        { id: 301, name: "코감기" },
        { id: 302, name: "독감" },
      ],
    },
  ],
};
interface CategoryContentProps {
  category: "symptom" | "disease";
  onSymptomChipSelect: (chipId: number) => void;
  onDiseaseChipSelect: (chipId: number) => void;
  symptomData?: bodiesGetResponse["data"];
  diseaseData?: bodiesGetResponse["data"];
  symptomBodyData?: symptomGetResponse["data"];
  diseaseBodyData?: diseaseGetResponse["data"];
}
const CategoryContent = ({
  category,
  onSymptomChipSelect,
  onDiseaseChipSelect,
  symptomData,
  diseaseData,
  symptomBodyData,
  diseaseBodyData,
}: CategoryContentProps) => {
  const { watch } = useFormContext<ReviewFormData>();
  const selectedSymptomIds = watch("symptomIds") ?? [];
  const selectedDiseaseId = watch("diseaseId") ?? -1;

  if (category === "symptom") {
    return (
      <div className={styles.symptomsWrapper}>
        {symptomData?.bodies?.map((symptom) => (
          <DropDownText
            key={symptom.id}
            content={
              (symptomBodyData?.bodies?.find((body) => body.id === symptom.id)?.symptoms ?? []) as {
                id: number;
                name: string;
              }[]
            }
            selectedChipIds={selectedSymptomIds}
            onChipToggle={(chip) => onSymptomChipSelect(chip.id)}
          >
            {symptom.name ?? ""}
          </DropDownText>
        ))}
      </div>
    );
  }

  if (category === "disease") {
    return (
      <div className={styles.symptomsWrapper}>
        {diseaseData?.bodies?.map((disease) => (
          <DropDownText
            key={disease.id}
            content={
              (diseaseBodyData?.bodies?.find((body) => body.id === disease.id)?.diseases ?? []) as {
                id: number;
                name: string;
              }[]
            }
            selectedChipIds={selectedDiseaseId === -1 ? [] : [selectedDiseaseId]}
            onChipToggle={(chip) => onDiseaseChipSelect(chip.id)}
          >
            {disease.name ?? ""}
          </DropDownText>
        ))}
      </div>
    );
  }

  return <div>Nothing</div>;
};
export default CategoryContent;
