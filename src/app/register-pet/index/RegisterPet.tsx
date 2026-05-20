import { useState } from "react";
import { useRouter } from "next/navigation";

import { useMyPetPost } from "@api/domain/register-pet/pets/hook";
import type { myPetPostType } from "@api/domain/register-pet/pets";
import { PATH } from "@route/path";
import dynamic from "next/dynamic";
import PetName from "./component/petName/PetName.tsx";
import PetType from "./component/petType/PetType.tsx";
import PetGender from "./component/petGender/PetGender.tsx";
import PetBirth from "./component/petBirth/PetBirth.tsx";
import PetWeight from "./component/weight/PetWeight.tsx";
import PetId from "./component/petId/PetId.tsx";
import PetHealth from "./component/petHealth/PetHealth.tsx";
import ProgressBar from "./common/ProgressBar/ProgressBar.tsx";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), { ssr: false });

export interface PetData {
  breedId: number | null;
  name: string;
  gender: "F" | "M" | null;
  birth: string | null;
  weight: number | null;
  diseaseIds: number[] | null;
  symptomIds: number[];
}

export type PetHealthIds = Pick<PetData, "diseaseIds" | "symptomIds">;

const RegisterPet = () => {
  const router = useRouter();

  // 등록 전체 조절
  const [step, setStep] = useState(0);

  // 질병, 증상 세부 단계 조절 (1: 대분류, 2: 질병 소분류, 3: 증상 소분류)
  const [currentStep, setCurrentStep] = useState(1);

  // api
  const { mutate: myPet, isPending } = useMyPetPost();

  const [petData, setPetData] = useState<PetData>({
    breedId: null,
    name: "",
    gender: null,
    birth: null,
    weight: null,
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
      // 콜백은 업데이터 안에서 호출하면 안 됨!!(렌더, 커밋 중 Router 등 다른 컴포넌트 업데이트 유발).
      if (callback) {
        queueMicrotask(() => callback(updatedData));
      }
      return updatedData;
    });
  };

  const handleSubmit = (healthIds?: PetHealthIds) => {
    const diseaseIds = healthIds?.diseaseIds ?? petData.diseaseIds;
    const symptomIds = healthIds?.symptomIds ?? petData.symptomIds;
    const apiData: myPetPostType = {
      breedId: petData.breedId,
      name: petData.name,
      gender: petData.gender,
      birthDate: petData.birth,
      diseaseIds,
      symptomIds,
    };
    myPet(apiData, {
      onSuccess: () => {
        // 데이터 초기화 및 초기 단계로 이동
        setPetData({
          breedId: null,
          name: "",
          gender: null,
          birth: null,
          weight: null, // 몸무게 추가
          diseaseIds: [],
          symptomIds: [],
        });
        router.push(PATH.REGISTER_PET.COMPLETE);
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
        return <PetBirth setStep={setStep} updatePetData={updatePetData} />;
      case 5:
        return <PetWeight setStep={setStep} updatePetData={updatePetData} />;
      case 6:
        return (
          <PetHealth
            setStep={setStep}
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
