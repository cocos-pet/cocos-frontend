import { styles } from "@shared/component/FilterBottomSheet/CategoryContent/CategoryContent.css";
import DropDownText from "@common/component/DropDownText/DropDownText";

interface CategoryContentProps {
  category: "symptom" | "disease";
}
const dummyData = {
  symptom: [
    {
      id: 1,
      name: "기침",
      symptoms: [
        { id: 101, name: "마른 기침" },
        { id: 102, name: "가래 기침" },
      ],
    },
    {
      id: 2,
      name: "구토",
      symptoms: [
        { id: 201, name: "구역감" },
        { id: 202, name: "위통" },
      ],
    },
  ],
  disease: [
    {
      id: 1,
      name: "감기",
      diseases: [
        { id: 301, name: "코감기" },
        { id: 302, name: "독감" },
      ],
    },
  ],
};

const CategoryContent = ({ category }: CategoryContentProps) => {
  if (category === "symptom") {
    return (
      <div className={styles.symptomsWrapper}>
        {dummyData.symptom.map((symptom) => (
          <DropDownText key={symptom.id} content={symptom.symptoms} parentKey="symptomIds">
            {symptom.name}
          </DropDownText>
        ))}
      </div>
    );
  }

  if (category === "disease") {
    return (
      <div className={styles.symptomsWrapper}>
        {dummyData.disease.map((disease) => (
          <DropDownText key={disease.id} content={disease.diseases} parentKey="diseaseIds">
            {disease.name}
          </DropDownText>
        ))}
      </div>
    );
  }

  return <div>Nothing</div>;
};

export default CategoryContent;
