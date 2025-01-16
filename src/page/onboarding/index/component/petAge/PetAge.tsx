import * as styles from "./PetAge.css";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";
import Title from "../../common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { TextField } from "@common/component/TextField";

import { Button } from "@common/component/Button";

const PetAge = () => {
  // 상태 하나로 관리
  const [petName, setPetName] = useState("");

  // 닉네임 입력 처리
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPetName(e.target.value);
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
          <Title text={ONBOARDING_GUIDE.petAge.title} />
          <Docs text={ONBOARDING_GUIDE.petAge.docs} />
        </div>
        {/* 나이 입력 영역 */}
        <div className={styles.centerLayout}>
          <div className={styles.fieldSize}>
            <TextField value={petName} onChange={handleChange} placeholder="나이" />
          </div>
          <span className={styles.ageFontStyle}>살</span>
        </div>
      </div>
      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={false} onClick={handleNext} />
      </div>
    </>
  );
};

export default PetAge;
