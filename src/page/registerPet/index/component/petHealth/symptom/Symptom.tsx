import * as styles from "@page/registerPet/index/component/petHealth/disease/Disease.css";

import { useState } from "react";
import SymStep1 from "./SymStep1"; // 부위 선택 컴포넌트
import SymStep2 from "./SymStep2"; // 증상 선택 컴포넌트
import { PetData } from "@page/registerPet/index/RegisterPet";
import { Button } from "@common/component/Button";

interface SymptomProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: PetData[keyof PetData]) => void;
}

const Symptom = ({ setStep, updatePetData }: SymptomProps) => {
  const [currentStep, setCurrentStep] = useState(3); // 부위 선택 (3) -> 증상 선택 (4)
  const [selectedBodyParts, setSelectedBodyParts] = useState<number[]>([]);
  const [selectedDiseases, setSelectedDiseases] = useState<number[]>([]);

  // 부위 선택 핸들러
  const handleBodyPartSelection = (bodyPartId: number) => {
    setSelectedBodyParts((prevSelected) => {
      if (prevSelected.includes(bodyPartId)) {
        return prevSelected.filter((id) => id !== bodyPartId);
      }
      return [...prevSelected, bodyPartId];
    });
  };

  // 증상 선택 핸들러
  const handleDiseaseSelection = (diseaseId: number) => {
    setSelectedDiseases((prevSelected) => {
      if (prevSelected.includes(diseaseId)) {
        return prevSelected.filter((id) => id !== diseaseId);
      }
      if (prevSelected.length < 7) {
        return [...prevSelected, diseaseId];
      }
      return prevSelected;
    });
  };

  // 부위 선택 -> 증상 선택으로 이동
  const handleNextFromBodyPart = () => {
    if (selectedBodyParts.length > 0) {
      setCurrentStep(4); // 부위 선택 후 증상 선택으로 이동
    }
  };

  // 증상 선택 -> 다음 단계로 이동
  const handleNextStep = () => {
    updatePetData("symptomIds", selectedDiseases); // 증상 정보만 업데이트
    setStep(7); // Step2 -> 다음 단계로 이동
  };

  // 이전 단계로 이동
  const handleGoBack = () => {
    if (currentStep === 4) {
      setCurrentStep(3); // 증상 선택에서 부위 선택으로 돌아가기
    }
  };

  // 부위 -> 질병-증상 or 유무선택
  const handleGoBlank = () => {
    if (selectedDiseases.length > 0) {
      setCurrentStep(2);
    } else {
      setStep(5);
    }
  };

  return (
    <>
      {currentStep === 3 && (
        <>
          {/* 부위 선택 Step */}
          <SymStep1 selectedIds={selectedBodyParts} onBodyPartSelection={handleBodyPartSelection} />
          <div className={styles.btnWrapper}>
            <Button label="이전으로" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBlank} />
            <Button
              label="다음"
              size="large"
              variant="solidPrimary"
              disabled={selectedBodyParts.length === 0} // 부위 선택 없으면 버튼 비활성화
              onClick={handleNextFromBodyPart} // 부위 선택 -> 증상 선택으로 이동
            />
          </div>
        </>
      )}
      {currentStep === 4 && (
        <>
          {/* 증상 선택 Step */}
          <SymStep2 selectedDiseases={selectedDiseases} onDiseaseSelection={handleDiseaseSelection} />
          <div className={styles.btnWrapper}>
            <Button
              label="이전으로"
              size="large"
              variant="solidNeutral"
              disabled={false}
              onClick={handleGoBack} // 이전으로 돌아가기
            />
            <Button
              label="다음"
              size="large"
              variant="solidPrimary"
              disabled={selectedDiseases.length === 0} // 증상 선택 없으면 버튼 비활성화
              onClick={handleNextStep} // 증상 선택 -> 다음 단계로 이동
            />
          </div>
        </>
      )}
    </>
  );
};

export default Symptom;
