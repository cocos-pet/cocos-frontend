import * as styles from "@page/registerPet/index/component/petHealth/disease/Disease.css";
import { useState } from "react";
import SymStep1 from "./SymStep1"; // 부위 선택 컴포넌트
import SymStep2 from "./SymStep2"; // 증상 선택 컴포넌트
import { PetData } from "@page/registerPet/index/RegisterPet";
import { Button } from "@common/component/Button";
import { PATH } from "@route/path";
import { useNavigate } from "react-router-dom";
interface SymptomProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: PetData[keyof PetData]) => void;
  handleSubmit: () => void; // handleSubmit 함수 받기
}

const Symptom = ({ setStep, updatePetData, handleSubmit }: SymptomProps) => {
  const [currentStep, setCurrentStep] = useState(3); // 부위 선택 (3) -> 증상 선택 (4)
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

  const handleNextFromBodyPart = () => {
    if (selectedBodyParts.length > 0) {
      setCurrentStep(4); // 부위 선택 후 증상 선택으로 이동
    }
  };

  // 최종 등록
  const navigate = useNavigate();
  const handleNextStep = () => {
    updatePetData("symptomIds", selectedSymptom); 
    handleSubmit(); // 폼 제출
    navigate(PATH.REGISTER_PET.COMPLETE);
  };

  const handleGoBack = () => {
    if (currentStep === 4) {
      setCurrentStep(3); // 증상 선택에서 부위 선택으로 돌아가기
    }
  };

  const handleGoBlank = () => {
    if (selectedSymptom.length > 0) {
      setCurrentStep(2);
    } else {
      setStep(5);
    }
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
