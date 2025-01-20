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

// breedItem 타입 정의
interface BreedItem {
  id: number;
  name: string;
}

interface PetIdProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updatePetData: (field: keyof PetData, value: PetData[keyof PetData]) => void;
  petData: PetData;
}

const PetId = ({ setStep, updatePetData, petData }: PetIdProps) => {
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState<BreedItem[]>([]);

  const getAllItems = () => {
    if (petData.breedId === 2) {
      return ANIMAL.data.dogs;
    }
    if (petData.breedId === 1) {
      return ANIMAL.data.cats;
    }
    return [];
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    const allItems = getAllItems();
    if (value.trim().length > 0) {
      const filtered = allItems.filter((item) => item.name.includes(value));
      setFilteredItems(filtered);
    } else {
      setFilteredItems(allItems);
    }
  };

  const handleDropDownClick = (value: string) => {
    setInput(value);
    const selectedBreed = filteredItems.find((breed) => breed.name === value);
    if (selectedBreed) {
      updatePetData("breedId", selectedBreed.id);
    }
  };

  const isDropDownOpen = input.length > 0 && filteredItems.length > 0;
  const isInputValid = filteredItems.some((breed) => breed.name === input);

  const handleGoBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.gap}>
          <Title text={ONBOARDING_GUIDE.petSpecies.title} />
          <Docs text={ONBOARDING_GUIDE.petSpecies.docs} />
        </div>
        <div>
          <TextField value={input} onChange={handleChange} placeholder="종류를 입력해주세요" isDelete={false} />
          <DropDown isOpen={isDropDownOpen} items={filteredItems} onClickItem={handleDropDownClick} />
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" onClick={handleGoBack} />
        <Button
          label="다음"
          size="large"
          variant="solidPrimary"
          disabled={!isInputValid}
          onClick={() => setStep((prev) => prev + 1)}
        />
      </div>
    </>
  );
};

export default PetId;
