import * as styles from "./PetGender.css";
import { useNavigate } from "react-router-dom";
import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import DualOptionSelector from "../../component/dualOptionSelector/DualOptionSelector";
import { Button } from "@common/component/Button";
import { data } from "@page/onboarding/index/constant/genderData";
import { useState } from "react";

const PetGender = () => {
  // 선택 상태 관리 (초기값: null)
  const [gender, setGender] = useState<string | null>(null);

  // 선택한 버튼 텍스트 = selectedPetType
  const handleOptionSelect = (value: string) => {
    setGender(value);
  };
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
          <Title text={ONBOARDING_GUIDE.petGender.title} />
          <Docs text={ONBOARDING_GUIDE.petGender.docs} />
        </div>
        {/* 성별 선택 영역 */}
        <DualOptionSelector data={data.gender} onSelect={handleOptionSelect} />
      </div>
      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={!gender} onClick={handleNext} />
      </div>
    </>
  );
};

export default PetGender;
