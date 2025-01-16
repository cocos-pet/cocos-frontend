import * as styles from "./PetType.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import DualOptionSelector from "../dualOptionSelector/DualOptionSelector";
import { Button } from "@common/component/Button";
import selectImg from "@asset/image/image 1733.png";

const data = {
  animal: [
    {
      id: 1,
      label: "고양이",
      image: selectImg, // import한 이미지 사용 (api -> url string)
    },
    {
      id: 2,
      label: "강아지",
      image: selectImg,
    },
  ],
};

const PetType = () => {
  // 선택 상태 관리 (초기값: null)
  const [selectedPetType, setSelectedPetType] = useState<string | null>(null);

  // 선택한 버튼 텍스트 = selectedPetType
  const handleOptionSelect = (value: string) => {
    setSelectedPetType(value);
  };

  // 뒤로 가기 (조립시 수정 예정)
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  // 다음 버튼 클릭
  const handleNext = () => {
    console.log("조립 시 구현");
  };

  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.layout}>
        <div>
          <Title text={ONBOARDING_GUIDE.petType.title} />
          <Docs text={ONBOARDING_GUIDE.petType.docs} />
        </div>

        {/* 타입 선택 영역 */}
        <DualOptionSelector data={data.animal} onSelect={handleOptionSelect} />
      </div>

      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={!selectedPetType} onClick={handleNext} />
      </div>
    </>
  );
};

export default PetType;
