import CheckBoxText from "@common/component/CheckBoxText/CheckBoxText";
import { styles } from "./CategoryContent.css";
import { useEffect } from "react";
import {
  SelectedChips,
  useAnimalFilterStore,
  CategoryAnimal,
  CategoryBreed,
  CategoryGender,
} from "@page/mypage/edit-pet/store/animalFilter";

const CategoryContent = () => {
  const { category, categoryData, selectedChips, toggleChips } = useAnimalFilterStore();

  useEffect(() => {
    console.log(selectedChips); // TODO: 나중에 데모데이 직전에 제거
  }, [selectedChips]);

  // 현재 카테고리에 따라 데이터를 가져옴
  const dropDownData = categoryData[category];

  // 선택 여부 확인 함수
  const isSelected = (key: keyof SelectedChips, id: number | "M" | "F"): boolean => {
    return selectedChips[key] === id;
  };

  // 선택 토글 함수
  const handleToggle = (key: keyof SelectedChips, id: number | "M" | "F") => {
    toggleChips({ category: key, id });
  };

  return (
    <div className={styles.kindWrapper}>
      {/* 현재 카테고리에 따라 적절한 UI 렌더링 */}
      {category === "animal" &&
        (dropDownData as CategoryAnimal).map((animal) => (
          <CheckBoxText
            key={`${category}-${animal.id}`}
            onClick={() => handleToggle("animalId", animal.id)}
            isSelected={isSelected("animalId", animal.id)}
          >
            {animal.name}
          </CheckBoxText>
        ))}

      {category === "breeds" &&
        (dropDownData as CategoryBreed).map((breed) => (
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
  );
};

export default CategoryContent;
