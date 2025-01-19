import Symptom from "@page/registerPet/index/component/petHealth/symptom/Symptom";
import Disease from "./disease/Disease";
import { PetData } from "@page/registerPet/index/RegisterPet";

interface PetHealthPropTypes {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: PetData[keyof PetData]) => void;
  isSkipDisease: boolean | null;
  handleSubmit: () => void;
  currentStep: number | null;
  setCurrentStep: React.Dispatch<React.SetStateAction<number | null>>;
}

const PetHealth = ({
  setStep,
  updatePetData,
  isSkipDisease,
  handleSubmit,
  currentStep,
  setCurrentStep,
}: PetHealthPropTypes) => {
  console.log("펫헬스임",currentStep)
  return (
    <>
      {currentStep === 1 && (
        <Disease
          currentStep={currentStep}
          setStep={setStep}
          updatePetData={updatePetData}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 3 && (
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
