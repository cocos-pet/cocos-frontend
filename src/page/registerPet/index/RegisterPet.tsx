import { useState, useEffect } from "react";
import PetName from "@page/registerPet/index/component/petName/PetName";
import PetType from "@page/registerPet/index/component/petType/PetType";
import PetGender from "@page/registerPet/index/component/petGender/PetGender";
import PetId from "@page/registerPet/index/component/petId/PetId";
import PetAge from "@page/registerPet/index/component/petAge/PetAge";
import PetHealthDualSelector from "./component/petHealth/petHealthDualSelector/PetHealthDualSelector";
import PetHealth from "@page/registerPet/index/component/petHealth/PetHealth";
import ProgressBar from "@page/registerPet/index/common/ProgressBar/ProgressBar";

export interface PetData {
  breedId: number | null;
  name: string;
  gender: "F" | "M" | null;
  age: number | null;
  diseaseIds: number[] | null;
  symptomIds: number[];
}
const RegisterPet = () => {
  // 등록 전체 조절
  const [step, setStep] = useState(0);

  // 질병 단계 스킵 했는지 확인하는 상태
  const [isSkipDisease, setIsSkipDisease] = useState<boolean | null>(null);

  // 질병, 증상 세부 단계 조절
  const [currentStep, setCurrentStep] = useState<number | null>(null);

  const [petData, setPetData] = useState<PetData>({
    breedId: null,
    name: "",
    gender: null,
    age: null,
    diseaseIds: [],
    symptomIds: [],
  });

  useEffect(() => {
    console.log("업데이트된 반려동물 데이터:", petData);
  }, [petData]);

  const updatePetData = <K extends keyof PetData>(field: K, value: PetData[K]) => {
    setPetData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("제출 데이터:", petData);
    // 서버로 데이터 전송 로직 추가
    setPetData({
      breedId: null,
      name: "",
      gender: null,
      age: null,
      diseaseIds: [],
      symptomIds: [],
    });
  };

  const getComponent = () => {
    switch (step) {
      case 0:
        return <PetName setStep={setStep} updatePetData={updatePetData} />;
      case 1:
        return <PetType setStep={setStep} updatePetData={updatePetData} />;
      case 2:
        return <PetGender setStep={setStep} updatePetData={updatePetData} />;
      case 3:
        return <PetId setStep={setStep} updatePetData={updatePetData} />;
      case 4:
        return <PetAge setStep={setStep} updatePetData={updatePetData} />;
      case 5:
        return (
          <PetHealthDualSelector
            setStep={setStep}
            isSkipDisease={isSkipDisease}
            setIsSkipDisease={setIsSkipDisease}
            setCurrentStep={setCurrentStep}
          />
        );
      case 6:
        return (
          <PetHealth
            setStep={setStep}
            updatePetData={updatePetData}
            isSkipDisease={isSkipDisease}
            handleSubmit={handleSubmit}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <ProgressBar max={7} current={step} />
      {getComponent()}
    </>
  );
};
export default RegisterPet;
