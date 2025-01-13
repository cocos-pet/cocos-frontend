import CheckBoxText from "@common/component/CheckBoxText/CheckBoxText";
import { CategoryType } from "../FilterBottomSheet";
import { styles } from "./CategoryContent.css";
import DropDownText from "@common/component/DropDownText/DropDownText";

//todo: 전역상태로 관리해서 좀 더 깔끔하게 코드 리팩토링
interface CategoryContentPropTypes {
  category: CategoryType;
  selectedFilters: string[];
  setFilter: (filter: string) => void; //데이터 세팅을 위한 함수를 넘기기
}

// todo: api 요청으로 받아와서 인자로 넣도록 수정
const CATEGORY_KIND = [
  { id: 1, name: "강아지" },
  { id: 2, name: "고양이" },
];

const CATEGORY_SYMPTOM = [
  {
    id: 1,
    name: "눈",
    symptoms: [
      { id: 1, name: "눈이 아파요" },
      {
        id: 2,
        name: "눈이 시려요",
      },
      {
        id: 3,
        name: "눈이 시려요",
      },
      {
        id: 4,
        name: "눈이 시려요",
      },
      {
        id: 5,
        name: "눈이 시려요",
      },
      {
        id: 6,
        name: "눈이 시려요",
      },
      {
        id: 7,
        name: "눈이 실실요",
      },
      {
        id: 8,
        name: "눈이 하하요",
      },
    ],
  },
  {
    id: 2,
    name: "코",
    symptoms: [
      {
        id: 1,
        name: "코가 아파요",
      },
      {
        id: 2,
        name: "코가 시려요",
      },
    ],
  },
];

const CATEGORY_DISEASE = [
  {
    id: 1,
    name: "눈",
    diseases: [
      {
        id: 1,
        name: "눈이 아파요",
      },
      {
        id: 2,
        name: "눈이 시려요",
      },
    ],
  },
  {
    id: 2,
    name: "코",
    diseases: [
      {
        id: 1,
        name: "코가 아파요",
      },
      {
        id: 2,
        name: "코가 시려요",
      },
    ],
  },
];

const categories: { id: CategoryType; label: string }[] = [
  { id: "kind", label: "종류" },
  { id: "symptoms", label: "증상" },
  { id: "disease", label: "질병" },
];

// 선택한 카테고리에 맞게 보여줄 내용들
const CategoryContent = ({ category, selectedFilters, setFilter }: CategoryContentPropTypes) => {
  if (category === "kind") {
    return (
      <div className={styles.kindWrapper}>
        {CATEGORY_KIND.map((animal) => (
          <CheckBoxText
            key={`kind-${animal.id}`}
            onClick={() => setFilter(animal.name)}
            isSelected={selectedFilters.includes(animal.name)}
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
        {CATEGORY_SYMPTOM.map((symptom) => (
          <DropDownText
            key={`symptoms-${symptom.id}`}
            dropDownData={symptom.symptoms}
            selectedFilters={selectedFilters}
            setFilter={setFilter}
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
        {CATEGORY_DISEASE.map((disease) => (
          <DropDownText
            key={`disease-${disease.id}`}
            dropDownData={disease.diseases}
            selectedFilters={selectedFilters}
            setFilter={setFilter}
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
