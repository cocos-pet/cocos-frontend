import * as styles from "../petBirth/PetBirth.css.ts";
import { ChangeEvent, KeyboardEvent, useState } from "react";

import { TextField } from "@common/component/TextField";
import { Button } from "@common/component/Button";
import { PetData } from "../../RegisterPet.tsx";
import { ONBOARDING_GUIDE } from "../../../../onboarding/index/constant/onboardingGuide.ts";
import Title from "../../../../onboarding/index/common/title/Title.tsx";
import Docs from "../../../../onboarding/index/common/docs/Docs.tsx";

interface PetWeightProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: <K extends keyof PetData>(field: K, value: PetData[K]) => void;
}

const PetWeight = ({ setStep, updatePetData }: PetWeightProps) => {
  const [petWeight, setPetWeight] = useState("");

  const updatePetWeight = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setPetWeight(value.replace(/\D/g, ""));
  };

  const blockDecimalKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ".") {
      e.preventDefault();
    }
  };

  const handleNext = () => {
    const weight = Number.parseInt(petWeight, 10);

    updatePetData("weight", weight); // 부모 상태에 몸무게 업데이트
    setStep((prev) => prev + 1); // 다음 단계로 이동
  };

  // 뒤로가기
  const handleGoBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.layout}>
        <div className={styles.gap}>
          <Title text={ONBOARDING_GUIDE.petWeight.title} />
          <Docs text={ONBOARDING_GUIDE.petWeight.docs} />
        </div>
        {/* 나이 입력 영역 */}
        <div className={styles.centerLayout}>
          <div>
            <TextField
              state="centerPlaceholder"
              value={petWeight}
              onChange={updatePetWeight}
              onKeyDown={blockDecimalKey}
              placeholder="몸무게"
              maxLength={2}
              isDelete={false}
            />
          </div>
          <span className={styles.ageFontStyle}>Kg</span>
        </div>
      </div>
      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button
          label="다음"
          size="large"
          variant="solidPrimary"
          disabled={false}
          onClick={handleNext} // 몸무게 값은 항상 유효하므로 다음 단계로 진행
        />
      </div>
    </>
  );
};

export default PetWeight;
