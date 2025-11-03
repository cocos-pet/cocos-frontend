import * as styles from "./PetId.css";
import { ChangeEvent, useState } from "react";
import Docs from "../../../../onboarding/index/common/docs/Docs";
import { TextField } from "@common/component/TextField";
import { Button } from "@common/component/Button";

import { usePetIdGet } from "@api/domain/register-pet/petId/hook";
import { PetData } from "../../RegisterPet.tsx";
import { ONBOARDING_GUIDE } from "../../../../onboarding/index/constant/onboardingGuide.ts";
import Title from "../../../../onboarding/index/common/title/Title.tsx";
import DropDown from "../../common/dropDown/DropDown.tsx";

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

  // api
  const { data } = usePetIdGet(Number(petData.breedId));

  if (!data) return null;

  const getAllItems = (): BreedItem[] => {
    const breeds = data.data?.breeds || []; // undefined이면 빈 배열 반환
    return breeds.filter((breed): breed is BreedItem => breed.id !== undefined && breed.name !== undefined);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // 띄어쓰기 허용
    setInput(value);

    // 필터링할 때만 공백 제거해서 비교
    const valueWithoutSpaces = value.replace(/\s+/g, "");
    const allItems = getAllItems();
    if (valueWithoutSpaces.length > 0) {
      // 입력값과 품종명에서 모든 공백 제거 후 비교
      const filtered = allItems.filter((item) => item.name.replace(/\s+/g, "").includes(valueWithoutSpaces));
      setFilteredItems(filtered);
    } else {
      setFilteredItems(allItems); // 입력값이 없으면 전체 품종 목록
    }
  };

  const handleDropDownClick = (value: string) => {
    // 원본 이름 그대로 input에 저장 (띄어쓰기 포함)
    setInput(value);
    const selectedBreed = filteredItems.find((breed) => breed.name === value);
    if (selectedBreed) {
      updatePetData("breedId", selectedBreed.id);
    }
  };

  // 드롭다운 열림 여부 결정
  const allItems = getAllItems();
  const inputWithoutSpaces = input.replace(/\s+/g, "");
  const isDropDownOpen =
    input.length > 0 &&
    filteredItems.length > 0 &&
    JSON.stringify(filteredItems) !== JSON.stringify(allItems) && // 필터된 품종 목록과 전체 목록이 다르면
    !filteredItems.some((breed) => breed.name.replace(/\s+/g, "") === inputWithoutSpaces); // 입력값이 선택된 품종과 동일하지 않으면

  const isInputValid = filteredItems.some((breed) => breed.name.replace(/\s+/g, "") === inputWithoutSpaces);

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
