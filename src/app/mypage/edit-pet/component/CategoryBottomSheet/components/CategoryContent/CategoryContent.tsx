import { styles } from "./CategoryContent.css";
import DropDownText from "../DropDownText/DropDownText";
import { useCategoryFilterStore } from "../../../../store/categoryFilter.ts";
import { DiseaseItem, SymptomItem } from "@store/filter.ts";

// 선택한 카테고리에 맞게 보여줄 내용들
const CategoryContent = () => {
  const { category, categoryData, selectedChips } = useCategoryFilterStore();

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
            {symptom.name as string}
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
            {disease.name as string}
          </DropDownText>
        ))}
      </div>
    );
  }

  return <div>Nothing</div>;
};

export default CategoryContent;
