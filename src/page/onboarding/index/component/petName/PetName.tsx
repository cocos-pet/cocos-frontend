import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./PetName.css";
import onboardingImg from "@asset/image/image 1730.png";
import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { TextField } from "@common/component/TextField";
import { Button } from "@common/component/Button";
import { validatePetName } from "../../util/validatePetName";

const PetName = () => {
  // 상태 하나로 관리
  const [petName, setPetName] = useState("");

  // 펫이름 입력 처리
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPetName(e.target.value);
  };

  // 유효성 검사 결과
  const validationMessages = petName ? validatePetName(petName) : [];
  const isValid = petName && validationMessages.length === 0;

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
          <img src={onboardingImg} alt="onboarding-character" className={styles.imgStyle} />
          <Title text={ONBOARDING_GUIDE.petName.title} />
          <Docs text={ONBOARDING_GUIDE.petName.docs} />
        </div>
      </div>

      {/* 펫이름 입력 영역 */}
      <TextField
        state={petName === "" ? "default" : isValid ? "default" : "error"}
        value={petName}
        onChange={handleChange}
        placeholder="닉네임을 입력해주세요."
      />
      <div className={styles.errorLayout}>
        {validationMessages.map((message) => (
          <Docs key={`error-${message}`} state="lError" text={message} />
        ))}
      </div>
      
      {/* 하단 버튼 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={!isValid} onClick={handleNext} />
      </div>
    </>
  );
};

export default PetName;
