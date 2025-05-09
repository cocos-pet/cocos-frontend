import { styles } from "@shared/component/FilterBottomSheet/CategoryContent/CategoryContent.css";
import DropDownText from "@app/review/write/_component/DropDownText";
import { useFormContext } from "react-hook-form";
import type { ReviewFormData } from "@app/review/write/page";
import { bodiesGetResponse } from "@api/domain/register-pet/bodies";
import { symptomGetResponse } from "@api/domain/register-pet/symptom";
import { diseaseGetResponse } from "@api/domain/register-pet/disease";

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
