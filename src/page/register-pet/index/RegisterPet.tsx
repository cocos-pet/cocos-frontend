import { useState, useEffect } from "react";
import PetName from "@page/register-pet/index/component/petName/PetName";
import PetType from "@page/register-pet/index/component/petType/PetType";
import PetGender from "@page/register-pet/index/component/petGender/PetGender";
import PetId from "@page/register-pet/index/component/petId/PetId";
import PetAge from "@page/register-pet/index/component/petAge/PetAge";
import PetHealthDualSelector from "./component/petHealth/petHealthDualSelector/PetHealthDualSelector";
import PetHealth from "@page/register-pet/index/component/petHealth/PetHealth";
import ProgressBar from "@page/register-pet/index/common/ProgressBar/ProgressBar";
import { useMyPetPost } from "@api/domain/register-pet/pets/hook";
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

  // api
  const { mutate: myPet } = useMyPetPost();

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

  const updatePetData = <K extends keyof PetData>(
    field: K,
    value: PetData[K],
    callback?: (updatedData: PetData) => void,
  ) => {
    setPetData((prev) => {
      const updatedData = { ...prev, [field]: value };
      if (callback) callback(updatedData);
      return updatedData;
    });
  };

  const handleSubmit = () => {
    // 데이터 전송 로직
    myPet(petData, {
      onSuccess: (response) => {
        console.log("반려동물 등록 성공:", response);
        // 데이터 초기화 및 초기 단계로 이동
        setPetData({
          breedId: null,
          name: "",
          gender: null,
          age: null,
          diseaseIds: [],
          symptomIds: [],
        });
      },
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
        return <PetId setStep={setStep} updatePetData={updatePetData} petData={petData} />;
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
        return;
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
