import { Button } from "@common/component/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as styles from "./Onboarding.css";
import Nickname from "@page/onboarding/nickname/Nickname";

const Onboarding = () => {
  // '다음' 버튼의 disabled 상태를 관리
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const navigate = useNavigate();

  // 뒤로가기
  const handleGoBack = () => {
    navigate(-1);
  };

  // 다음으로 (유효성 검사 또는 이동 아직 안정함...)
  const handleNext = () => {
    console.log("클릭됨");
  };

  // NickName 컴포넌트에서 '닉네임' 값이 입력되면 '다음' 버튼 활성화
  const handleNicknameChange = (value: string) => {
    setIsNextDisabled(value.trim() === "");
  };

  return (
    <div className={styles.layout}>
      <Nickname onNicknameChange={handleNicknameChange} />

      {/* 하단 버튼 컴포넌트 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={isNextDisabled} onClick={handleNext} />
      </div>
    </div>
  );
};

export default Onboarding;
