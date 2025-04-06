import * as styles from "./PetType.css";
import {useState} from "react";

import {Button} from "@common/component/Button";
import {useAnimalGet} from "@api/domain/register-pet/animal/hook";
import {PetData} from "../../RegisterPet.tsx";
import {ONBOARDING_GUIDE} from "../../../../onboarding/index/constant/onboardingGuide.ts";
import Title from "../../../../onboarding/index/common/title/Title.tsx";
import Docs from "../../../../onboarding/index/common/docs/Docs.tsx";
import DualOptionSelector from "../../common/dualOptionSelector/DualOptionSelector.tsx";

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

  const handleGoBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const { data, isLoading } = useAnimalGet();

  if (isLoading || !data) return null;

  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.layout}>
        <div className={styles.gap}>
          <Title text={ONBOARDING_GUIDE.petType.title} />
          <Docs text={ONBOARDING_GUIDE.petType.docs} />
        </div>

        {/* 타입 선택 영역 */}
        <DualOptionSelector data={data} onSelect={handleOptionSelect} />
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
