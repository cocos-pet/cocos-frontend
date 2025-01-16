import * as styles from "./PetHealthDualSelector.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";

import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { Button } from "@common/component/Button";

interface PetHealthDualSelectorProps {
  stepChange: (step: string) => void;
}

const PetHealthDualSelector = ({ stepChange }: PetHealthDualSelectorProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  // 선택한 값 처리
  const handleSelect = (choice: string) => {
    setSelected(choice);
  };

  // 뒤로 가기
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  // 다음 버튼 (부모로 선택값을 전달_예 or 아니오)
  const handleNext = () => {
    if (selected) {
      stepChange(selected);
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
          <Button label="아니오" size="large" variant="outlinePrimary" onClick={() => handleSelect("아니오")} />
          <Button label="예" size="large" variant="outlinePrimary" onClick={() => handleSelect("예")} />
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
