import CheckBoxText from "@common/component/CheckBoxText/CheckBoxText";
import { styles } from "./CategoryContent.css";
import DropDownText from "@common/component/DropDownText/DropDownText";
import { useFilterStore } from "@store/filter";

// 선택한 카테고리에 맞게 보여줄 내용들
const CategoryContent = () => {
  const { category, categoryData, selectedChips, toggleChips } = useFilterStore();
  const dropDownData = categoryData[category];

  if (category === "kind") {
    return (
      <div className={styles.kindWrapper}>
        {dropDownData.map((animal) => (
          <CheckBoxText
            key={`kind-${animal.id}`}
            onClick={() => toggleChips(animal.name)}
            isSelected={selectedChips.includes(animal.name)}
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
          <DropDownText key={`symptoms-${symptom.id}`}>{symptom.name}</DropDownText>
        ))}
      </div>
    );
  }

  if (category === "disease") {
    return (
      <div className={styles.symptomsWrapper}>
        {dropDownData.map((disease) => (
          <DropDownText key={`disease-${disease.id}`}>{disease.name}</DropDownText>
        ))}
      </div>
    );
  }

  return <div>Nothing</div>;
};

export default CategoryContent;
