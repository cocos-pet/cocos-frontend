import * as styles from "./PetAge.css";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { TextField } from "@common/component/TextField";
import { Button } from "@common/component/Button";

const PetAge = () => {
  const [petAge, setPetAge] = useState("");

  // 유효성 검사 통과한 반려동물 나이
  const updatePetAge = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setPetAge(value.replace(/[^0-9]/g, "")); // 숫자만 필터링 후 상태 업데이트
  };

  // '다음으로' 버튼 활성화 유무
  const isValid = petAge && updatePetAge.length !== 0;

  // 뒤로가기 TODO: 플로우대로 구현
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
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
          <div>
            <TextField
              state="centerPlaceholder"
              value={petAge}
              onChange={updatePetAge}
              placeholder="나이"
              maxLength={2}
            />
          </div>
          <span className={styles.ageFontStyle}>살</span>
        </div>
      </div>
      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={!isValid} onClick={handleNext} />
      </div>
    </>
  );
};

export default PetAge;
