import { Button } from "@common/component/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as styles from "./Onboarding.css";

import NickName from "../nickName/NickName";
const Onboarding = () => {
  const [isNextDisabled, setIsNextDisabled] = useState(true); // '다음' 버튼의 disabled 상태를 관리

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    // 아직 안정함
    console.log("클릭됨");
  };

  // NickName 컴포넌트에서 '닉네임' 값이 변경되면 '다음' 버튼 활성화
  const handleNickNameChange = (value: string) => {
    setIsNextDisabled(value.trim() === ""); // 값이 비어 있으면 비활성화, 아니면 활성화
  };

  return (
    <div className={styles.layout}>
      <NickName onNickNameChange={handleNickNameChange} />

      {/* 하단 버튼 컴포넌트 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={isNextDisabled} onClick={handleNext} />
      </div>
    </div>
  );
};

export default Onboarding;
