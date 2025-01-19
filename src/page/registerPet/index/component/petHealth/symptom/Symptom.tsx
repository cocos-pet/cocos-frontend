import * as styles from "@page/registerPet/index/component/petHealth/disease/Disease.css";
import { useState } from "react";
import SymStep1 from "./SymStep1"; // 부위 선택 컴포넌트
import SymStep2 from "./SymStep2"; // 증상 선택 컴포넌트
import { PetData } from "@page/registerPet/index/RegisterPet";
import { Button } from "@common/component/Button";
import { PATH } from "@route/path";
import { useNavigate } from "react-router-dom";
interface SymptomProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number | null>>;

  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: PetData[keyof PetData]) => void;
  handleSubmit: () => void;
  isSkipDisease: boolean | null;
}

const Symptom = ({
  currentStep,
  setCurrentStep,
  setStep,
  updatePetData,
  handleSubmit,
  isSkipDisease,
}: SymptomProps) => {
  const [selectedBodyParts, setSelectedBodyParts] = useState<number[]>([]);
  const [selectedSymptom, setSelectedSymptoms] = useState<number[]>([]);

  const handleBodyPartSelection = (bodyPartId: number) => {
    setSelectedBodyParts((prevSelected) => {
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
  const handleGoBlank = () => {
    if (isSkipDisease === true) {
      setStep(5);
    } else {
      setCurrentStep(2);
    }
  };

  // 증상 1단계에서 2단계로
  const handleNextFromBodyPart = () => {
    setCurrentStep(4);
  };

  // 증상 2단계에서 1단계로
  const handleGoBack = () => {
    if (currentStep === 4) {
      setCurrentStep(3); // 증상 선택에서 부위 선택으로 돌아가기
    }
  };

  // 최종 폼 제출
  const navigate = useNavigate();
  const handleNextStep = () => {
    console.log("최종 증상 ID들:", selectedSymptom); // 폼 제출 전에 상태 확인
    updatePetData("symptomIds", selectedSymptom);
    handleSubmit();
    navigate(PATH.REGISTER_PET.COMPLETE);
  };

  return (
    <>
      {currentStep === 3 && (
        <>
          <SymStep1 selectedIds={selectedBodyParts} onBodyPartSelection={handleBodyPartSelection} />
          <div className={styles.btnWrapper}>
            <Button label="이전으로" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBlank} />
            <Button
              label="다음"
              size="large"
              variant="solidPrimary"
              disabled={selectedBodyParts.length === 0}
              onClick={handleNextFromBodyPart}
            />
          </div>
        </>
      )}
      {currentStep === 4 && (
        <>
          <SymStep2 selectedSymptom={selectedSymptom} onSymptomSelection={handleSymptomSelection} />
          <div className={styles.btnWrapper}>
            <Button label="이전으로" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
            <Button
              label="다음"
              size="large"
              variant="solidPrimary"
              disabled={selectedSymptom.length === 0}
              onClick={handleNextStep} // 증상 선택 후 폼 제출
            />
          </div>
        </>
      )}
    </>
  );
};

export default Symptom;
