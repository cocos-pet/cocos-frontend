import * as styles from "@page/registerPet/index/component/petHealth/disease/Disease.css";

import { useState } from "react";
import SymStep1 from "./SymStep1";
import SymStep2 from "./SymStep2";
import { PetData } from "@page/registerPet/index/RegisterPet";
import { Button } from "@common/component/Button";

interface SymptomProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: PetData[keyof PetData]) => void;
}

const Symptom = ({ setStep, updatePetData }: SymptomProps) => {
  const [currentStep, setCurrentStep] = useState(1); // 현재 스텝 상태
  const [selectedBodyParts, setSelectedBodyParts] = useState<number[]>([]);
  const [selectedDiseases, setSelectedDiseases] = useState<number[]>([]);

  const handleBodyPartSelection = (bodyPartId: number) => {
    setSelectedBodyParts((prevSelected) => {
      if (prevSelected.includes(bodyPartId)) {
        return prevSelected.filter((id) => id !== bodyPartId);
      }
      return [...prevSelected, bodyPartId];
    });
  };

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

  const handleNextFromStep1 = () => {
    if (selectedBodyParts.length > 0) {
      setCurrentStep(2); // Step1에서 Step2로 이동
    }
  };
  const handleNextStep = () => {
    // Step2에서 선택된 데이터 업데이트
    updatePetData("symptomIds", selectedDiseases); // 증상 정보만 업데이트
    setStep(7); // Step2 -> 다음 단계로 이동
  };

  return (
    <>
      {currentStep === 1 && (
        <>
          <SymStep1 selectedIds={selectedBodyParts} onBodyPartSelection={handleBodyPartSelection} />
          {/* // 돌아가기 구현 안됨 */}
          <div className={styles.btnWrapper}>
            <Button label="이전으로" size="large" variant="solidNeutral" disabled={false} onClick={handleNextStep} />

            <Button
              label="다음"
              size="large"
              variant="solidPrimary"
              disabled={selectedBodyParts.length === 0} // 부위 선택 없으면 버튼 비활성화
              onClick={handleNextFromStep1}
            />
          </div>
        </>
      )}
      {currentStep === 2 && (
        <>
          <SymStep2 selectedDiseases={selectedDiseases} onDiseaseSelection={handleDiseaseSelection} />
          <div className={styles.btnWrapper}>
            <Button label="이전으로" size="large" variant="solidNeutral" disabled={false} onClick={handleNextStep} />
            <Button
              label="다음"
              size="large"
              variant="solidPrimary"
              disabled={selectedDiseases.length === 0}
              onClick={handleNextStep}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Symptom;
