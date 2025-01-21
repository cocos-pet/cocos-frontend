import * as styles from "./PetHealth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@route/path";
import { PetData } from "@page/register-pet/index/RegisterPet";
import { Button } from "@common/component/Button";
import Step1 from "@page/register-pet/index/component/petHealth/disease/Step1";
import Step2 from "@page/register-pet/index/component/petHealth/disease/Step2";
import SymStep1 from "@page/register-pet/index/component/petHealth/symptom/SymStep1";
import SymStep2 from "@page/register-pet/index/component/petHealth/symptom/SymStep2";
import { useBodiesGet } from "@api/domain/register-pet/bodies/hook";

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

  // 질병 2단계에서 질병 1단계로
  const handleBackDisease1 = () => {
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

  // 증상 2단계에서 1단계로
  const handleBackSymptom1 = () => {
    setCurrentStep(3);
  };

  // 최종 폼 제출
  const navigate = useNavigate();
  const handleGoComplete = () => {
    if (selectedSymptom.length > 0) {
      updatePetData("symptomIds", selectedSymptom, () => {
        handleSubmit();
        navigate(PATH.REGISTER_PET.COMPLETE);
      });
    } else {
      return;
    }
  };
  const { data: diseaseData } = useBodiesGet("disease");
  const { data: symptomData } = useBodiesGet("symptom");

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
          <Step2 selectedDiseases={selectedDiseases} onDiseaseSelection={handleDiseaseSelection} />
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
          <SymStep2 selectedSymptom={selectedSymptom} onSymptomSelection={handleSymptomSelection} />
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
              disabled={selectedSymptom.length === 0}
              onClick={handleGoComplete} // 증상 선택 후 폼 제출
            />
          </div>
        </>
      )}
    </>
  );
};

export default PetHealth;
