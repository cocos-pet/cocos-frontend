import { useState } from "react";
import Symptom from "@page/registerPet/index/component/petHealth/symptom/Symptom";
import Disease from "./disease/Disease";
import { PetData } from "@page/registerPet/index/RegisterPet";

interface PetHealthPropTypes {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: PetData[keyof PetData]) => void;
  isSkipDisease: boolean;
  handleSubmit: () => void;
}

const PetHealth = ({ setStep, updatePetData, isSkipDisease, handleSubmit }: PetHealthPropTypes) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      {(currentStep === 1 || currentStep === 2) && (
        <Disease
          currentStep={currentStep}
          setStep={setStep}
          updatePetData={updatePetData}
          setCurrentStep={setCurrentStep}
        />
      )}
      {(currentStep === 3 || currentStep === 4) && (
        <Symptom
          setStep={setStep}
          updatePetData={updatePetData}
          isSkipDisease={isSkipDisease}
          handleSubmit={handleSubmit}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
    </>
  );
};

export default PetHealth;
