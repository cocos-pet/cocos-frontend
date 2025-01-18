import { useState, useEffect } from "react";
import PetName from "@page/registerPet/index/component/petName/PetName";
import PetType from "@page/registerPet/index/component/petType/PetType";
import PetGender from "@page/registerPet/index/component/petGender/PetGender";
import PetId from "./component/petId/PetId";
import PetAge from "./component/petAge/PetAge";

export interface PetData {
  breedId: number | null;
  name: string;
  gender: "F" | "M" | null;
  age: number | null;
  diseaseIds: number[];
  symptomIds: number[];
}

const RegisterPet = () => {
  const [step, setStep] = useState(0);

  const [petData, setPetData] = useState<PetData>({
    breedId: null,
    name: "",
    gender: null,
    age: null,
    diseaseIds: [],
    symptomIds: [],
  });

  // 상태 변경을 확인하기 위한 useEffect
  useEffect(() => {
    console.log("업데이트된 반려동물 데이터:", petData);
  }, [petData]); // petData가 변경될 때마다 실행

  const updatePetData = <K extends keyof PetData>(field: K, value: PetData[K]) => {
    setPetData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("제출 데이터:", petData);
    // 서버로 데이터 전송 로직 추가

    // 데이터 전송 후 초기화
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
        return <PetAge setStep={setStep} updatePetData={updatePetData} onSubmit={handleSubmit} />;
      // case 5:
      // return <PetHealth setStep={setStep} updatePetData={updatePetData} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return <>{getComponent()}</>;
};

export default RegisterPet;
