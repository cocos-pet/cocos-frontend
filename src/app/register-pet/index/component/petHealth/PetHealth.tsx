import * as styles from "./PetHealth.css";
import { useState } from "react";
import { Button } from "@common/component/Button";

import { useBodiesGet } from "@api/domain/register-pet/bodies/hook";
import { useDiseaseGet } from "@api/domain/register-pet/disease/hook";
import { useSymptomGet } from "@api/domain/register-pet/symptom/hook";
import type { PetHealthIds } from "../../RegisterPet.tsx";
import BodyPart from "./bodyPart/BodyPart.tsx";
import ChipSelector from "./chipSelector/ChipSelector.tsx";

interface PetHealthPropTypes {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: (healthIds?: PetHealthIds) => void;
  isPending: boolean;
}

type BodySelection = { diseaseIds: number[]; symptomIds: number[] };

const PetHealth = ({
  currentStep,
  setCurrentStep,
  setStep,
  handleSubmit,
  isPending,
}: PetHealthPropTypes) => {
  const [selectedBodies, setSelectedBodies] = useState<number[]>([]);
  const [isSkipSelected, setIsSkipSelected] = useState(false);

  // 부위별 질병/증상 선택 (부위 순서대로 저장)
  const [bodySelections, setBodySelections] = useState<BodySelection[]>([]);
  const [currentBodyDiseases, setCurrentBodyDiseases] = useState<number[]>([]);
  const [currentBodySymptoms, setCurrentBodySymptoms] = useState<number[]>([]);

  const currentBodyIndex = currentStep - 2;
  const isChipSelectorStep = currentStep >= 2 && currentBodyIndex < selectedBodies.length;

  const { data: bodyData } = useBodiesGet();
  const { data: diseaseBodyData } = useDiseaseGet(selectedBodies);
  const { data: symptomBodyData } = useSymptomGet(selectedBodies);

  const handleBodyPartSelection = (bodyPartId: number) => {
    setSelectedBodies((prev) =>
      prev.includes(bodyPartId) ? prev.filter((id) => id !== bodyPartId) : [...prev, bodyPartId],
    );
    setIsSkipSelected(false);
  };

  const handleSkipToggle = () => {
    setIsSkipSelected((prev) => !prev);
    if (!isSkipSelected) setSelectedBodies([]);
  };

  const handleDiseaseSelection = (diseaseId: number) => {
    setCurrentBodyDiseases((prev) => {
      if (prev.includes(diseaseId)) return prev.filter((id) => id !== diseaseId);
      if (prev.length < 2) return [...prev, diseaseId];
      return prev;
    });
  };

  const handleSymptomSelection = (symptomId: number) => {
    setCurrentBodySymptoms((prev) => {
      if (prev.includes(symptomId)) return prev.filter((id) => id !== symptomId);
      if (prev.length < 2) return [...prev, symptomId];
      return prev;
    });
  };

  const handleBackToWeight = () => {
    setStep(5);
  };

  const handleGoToChipSelector = () => {
    if (isSkipSelected) {
      if (isPending) return;
      handleSubmit({ diseaseIds: [], symptomIds: [] });
    } else {
      setCurrentStep(2);
    }
  };

  const handleNextFromChipSelector = () => {
    const newSelections = [...bodySelections];
    newSelections[currentBodyIndex] = {
      diseaseIds: currentBodyDiseases,
      symptomIds: currentBodySymptoms,
    };
    setBodySelections(newSelections);

    if (currentBodyIndex < selectedBodies.length - 1) {
      const nextIndex = currentBodyIndex + 1;
      setCurrentBodyDiseases(newSelections[nextIndex]?.diseaseIds ?? []);
      setCurrentBodySymptoms(newSelections[nextIndex]?.symptomIds ?? []);
      setCurrentStep(currentStep + 1);
    } else {
      const allDiseases = newSelections.flatMap((s) => s.diseaseIds);
      const allSymptoms = newSelections.flatMap((s) => s.symptomIds);
      if (isPending) return;

      handleSubmit({ diseaseIds: allDiseases, symptomIds: allSymptoms });
    }
  };

  const handleBackFromChipSelector = () => {
    if (currentBodyIndex > 0) {
      const prevSelections = bodySelections[currentBodyIndex - 1];
      setCurrentBodyDiseases(prevSelections?.diseaseIds ?? []);
      setCurrentBodySymptoms(prevSelections?.symptomIds ?? []);
      setCurrentStep(currentStep - 1);
    } else {
      setBodySelections([]);
      setCurrentBodyDiseases([]);
      setCurrentBodySymptoms([]);
      setCurrentStep(1);
    }
  };

  if (!bodyData) return null;

  const diseaseBody = diseaseBodyData?.bodies?.[currentBodyIndex];
  const symptomBody = symptomBodyData?.bodies?.[currentBodyIndex];
  const bodyName = diseaseBody?.name ?? symptomBody?.name ?? "";
  const diseases = diseaseBody?.diseases ?? [];
  const symptoms = symptomBody?.symptoms ?? [];
  const canProceedChipSelector =
    currentBodyDiseases.length > 0 || currentBodySymptoms.length > 0;

  return (
    <>
      {currentStep === 1 && (
        <>
          <BodyPart
            data={bodyData?.data}
            selectedIds={selectedBodies}
            onBodyPartSelection={handleBodyPartSelection}
            isSkipSelected={isSkipSelected}
            onSkipToggle={handleSkipToggle}
          />
          <div className={styles.btnWrapper}>
            <Button
              label="이전으로"
              size="large"
              variant="solidNeutral"
              disabled={false}
              onClick={handleBackToWeight}
            />
            <Button
              label="다음"
              size="large"
              variant="solidPrimary"
              disabled={selectedBodies.length === 0 && !isSkipSelected}
              onClick={handleGoToChipSelector}
            />
          </div>
        </>
      )}
      {isChipSelectorStep && (diseaseBody || symptomBody) && (
        <>
          <ChipSelector
            bodyName={bodyName}
            diseases={diseases}
            symptoms={symptoms}
            selectedDiseaseIds={currentBodyDiseases}
            selectedSymptomIds={currentBodySymptoms}
            onDiseaseSelection={handleDiseaseSelection}
            onSymptomSelection={handleSymptomSelection}
          />
          <div className={styles.btnWrapper}>
            <Button
              label="이전으로"
              size="large"
              variant="solidNeutral"
              disabled={false}
              onClick={handleBackFromChipSelector}
            />
            <Button
              label="다음"
              size="large"
              variant="solidPrimary"
              disabled={!canProceedChipSelector || isPending}
              onClick={handleNextFromChipSelector}
            />
          </div>
        </>
      )}
    </>
  );
};

export default PetHealth;
