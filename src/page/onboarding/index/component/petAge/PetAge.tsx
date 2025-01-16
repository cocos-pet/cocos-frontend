import * as styles from "./PetAge.css";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";
import Title from "../../common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { TextField } from "@common/component/TextField";
import { validatePetAge } from "@page/onboarding/index/util/validatePetAge";
import { Button } from "@common/component/Button";

const PetAge = () => {
  // 상태 하나로 관리
  const [petAge, setPetAge] = useState("");

  // 닉네임 입력 처리
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 숫자만 입력되도록 필터링 (정규식 사용)
    const numericValue = value.replace(/[^0-9]/g, "");

    // 최대 3자리까지 입력 허용
    if (numericValue.length <= 3) {
      setPetAge(numericValue);
    }
  };

  // 유효성 검사 결과
  const validationMessages = petAge ? validatePetAge(petAge) : [];
  const isValid = petAge && validationMessages.length === 0;

  // TextField 상태
  const textFieldState = petAge === "" || validationMessages.length === 0 ? "default" : "error";

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
          <div>
            <TextField
              state={textFieldState}
              value={petAge}
              onChange={handleChange}
              placeholder="나이"
              centerPlaceholder={true}
            />
            <div className={styles.errorLayout}>
              <Docs state="sError" text={validationMessages} />
            </div>
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
