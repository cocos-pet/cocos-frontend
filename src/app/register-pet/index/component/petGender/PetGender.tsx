import * as styles from "./PetGender.css";

import DualOptionSelector from "../../common/dualOptionSelector/DualOptionSelector";
import { Button } from "@design-system/Button";
import { useState } from "react";
import { PetData } from "../../RegisterPet.tsx";
import { genderOptions } from "../../constant/genderData.ts";
import { ONBOARDING_GUIDE } from "../../../../onboarding/index/constant/onboardingGuide.ts";
import Title from "../../../../onboarding/index/common/title/Title.tsx";
import Docs from "../../../../onboarding/index/common/docs/Docs.tsx";

interface PetGenderProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: PetData[keyof PetData]) => void;
}

const PetGender = ({ setStep, updatePetData }: PetGenderProps) => {
  const [gender, setGender] = useState<string | null>(null);

  // 성별 선택
  const handleOptionSelect = (value: string) => {
    setGender(value);
    updatePetData("gender", value === "수컷" ? "M" : "F");
  };

  // 뒤로 가기
  const handleGoBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  // 선택한 성별에 따라 변환된 데이터 생성
  const selectedGenderData = {
    animals: genderOptions.map((option) => ({
      id: option.id,
      name: option.name,
      image: option.image,
    })),
  };

  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.layout}>
        <div className={styles.gap}>
          <Title text={ONBOARDING_GUIDE.petGender.title} />
          <Docs text={ONBOARDING_GUIDE.petGender.docs} />
        </div>
        {/* 성별 선택 영역 */}
        <DualOptionSelector
          data={selectedGenderData}
          onSelect={(value: string) => {
            handleOptionSelect(value);
          }}
        />
      </div>
      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button
          label="다음"
          size="large"
          variant="solidPrimary"
          disabled={!gender}
          onClick={() => setStep((prev) => prev + 1)}
        />
      </div>
    </>
  );
};

export default PetGender;
