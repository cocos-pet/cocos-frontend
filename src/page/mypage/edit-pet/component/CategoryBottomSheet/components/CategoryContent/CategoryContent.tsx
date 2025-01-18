import { styles } from "./CategoryContent.css";
import { useEffect } from "react";
import { DiseaseItem, SymptomItem, useCategoryFilterStore } from "@page/mypage/edit-pet/store/categoryFilter";
import DropDownText from "../DropDownText/DropDownText";

// 선택한 카테고리에 맞게 보여줄 내용들
const CategoryContent = () => {
  const { category, categoryData, selectedChips } = useCategoryFilterStore();

  useEffect(() => {
    console.log(selectedChips); //todo: 나중에 지울 것 ! (데모데이 직전에)
  }, [selectedChips]);

  const dropDownData = categoryData[category];

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
