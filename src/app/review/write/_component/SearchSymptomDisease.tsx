import * as styles from "@shared/component/FilterBottomSheet/FilterBottomSheet.css";
import { useFormContext } from "react-hook-form";

import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import Tab from "@common/component/Tab/Tab";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip";

import CategoryContent from "@app/review/write/_component/CategoryContent";
import { ReviewFormData } from "@app/review/write/page";
import { dummyData } from "@app/review/write/_component/CategoryContent";

import { useBodiesGet } from "@api/domain/register-pet/bodies/hook";
import { useDiseaseGet } from "@api/domain/register-pet/disease/hook";
import { useSymptomGet } from "@api/domain/register-pet/symptom/hook";

type CategoryType = "symptom" | "disease";

interface SearchSymptomDiseaseProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

const CATEGORIES: { id: CategoryType; label: string }[] = [
  { id: "symptom", label: "증상" },
  { id: "disease", label: "진단" },
];

export const getNameById = (id: number): string => {
  const allItems = [...dummyData.symptom.flatMap((s) => s.symptoms), ...dummyData.disease.flatMap((d) => d.diseases)];
  return allItems.find((item) => item.id === id)?.name ?? "알 수 없음";
};
const SearchSymptomDisease = ({ isOpen, onClose, selectedCategory, onCategoryChange }: SearchSymptomDiseaseProps) => {
  const { watch, setValue } = useFormContext<ReviewFormData>();

  const selectedSymptomIds = watch("symptomIds") ?? [];
  const selectedDiseaseId = watch("diseaseId");

  const toggleSymptomChip = (chipId: number) => {
    const updated = selectedSymptomIds.includes(chipId)
      ? selectedSymptomIds.filter((id) => id !== chipId)
      : [...selectedSymptomIds, chipId];
    setValue("symptomIds", updated);
  };

  const toggleDiseaseChip = (chipId: number) => {
    setValue("diseaseId", selectedDiseaseId === chipId ? -1 : chipId);
  };

  // api - 신체 조회
  const { data: diseaseData } = useBodiesGet("disease");
  const { data: symptomData } = useBodiesGet("symptom");

  // 모든 bodyId 추출
  const allDiseaseBodyIds =
    diseaseData?.data?.bodies?.map((body) => body.id).filter((id): id is number => id !== undefined) ?? [];
  const allSymptomBodyIds =
    symptomData?.data?.bodies?.map((body) => body.id).filter((id): id is number => id !== undefined) ?? [];

  // api - 세부 이름 조회
  const { data: symptomBodyData } = useSymptomGet(allSymptomBodyIds);
  const { data: diseaseBodyData } = useDiseaseGet(allDiseaseBodyIds);

  return (
    <BottomSheet isOpen={isOpen} handleOpen={() => {}} handleDimmedClose={onClose}>
      <>
        {/* 선택된 칩 */}
        <div className={styles.selectedZone}>
          {selectedSymptomIds.map((chipId) => (
            <Chip icon key={chipId} label={getNameById(chipId)} onClick={() => toggleSymptomChip(chipId)} />
          ))}
          {selectedDiseaseId !== -1 && (
            <Chip
              icon
              key={selectedDiseaseId}
              label={getNameById(selectedDiseaseId)}
              onClick={() => toggleDiseaseChip(selectedDiseaseId)}
            />
          )}
        </div>

        {/* 탭 */}
        <div className={styles.categoryZone}>
          {CATEGORIES.map(({ id, label }) => (
            <Tab key={id} active={selectedCategory === id} onClick={() => onCategoryChange(id)}>
              {label}
            </Tab>
          ))}
        </div>

        {/* 탭 내용 */}
        <div className={styles.bodyZone}>
          <CategoryContent
            diseaseData={diseaseData?.data}
            diseaseBodyData={diseaseBodyData}
            symptomData={symptomData?.data}
            symptomBodyData={symptomBodyData}
            category={selectedCategory}
            onSymptomChipSelect={toggleSymptomChip}
            onDiseaseChipSelect={toggleDiseaseChip}
          />
        </div>

        {/* 하단 버튼 */}
        <div className={styles.buttonWrapper}>
          <Button label="확인하기" size="large" width="100%" onClick={onClose} />
        </div>
      </>
    </BottomSheet>
  );
};
export default SearchSymptomDisease;
