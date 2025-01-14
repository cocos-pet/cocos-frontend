import Title from "@page/onboarding/component/title/Title";
import Docs from "@page/onboarding/component/docs/Docs";
import { ONBOARDING_GUIDE } from "@page/onboarding/constant/onboardingGuide";
import { ERROR_MSG } from "@page/onboarding/constant/errorMsg";

import onboardingImg from "@asset/image/image 1730.png";
import { TextField } from "@common/component/TextField";
import * as styles from "./NickName.css";
import { ChangeEvent, useState } from "react";

interface NickNameProps {
  onNickNameChange: (value: string) => void;
}

// 닉네임
const NickName = ({ onNickNameChange }: NickNameProps) => {
  const [value, setValue] = useState("");

  // 값 변경 시 부모 컴포넌트로 알리기
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onNickNameChange(newValue);
  };

  return (
    <div className={styles.layout}>
      <div>
        <img src={onboardingImg} alt="onboarding-character" className={styles.imgStyle} />
        <Title text={ONBOARDING_GUIDE.nickName.title} />
        <Docs text={ONBOARDING_GUIDE.nickName.docs} />
      </div>
      <div>
        <TextField value={value} onChange={onChange} placeholder="닉네임을 입력해주세요." />
        <Docs state="lError" text={ERROR_MSG.nickName.duplicate} />
        <Docs state="sError" text={ERROR_MSG.petAge.length} />
      </div>
    </div>
  );
};

export default NickName;
