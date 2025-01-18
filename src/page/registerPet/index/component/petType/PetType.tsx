import * as styles from "./PetType.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import DualOptionSelector from "../../../../registerPet/index/common/dualOptionSelector/DualOptionSelector";
import { Button } from "@common/component/Button";
import selectImg from "@asset/image/image 1733.png";
import { PetData } from "@page/registerPet/index/RegisterPet";

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

interface PetTypeProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: PetData[keyof PetData]) => void;
}

const PetType = ({ setStep, updatePetData }: PetTypeProps) => {
  // 선택 상태 관리 (초기값: null)
  const [selectedPetType, setSelectedPetType] = useState<string | null>(null);

  // 선택한 버튼 텍스트 = selectedPetType
  const handleOptionSelect = (value: string) => {
    setSelectedPetType(value);
    updatePetData("breedId", value === "고양이" ? 1 : 2); // "고양이"는 1, "강아지"는 2
  };

  // 뒤로 가기 (조립시 수정 예정)
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
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
        <Button
          label="다음"
          size="large"
          variant="solidPrimary"
          disabled={!selectedPetType}
          onClick={() => setStep((prev) => prev + 1)}
        />
      </div>
    </>
  );
};

export default PetType;
