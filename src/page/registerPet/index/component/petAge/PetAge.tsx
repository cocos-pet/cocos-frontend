import * as styles from "./PetAge.css";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { TextField } from "@common/component/TextField";
import { Button } from "@common/component/Button";
import { PetData } from "@page/registerPet/index/RegisterPet";

interface PetAgeProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: PetData[keyof PetData]) => void;
  onSubmit: () => void; // 'onSubmit'을 props로 추가
}

const PetAge = ({ setStep, updatePetData, onSubmit }: PetAgeProps) => {
  const [petAge, setPetAge] = useState("");

  // 유효성 검사 통과한 반려동물 나이
  const updatePetAge = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setPetAge(value.replace(/[^0-9]/g, "")); // 숫자만 필터링 후 상태 업데이트
  };

  // '다음으로' 버튼 활성화 유무
  const isValid = petAge && petAge.length !== 0;

  const handleNext = () => {
    if (isValid) {
      const age = Number.parseInt(petAge, 10);
      console.log("나이:", age); // 나이가 잘 찍히는지 확인

      updatePetData("age", age); // 부모 상태에 나이 업데이트
      onSubmit(); // 부모로부터 받은 onSubmit 호출
      setStep((prev) => prev + 1); // 다음 단계로 이동
    }
  };

  // 뒤로가기
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

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
              isDelete={false}
            />
          </div>
          <span className={styles.ageFontStyle}>살</span>
        </div>
      </div>
      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button
          label="다음"
          size="large"
          variant="solidPrimary"
          disabled={!isValid}
          onClick={handleNext} // 나이 값이 유효하면 다음 단계로 진행
        />
      </div>
    </>
  );
};

export default PetAge;
