import { useState } from "react";

import PetHealthDualSelector from "./component/petHealth/petHealthDualSelector/PetHealthDualSelector";

import { useMyPetPost } from "@api/domain/register-pet/pets/hook";
import dynamic from "next/dynamic";
import PetName from "./component/petName/PetName.tsx";
import PetType from "./component/petType/PetType.tsx";
import PetGender from "./component/petGender/PetGender.tsx";
import PetAge from "./component/petAge/PetAge.tsx";
import PetId from "./component/petId/PetId.tsx";
import PetHealth from "./component/petHealth/PetHealth.tsx";
import ProgressBar from "./common/ProgressBar/ProgressBar.tsx";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), { ssr: false });

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
  const { mutate: myPet, isPending } = useMyPetPost();

  const [petData, setPetData] = useState<PetData>({
    breedId: null,
    name: "",
    gender: null,
    age: null,
    diseaseIds: [],
    symptomIds: [],
  });

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
      onSuccess: () => {
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

  if (isPending) return <Loading height={50} />;

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
            isPending={isPending}
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
