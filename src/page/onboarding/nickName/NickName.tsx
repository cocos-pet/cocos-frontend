import Title from "@page/onboarding/common/title/Title";
import Docs from "@page/onboarding/common/docs/Docs";
import { ONBOARDING_GUIDE } from "@page/onboarding/constant/onboardingGuide";
import onboardingImg from "@asset/image/image 1730.png";
import { TextField } from "@common/component/TextField";
import * as styles from "./NickName.css";
import { ChangeEvent, useState } from "react";

interface NickNameProps {
  onNickNameChange: (value: string) => void; // 부모에서 전달받을 콜백 함수 타입 정의
}

const NickName = ({ onNickNameChange }: NickNameProps) => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onNickNameChange(newValue); // 값 변경 시 부모 컴포넌트로 알리기
  };

  return (
    <div className={styles.layout}>
      <div>
        <img src={onboardingImg} alt="onboarding-character" className={styles.imgStyle} />
        <Title text={ONBOARDING_GUIDE.nickName.title} />
        <Docs text={ONBOARDING_GUIDE.nickName.docs} />
      </div>
      <TextField value={value} onChange={onChange} placeholder="닉네임을 입력해주세요." />
    </div>
  );
};

export default NickName;
