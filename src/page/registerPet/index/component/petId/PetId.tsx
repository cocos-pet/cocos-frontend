import * as styles from "./PetId.css";
import { useState, ChangeEvent } from "react";
import { ONBOARDING_GUIDE } from "@page/onboarding/index/constant/onboardingGuide";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "../../../../onboarding/index/common/docs/Docs";
import { TextField } from "@common/component/TextField";
import { Button } from "@common/component/Button";
import { ANIMAL } from "@page/registerPet/index/common/dropDown/constant";
import DropDown from "@page/registerPet/index/common/dropDown/DropDown";
import { PetData } from "@page/registerPet/index/RegisterPet";

interface PetIdProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: PetData[keyof PetData]) => void;
}

const PetId = ({ setStep, updatePetData }: PetIdProps) => {
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(ANIMAL.data.breeds);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    setInput(inputValue);

    const filtered = inputValue
      ? ANIMAL.data.breeds.filter((item) => item.name.includes(inputValue))
      : ANIMAL.data.breeds;

    setFilteredItems(filtered);
  };

  const isDropDownOpen = input.length > 0 && filteredItems.length > 0;

  const handleDropDownClick = (value: string) => {
    setInput(value);
    // 품종 선택 후 breedId 업데이트
    const selectedBreed = ANIMAL.data.breeds.find((breed) => breed.name === value);
    if (selectedBreed) {
      updatePetData("breedId", selectedBreed.id); // breedId 업데이트
    }
  };

  // 뒤로 가기
  const handleGoBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  // 상태 input이 ANIMAL 객체의 name 중 하나와 일치하는지 확인
  const isInputValid = ANIMAL.data.breeds.some((breed) => breed.name === input);

  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.layout}>
        <div className={styles.gap}>
          <Title text={ONBOARDING_GUIDE.petSpecies.title} />
          <Docs text={ONBOARDING_GUIDE.petSpecies.docs} />
        </div>
        {/* 종류 탐색 영역 */}
        <div>
          {/* 종류 탐색 입력 */}
          <TextField value={input} onChange={handleChange} placeholder="종류를 입력해주세요" isDelete={false} />
          <DropDown isOpen={isDropDownOpen} items={filteredItems} onClickItem={handleDropDownClick} />
        </div>
      </div>
      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button
          label="다음"
          size="large"
          variant="solidPrimary"
          disabled={!isInputValid}
          onClick={() => setStep((prev) => prev + 1)} // 다음 단계로 이동
        />
      </div>
    </>
  );
};

export default PetId;
