import CheckBoxText from "@common/component/CheckBoxText/CheckBoxText";
import { styles } from "./CategoryContent.css";
import DropDownText from "@common/component/DropDownText/DropDownText";
import { DiseaseItem, SelectedChips, SymptomItem, useFilterStore } from "@store/filter";
import { useEffect } from "react";

// 선택한 카테고리에 맞게 보여줄 내용들
const CategoryContent = () => {
  const { category, categoryData, selectedChips, toggleChips } = useFilterStore();

  useEffect(() => {
    console.log(selectedChips); //todo: 나중에 지울 것 ! (데모데이 직전에)
  }, [selectedChips]);

  const dropDownData = categoryData[category];

  const isSelected = (key: keyof SelectedChips, id: number): boolean => {
    return selectedChips[key]?.includes(id) ?? false;
  };

  const handleToggle = (key: keyof SelectedChips, id: number) => {
    toggleChips({ category: key, id });
  };

  if (category === "kind") {
    return (
      <div className={styles.kindWrapper}>
        {dropDownData.map((animal) => (
          <CheckBoxText
            key={`kind-${animal.id}`}
            onClick={() => handleToggle("breedId", animal.id)}
            isSelected={isSelected("breedId", animal.id)}
          >
            {animal.name}
          </CheckBoxText>
        ))}
      </div>
    );
  }

  if (category === "symptoms") {
    return (
      <div className={styles.symptomsWrapper}>
        {dropDownData.map((symptom) => (
          <DropDownText
            key={`symptoms-${symptom.id}`}
            content={(symptom as SymptomItem).symptoms}
            parentKey="symptomIds"
          >
            {symptom.name}
          </DropDownText>
        ))}
      </div>
    );
  }

  if (category === "disease") {
    return (
      <div className={styles.symptomsWrapper}>
        {dropDownData.map((disease) => (
          <DropDownText
            key={`disease-${disease.id}`}
            content={(disease as DiseaseItem).diseases}
            parentKey="diseaseIds"
          >
            {disease.name}
          </DropDownText>
        ))}
      </div>
    );
  }

  return <div>Nothing</div>;
};

export default CategoryContent;
