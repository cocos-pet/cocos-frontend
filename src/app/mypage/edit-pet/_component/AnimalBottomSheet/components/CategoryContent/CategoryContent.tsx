import CheckBoxText from "src/design-system/CheckBoxText/CheckBoxText.tsx";
import { styles } from "./CategoryContent.css";
import { useEffect, useRef, useState } from "react";
import { TextField } from "@common/component/TextField";
import {
  CategoryAnimal,
  CategoryBreed,
  CategoryGender,
  SelectedChips,
  useAnimalFilterStore,
} from "../../../../_store/animalFilter.ts";

const CategoryContent = () => {
  const { category, categoryData, selectedChips, toggleChips } =
    useAnimalFilterStore();
  const [searchString, setSearchString] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(selectedChips); // TODO: 나중에 데모데이 직전에 제거
  }, [selectedChips]);

  // 현재 카테고리에 따라 데이터를 가져옴
  const dropDownData = categoryData[category];

  // 선택 여부 확인 함수
  const isSelected = (
    key: keyof SelectedChips,
    id: number | "M" | "F"
  ): boolean => {
    return selectedChips[key] === id;
  };

  // 선택 토글 함수
  const handleToggle = (key: keyof SelectedChips, id: number | "M" | "F") => {
    toggleChips({ category: key, id });
  };

  return (
    <>
      {category === "breeds" && (
        <span
          style={{
            width: "calc(100% - 4rem)",
            position: "absolute",
            top: "1.2rem",
          }}
        >
          <TextField
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            onClearClick={() => setSearchString("")}
            ref={ref}
          />
        </span>
      )}

      <div className={styles.kindWrapper({ isBreed: category === "breeds" })}>
        {/* 현재 카테고리에 따라 적절한 UI 렌더링 */}
        {category === "animal" &&
          (dropDownData as CategoryAnimal).map((animal) => (
            <CheckBoxText
              key={`${category}-${animal.id}`}
              onClick={() => handleToggle("animalId", animal.id as number)}
              isSelected={isSelected("animalId", animal.id as number)}
            >
              {animal.name as string}
            </CheckBoxText>
          ))}

        {category === "breeds" &&
          (dropDownData as CategoryBreed)
            .filter((breed) =>
              breed.name.toLowerCase().includes(searchString.toLowerCase())
            ) // 필터링
            .map((breed) => (
              <CheckBoxText
                key={`${category}-${breed.id}`}
                onClick={() => handleToggle("breedId", breed.id)}
                isSelected={isSelected("breedId", breed.id)}
              >
                {breed.name}
              </CheckBoxText>
            ))}

        {category === "gender" &&
          (dropDownData as CategoryGender).map((gender) => (
            <CheckBoxText
              key={`${category}-${gender.gender}`}
              onClick={() => handleToggle("gender", gender.gender)}
              isSelected={isSelected("gender", gender.gender)}
            >
              {gender.value}
            </CheckBoxText>
          ))}
      </div>
    </>
  );
};

export default CategoryContent;
