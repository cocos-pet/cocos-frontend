import * as styles from "@shared/component/FilterBottomSheet/FilterBottomSheet.css";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import Tab from "@common/component/Tab/Tab";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip";
import CategoryContent from "@app/review/write/_component/CategoryContent";
import { ReviewFormData } from "@app/review/write/page";
import { getSymptomNameById, getDiseaseNameById } from "@app/review/write/_utils/getNameById";
import { Toast } from "@common/component/Toast/Toast";
import { CATEGORIES } from "../constant";

import { symptomGetResponse } from "@api/domain/register-pet/symptom";
import { diseaseGetResponse } from "@api/domain/register-pet/disease";
import { bodiesGetResponse } from "@api/domain/register-pet/bodies";

type CategoryType = "symptom" | "disease";

interface SearchSymptomDiseaseProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;

  symptomBodyData?: symptomGetResponse["data"];
  diseaseBodyData?: diseaseGetResponse["data"];
  symptomData?: bodiesGetResponse["data"];
  diseaseData?: bodiesGetResponse["data"];
}

const SearchSymptomDisease = ({
  isOpen,
  onClose,
  selectedCategory,
  onCategoryChange,
  symptomBodyData,
  diseaseBodyData,
  symptomData,
  diseaseData,
}: SearchSymptomDiseaseProps) => {
  const { watch, setValue } = useFormContext<ReviewFormData>();
  // 토스트 리렌더링
  const [toastKey, setToastKey] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const selectedSymptomIds = watch("symptomIds") ?? [];
  const selectedDiseaseId = watch("diseaseId");

  const toggleSymptomChip = (chipId: number) => {
    const updated = selectedSymptomIds.includes(chipId)
      ? selectedSymptomIds.filter((id) => id !== chipId)
      : [...selectedSymptomIds, chipId];
    setValue("symptomIds", updated);
  };

  const toggleDiseaseChip = (chipId: number) => {
    if (selectedDiseaseId === chipId) {
      // 이미 선택된 칩을 다시 클릭하면 선택 해제
      setValue("diseaseId", null);
    } else if (selectedDiseaseId != null) {
      // 이미 선택된 상태에서 다른 칩을 클릭하면 교체 + 토스트
      setValue("diseaseId", chipId);
      setToastKey(Date.now());
      setShowToast(true);
    } else {
      // 아무것도 선택되지 않은 상태는 정상 선택
      setValue("diseaseId", chipId);
    }
  };

  return (
    <BottomSheet isOpen={isOpen} handleOpen={() => {}} handleDimmedClose={onClose}>
      <>
        {/* 선택된 칩 */}
        <div className={styles.selectedZone}>
          {selectedSymptomIds.map((chipId) => (
            <Chip
              icon
              key={chipId}
              label={getSymptomNameById(chipId, symptomBodyData)}
              onClick={() => toggleSymptomChip(chipId)}
            />
          ))}
          {selectedDiseaseId != null && (
            <Chip
              icon
              key={selectedDiseaseId}
              label={getDiseaseNameById(selectedDiseaseId, diseaseBodyData)}
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
            diseaseData={diseaseData}
            diseaseBodyData={diseaseBodyData}
            symptomData={symptomData}
            symptomBodyData={symptomBodyData}
            category={selectedCategory}
            onSymptomChipSelect={toggleSymptomChip}
            onDiseaseChipSelect={toggleDiseaseChip}
          />
        </div>

        {showToast && (
          <Toast key={toastKey} message="진단은 하나만 선택할 수 있어요" showDeleteIcon={false} variant="blue" />
        )}

        {/* 하단 버튼 */}
        <div className={styles.buttonWrapper}>
          <Button label="확인하기" size="large" width="100%" onClick={onClose} />
        </div>
      </>
    </BottomSheet>
  );
};

export default SearchSymptomDisease;
