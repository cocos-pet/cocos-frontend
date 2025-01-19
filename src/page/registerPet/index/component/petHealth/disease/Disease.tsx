import * as styles from "./Disease.css";

import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { PetData } from "@page/registerPet/index/RegisterPet";
import { Button } from "@common/component/Button";

interface DiseaseProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;

  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: PetData[keyof PetData]) => void;
}

const Disease = ({ currentStep, setStep, updatePetData, setCurrentStep }: DiseaseProps) => {
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

  // 질병 1단계에서 질병유무 컴포넌트로
  const handleGoHealth = () => {
    setStep(5);
  };

  // 질병 1단계에서 질병 2단계로
  const handleNextFromStep1 = () => {
    setCurrentStep(2);
  };

  // 질병 2단계에서 질병 1단계로
  const handleGoBack = () => {
    setCurrentStep(1);
  };

  // 질병 2단계에서 증상 1단계로
  const handleNextStep = () => {
    updatePetData("diseaseIds", selectedDiseases);
    setCurrentStep(3);
  };
  return (
    <>
      {currentStep === 1 && (
        <>
          <Step1 selectedIds={selectedBodyParts} onBodyPartSelection={handleBodyPartSelection} />
          {/* // 돌아가기 구현 안됨 */}
          <div className={styles.btnWrapper}>
            <Button label="이전으로" size="large" variant="solidNeutral" disabled={false} onClick={handleGoHealth} />

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
          <Step2 selectedDiseases={selectedDiseases} onDiseaseSelection={handleDiseaseSelection} />
          <div className={styles.btnWrapper}>
            <Button label="이전으로" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
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

export default Disease;
