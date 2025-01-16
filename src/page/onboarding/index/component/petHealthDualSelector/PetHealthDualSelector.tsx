import * as styles from "./PetHealthDualSelector.css";
import { useNavigate } from "react-router-dom";

import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";

import Title from "@page/onboarding/index/common/title/Title";
import Docs from "../../common/docs/Docs";

import { Button } from "@common/component/Button";

const PetHealthDualSelector = () => {
  // 뒤로 가기
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  // 다음 버튼
  const handleNext = () => {
    console.log("다음 pr에서 구현할래욥.");
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
          <Button label="아니오" size="large" variant="outlinePrimary" />
          <Button label="예" size="large" variant="outlinePrimary" />
        </div>
      </div>
      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        {/* 여기 disabled 수정 */}
        <Button label="다음" size="large" variant="solidPrimary" disabled={!false} onClick={handleNext} />
      </div>
    </>
  );
};

export default PetHealthDualSelector;
