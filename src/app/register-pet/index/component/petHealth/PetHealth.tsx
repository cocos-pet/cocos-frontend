import * as styles from "./PetHealth.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";
import { Button } from "@common/component/Button";

import { useBodiesGet } from "@api/domain/register-pet/bodies/hook";
import { useDiseaseGet } from "@api/domain/register-pet/disease/hook";
import { useSymptomGet } from "@api/domain/register-pet/symptom/hook";
import { PetData } from "../../RegisterPet.tsx";
import Step1 from "./disease/Step1.tsx";
import Step2 from "./disease/Step2.tsx";
import SymStep1 from "./symptom/SymStep1.tsx";
import SymStep2 from "./symptom/SymStep2.tsx";

interface PetHealthPropTypes {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (
    field: keyof PetData,
    value: PetData[keyof PetData],
    callback?: (updatedData: PetData) => void,
  ) => void;
  currentStep: number | null;
  setCurrentStep: React.Dispatch<React.SetStateAction<number | null>>;
  isSkipDisease: boolean | null;
  handleSubmit: () => void;
}

const PetHealth = ({
  currentStep,
  setCurrentStep,
  setStep,
  updatePetData,
  handleSubmit,
  isSkipDisease,
}: PetHealthPropTypes) => {
  // 질병 대분류, 소분류
  const [selectedDiseaseBody, setSelectedDiseaseBody] = useState<number[]>([]);
  const [selectedDiseases, setSelectedDiseases] = useState<number[]>([]);
  // 증상 대분류, 소분류
  const [selectedSymptomBody, setSelectedSymBodyParts] = useState<number[]>([]);
  const [selectedSymptom, setSelectedSymptoms] = useState<number[]>([]);
  // 반려동물 등록 중복요청 방지
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 질병 선택 부위 (최대 2개 선택 가능???)
  const handleBodyPartSelection = (bodyPartId: number) => {
    setSelectedDiseaseBody((prevSelected) => {
      // 두 번 클릭시 해제
      if (prevSelected.includes(bodyPartId)) {
        return prevSelected.filter((id) => id !== bodyPartId);
      }
      return [...prevSelected, bodyPartId];
    });
  };

  // 질병 명 (최대 7개 선택 가능)
  const handleDiseaseSelection = (diseaseId: number) => {
    setSelectedDiseases((prevSelected) => {
      // 두 번 클릭시 해지
      if (prevSelected.includes(diseaseId)) {
        return prevSelected.filter((id) => id !== diseaseId);
      }
      if (prevSelected.length < 7) {
        return [...prevSelected, diseaseId];
      }
      return prevSelected;
    });
  };

  // 질병 1단계에서 질병유무 컴포넌트로
  const handleBackDual = () => {
    setStep(5);
  };

  // 질병 1단계에서 질병 2단계로
  const handleGoDisease2 = () => {
    setCurrentStep(2);
  };

  // 비우기
  // 질병 2단계에서 질병 1단계로
  const handleBackDisease1 = () => {
    selectedDiseases.length = 0;
    setCurrentStep(1);
  };

  // 질병 2단계에서 증상 1단계로
  const handleGoSymptom1 = () => {
    updatePetData("diseaseIds", selectedDiseases);
    setCurrentStep(3);
  };

  //////////////////////이제부터 증상

  const handleBodyPartSymSelection = (bodyPartId: number) => {
    setSelectedSymBodyParts((prevSelected) => {
      if (prevSelected.includes(bodyPartId)) {
        return prevSelected.filter((id) => id !== bodyPartId);
      }
      return [...prevSelected, bodyPartId];
    });
  };

  const handleSymptomSelection = (symptomId: number) => {
    setSelectedSymptoms((prevSelected) => {
      if (prevSelected.includes(symptomId)) {
        return prevSelected.filter((id) => id !== symptomId);
      }
      if (prevSelected.length < 7) {
        return [...prevSelected, symptomId];
      }
      return prevSelected;
    });
  };

  // 질병 단계를 거치지 않았다면, 질병 유무 컴포넌트로
  // 질병 단계를 거쳤다면, 증상 1단계에서 질병 2단계로
  const handleBack = () => {
    if (isSkipDisease) {
      setStep(5);
    } else {
      setCurrentStep(2);
    }
  };

  // 증상 1단계에서 2단계로
  const handleGoSymptom2 = () => {
    setCurrentStep(4);
  };

  // 비우기
  // 증상 2단계에서 1단계로
  const handleBackSymptom1 = () => {
    selectedSymptom.length = 0;
    setCurrentStep(3);
  };

  // 최종 폼 제출
  const router = useRouter();
  const handleGoComplete = () => {
    if (isSubmitting) return;
    if (selectedSymptom.length === 0) return;

    setIsSubmitting(true);

    try {
      updatePetData("symptomIds", selectedSymptom, () => {
        handleSubmit();
        router.push(PATH.REGISTER_PET.COMPLETE);
      });
    } finally {
      // 제출 실패한 경우 재활성화
      setIsSubmitting(false);
    }
  };

  const { data: diseaseData } = useBodiesGet("disease");
  const { data: symptomData } = useBodiesGet("symptom");
  const { data: diseaseBodyData } = useDiseaseGet(selectedDiseaseBody);
  const { data: symptomBodyData } = useSymptomGet(selectedSymptomBody);

  if (!diseaseData || !symptomData) return null;

  return (
    <>
      {currentStep === 1 && (
        <>
          <Step1
            data={diseaseData?.data}
            selectedIds={selectedDiseaseBody}
            onBodyPartSelection={handleBodyPartSelection}
          />
          <div className={styles.btnWrapper}>
            <Button label="이전으로" size="large" variant="solidNeutral" disabled={false} onClick={handleBackDual} />

            <Button
              label="다음"
              size="large"
              variant="solidPrimary"
              disabled={selectedDiseaseBody.length === 0}
              onClick={handleGoDisease2}
            />
          </div>
        </>
      )}
      {currentStep === 2 && (
        <>
          <Step2
            data={diseaseBodyData}
            selectedDiseases={selectedDiseases}
            onDiseaseSelection={handleDiseaseSelection}
          />
          <div className={styles.btnWrapper}>
            <Button
              label="이전으로"
              size="large"
              variant="solidNeutral"
              disabled={false}
              onClick={handleBackDisease1}
            />
            <Button
              label="다음"
              size="large"
              variant="solidPrimary"
              disabled={selectedDiseases.length === 0}
              onClick={handleGoSymptom1}
            />
          </div>
        </>
      )}
      {currentStep === 3 && (
        <>
          <SymStep1
            data={symptomData?.data}
            selectedIds={selectedSymptomBody}
            onBodyPartSelection={handleBodyPartSymSelection}
          />
          <div className={styles.btnWrapper}>
            <Button label="이전으로" size="large" variant="solidNeutral" disabled={false} onClick={handleBack} />
            <Button
              label="다음"
              size="large"
              variant="solidPrimary"
              disabled={selectedSymptomBody.length === 0}
              onClick={handleGoSymptom2}
            />
          </div>
        </>
      )}
      {currentStep === 4 && (
        <>
          <SymStep2
            data={symptomBodyData}
            selectedSymptom={selectedSymptom}
            onSymptomSelection={handleSymptomSelection}
          />
          <div className={styles.btnWrapper}>
            <Button
              label="이전으로"
              size="large"
              variant="solidNeutral"
              disabled={false}
              onClick={handleBackSymptom1}
            />
            <Button
              label="다음"
              size="large"
              variant="solidPrimary"
              disabled={selectedSymptom.length === 0 || isSubmitting}
              onClick={handleGoComplete} // 증상 선택 후 폼 제출
            />
          </div>
        </>
      )}
    </>
  );
};

export default PetHealth;
