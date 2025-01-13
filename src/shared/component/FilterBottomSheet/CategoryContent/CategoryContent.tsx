import CheckBoxText from "@common/component/CheckBoxText/CheckBoxText";
import { CategoryType } from "../FilterBottomSheet";
import { styles } from "./CategoryContent.css";

interface CategoryContentPropTypes {
  category: CategoryType;
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

const categories: { id: CategoryType; label: string }[] = [
  { id: "kind", label: "종류" },
  { id: "symptoms", label: "증상" },
  { id: "disease", label: "질병" },
];

// 선택한 카테고리에 맞게 보여줄 내용들
const CategoryContent = ({ category }: CategoryContentPropTypes) => {
  if (category === "kind") {
    return (
      <div className={styles.kindWrapper}>
        {CATEGORY_KIND.map((animal) => (
          <CheckBoxText key={`kind-${animal.id}`} onClick={() => console.log(`${animal.name} 선택됨`)}>
            {animal.name}
          </CheckBoxText>
        ))}
      </div>
    );
  } else if (category === "symptoms") {
    
  } else if (category === "disease") {
    return <div>질병을 선택하세요</div>;
  }

  return <div>Nothing</div>;
};

export default CategoryContent;
