import * as styles from "./Nickname.css";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { validateNickname } from "@shared/util/validateNickname";
import { Button } from "@common/component/Button";
import { TextField } from "@common/component/TextField";
import nicknameCoco from "@asset/image/nicknameCoco.png";

interface NicknamePros {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Nickname = ({ setStep }: NicknamePros) => {
  // 상태 하나로 관리
  const [nickname, setNickname] = useState("");

  // 닉네임 입력 처리
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  // 유효성 검사 결과
  const validationMessages = nickname ? validateNickname(nickname) : [];
  const isValid = nickname && validationMessages.length === 0;

  // TextField 상태
  const textFieldState = nickname === "" || validationMessages.length === 0 ? "default" : "error";

  // 뒤로 가기
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  // 다음 버튼
  const handleNext = () => {
    setStep(2);
  };

  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.layout}>
        <div>
          <img src={nicknameCoco} alt="onboarding-character" className={styles.imgStyle} />
          <Title text={ONBOARDING_GUIDE.nickname.title} />
          <Docs text={ONBOARDING_GUIDE.nickname.docs} />
        </div>

        {/* 닉네임 입력 영역 */}
        <div>
          <TextField
            state={textFieldState}
            value={nickname}
            onChange={handleChange}
            placeholder="닉네임을 입력해주세요."
          />
          <div className={styles.errorLayout}>
            {validationMessages.map((message) => (
              <Docs key={`error-${message}`} state="lError" text={message} />
            ))}
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={!isValid} onClick={handleNext} />
      </div>
    </>
  );
};

export default Nickname;
