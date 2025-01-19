import { useState, useEffect } from "react";
import PetName from "@page/registerPet/index/component/petName/PetName";
import PetType from "@page/registerPet/index/component/petType/PetType";
import PetGender from "@page/registerPet/index/component/petGender/PetGender";
import PetId from "@page/registerPet/index/component/petId/PetId";
import PetAge from "@page/registerPet/index/component/petAge/PetAge";
import PetHealthDualSelector from "./component/petHealth/petHealthDualSelector/PetHealthDualSelector";
import Disease from "@page/registerPet/index/component/petHealth/disease/Disease";
import Symptom from "@page/registerPet/index/component/petHealth/symptom/Symptom";
export interface PetData {
  breedId: number | null;
  name: string;
  gender: "F" | "M" | null;
  age: number | null;
  diseaseIds: number[] | null;
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

  useEffect(() => {
    console.log("업데이트된 반려동물 데이터:", petData);
  }, [petData]);

  const updatePetData = <K extends keyof PetData>(field: K, value: PetData[K]) => {
    setPetData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("제출 데이터:", petData);
    // 서버로 데이터 전송 로직 추가

    // setPetData({
    //   breedId: null,
    //   name: "",
    //   gender: null,
    //   age: null,
    //   diseaseIds: [],
    //   symptomIds: [],
    // });
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
        return <PetHealthDualSelector setStep={setStep} />;
      case 6:
        return <Disease setStep={setStep} updatePetData={updatePetData} />;
      case 7:
        return (
          <Symptom
            setStep={setStep}
            updatePetData={updatePetData}
            handleSubmit={handleSubmit} // handleSubmit을 Symptom에 전달
          />
        );

      default:
        return null;
    }
  };

  return <>{getComponent()}</>;
};
export default RegisterPet;
