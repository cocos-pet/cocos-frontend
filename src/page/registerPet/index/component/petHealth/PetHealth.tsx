import { useState } from "react";
import PetHealthDualSelector from "./petHealthDualSelector/PetHealthDualSelector";
import Step1 from "@page/registerPet/index/component/petHealth/disease/Step1"
import Step2 from  "@page/registerPet/index/component/petHealth/symptom/Step2"

const PetHealth = () => {
  // 제출 할 폼 정보 저장 로직은 PetHealth 하위 컴포넌트 퍼블리싱 완료 후 구현 예정
  const [healthStep, setHealthStep] = useState<string>("");

  // healthStep 상태를 업데이트하는 핸들러
  const stepChange = (step: string) => {
    setHealthStep(step);
  };

  return (
    <>
      {healthStep === "" && <PetHealthDualSelector stepChange={stepChange} />}
      {healthStep === "예" && <Step1 />}
      {healthStep === "아니오" && <Step2 />}
    </>
  );
};

export default PetHealth;
