import * as styles from "./PetHealthDualSelector.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";

import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { Button } from "@common/component/Button";

interface PetHealthDualSelectorProps {
  setStep: Dispatch<SetStateAction<number>>;
  isSkipDisease: boolean | null;
  setIsSkipDisease: Dispatch<SetStateAction<boolean | null>>;
  setCurrentStep: Dispatch<SetStateAction<number | null>>;
}

const PetHealthDualSelector = ({ setStep, setIsSkipDisease, setCurrentStep }: PetHealthDualSelectorProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  // 선택한 값 처리 (단순히 선택값만 처리)
  const handleSelect = (choice: string) => {
    setSelected(choice);
    if (choice === "예") {
      setIsSkipDisease(false);
    } else if (choice === "아니오") {
      setIsSkipDisease(true);
    }
  };

  // 뒤로가기
  const handleGoBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  // 다음 버튼 (선택값이 있을 때만 다음 단계로 이동)
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    if (selected === "예") {
      // setStep((prevStep) => prevStep + 1);
      setCurrentStep(1);
    } else {
      // setStep((prevStep) => prevStep + 1);
      setCurrentStep(3);
    }
  };

  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.layout}>
        <div>
          <Title text={ONBOARDING_GUIDE.isPetDisease.title} />
          <Docs text={ONBOARDING_GUIDE.isPetDisease.docs} />
        </div>
        {/* 질병 유무 선택 영역 */}
        <div className={styles.dualSelectorWrapper}>
          <Button
            label="궁금한 질병이 있어요"
            size="large"
            variant={"outlinePrimary"}
            onClick={() => handleSelect("예")}
          />
          <Button
            label="궁금한 증상이 있어요"
            size="large"
            variant={"outlinePrimary"}
            onClick={() => handleSelect("아니오")}
          />
          <Button
            label="특별한 문제는 없지만, 정보를 보고 싶어요."
            size="large"
            variant={"outlinePrimary"}
            onClick={() => handleSelect("아니오")}
          />
        </div>
      </div>
      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={selected === null} onClick={handleNext} />
      </div>
    </>
  );
};

export default PetHealthDualSelector;
