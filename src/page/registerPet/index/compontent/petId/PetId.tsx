import * as styles from "./PetId.css";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "../../../../onboarding/index/common/docs/Docs";
import { TextField } from "@common/component/TextField";
import { IcRightIcon } from "@asset/svg";
import { Button } from "@common/component/Button";

const PetId = () => {
  const [petId, setPetId] = useState("");

  // 펫 종류 탐색 입력 처리
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPetId(e.target.value);
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
        <div className={styles.gap}>
          <Title text={ONBOARDING_GUIDE.petSpecies.title} />
          <Docs text={ONBOARDING_GUIDE.petSpecies.docs} />
        </div>
        {/* 종류 탐색 영역 */}
        <TextField
          value={petId}
          onChange={handleChange}
          placeholder="종류를 입력해주세요"
          icon={<IcRightIcon width={"2rem"} height={"2rem"} />}
        />
      </div>
      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={false} onClick={handleNext} />
      </div>
    </>
  );
};

export default PetId;
