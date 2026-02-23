import * as styles from "./PetBirth.css.ts";
import { ChangeEvent, useState } from "react";

import { TextField } from "@common/component/TextField";
import { Button } from "@common/component/Button";
import { PetData } from "../../RegisterPet.tsx";
import { ONBOARDING_GUIDE } from "../../../../onboarding/index/constant/onboardingGuide.ts";
import Title from "../../../../onboarding/index/common/title/Title.tsx";
import Docs from "../../../../onboarding/index/common/docs/Docs.tsx";
import { validateBirthDate, formatBirthDate, toBirthDateString } from "../../utils/validateBirthDate";

interface PetBirthProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: <K extends keyof PetData>(field: K, value: PetData[K]) => void;
}

const PetBirth = ({ setStep, updatePetData }: PetBirthProps) => {
  const [petBirth, setPetBirth] = useState("");
  const [error, setError] = useState<string | null>(null);

  const updatePetBirth = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue === "0") return;
    const formatted = formatBirthDate(value);
    setPetBirth(formatted);
    // 실시간 유효성 검사 (형식 완성 시에만)
    if (formatted.length === 0) {
      setError(null);
    } else if (formatted.length === 10) {
      const result = validateBirthDate(formatted);
      setError(result.valid ? null : result.error);
    } else {
      setError(null);
    }
  };

  const validationResult = petBirth ? validateBirthDate(petBirth) : null;
  const isValid = validationResult?.valid ?? false;

  const handleNext = () => {
    if (isValid) {
      const birthDate = toBirthDateString(petBirth); // "2020-02-12" 형식
      updatePetData("birth", birthDate);
      setStep((prev) => prev + 1);
    } else if (petBirth) {
      const result = validateBirthDate(petBirth);
      if (!result.valid) {
        setError(result.error);
      }
    }
  };

  const handleGoBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.layout}>
        <div className={styles.gap}>
          <Title text={ONBOARDING_GUIDE.petBirth.title} />
          <Docs text={ONBOARDING_GUIDE.petBirth.docs} />
        </div>
        {/* 나이 입력 영역 */}
        <div>
          <div className={styles.inputWithError}>
            <TextField
              value={petBirth}
              onChange={updatePetBirth}
              placeholder="YYYY/MM/DD"
              maxLength={10}
              isDelete={false}
              state={error ? "error" : "default"}
            />
            {error && (
              <p className={styles.errorText} role="alert">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={!petBirth || !isValid} onClick={handleNext} />
      </div>
    </>
  );
};

export default PetBirth;
