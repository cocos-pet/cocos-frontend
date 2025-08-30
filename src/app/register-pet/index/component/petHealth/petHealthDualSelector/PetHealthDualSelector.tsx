import * as styles from "./PetHealthDualSelector.css";
import {Dispatch, SetStateAction, useState} from "react";
import {ONBOARDING_GUIDE} from "@app/onboarding/index/constant/onboardingGuide";

import Title from "@app/onboarding/index/common/title/Title";
import Docs from "@app/onboarding/index/common/docs/Docs";
import {Button} from "@design-system/Button";

interface PetHealthDualSelectorProps {
  setStep: Dispatch<SetStateAction<number>>;
  isSkipDisease: boolean | null;
  setIsSkipDisease: Dispatch<SetStateAction<boolean | null>>;
  setCurrentStep: Dispatch<SetStateAction<number | null>>;
}

const PetHealthDualSelector = ({ setStep, setIsSkipDisease, setCurrentStep }: PetHealthDualSelectorProps) => {
  const [selected, setSelected] = useState<boolean | null>(null);

  // 선택한 값 처리 (true: 질병, false: 증상/정보)
  const handleSelect = (choice: boolean) => {
    setSelected(choice);
    setIsSkipDisease(!choice);
  };

  // 뒤로 가기
  const handleGoBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  // 다음 버튼
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    if (selected) {
      setCurrentStep(1);
    } else {
      setCurrentStep(3);
    }
  };

  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.layout}>
        <div className={styles.gap}>
          <Title text={ONBOARDING_GUIDE.isPetDisease.title} />
          <Docs text={ONBOARDING_GUIDE.isPetDisease.docs} />
        </div>
        {/* 질병 유무 선택 영역 */}
        <div className={styles.dualSelectorWrapper}>
          <Button
            label="궁금한 질병이 있어요"
            size="large"
            variant={"outlinePrimary"}
            onClick={() => handleSelect(true)}
          />
          <Button
            label="궁금한 증상이 있어요"
            size="large"
            variant={"outlinePrimary"}
            onClick={() => handleSelect(false)}
          />
          <Button
            label="특별한 문제는 없지만, 정보를 보고 싶어요."
            size="large"
            variant={"outlinePrimary"}
            onClick={() => handleSelect(false)}
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
