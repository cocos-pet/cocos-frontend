import CheckBoxText from "@common/component/CheckBoxText/CheckBoxText";
import { CategoryType } from "../FilterBottomSheet";
import { styles } from "./CategoryContent.css";

interface CategoryContentPropTypes {
  category: CategoryType;
}

const CategoryContent = ({ category }: CategoryContentPropTypes) => {
  if (category === "kind") {
    return (
      <div className={styles.kindWrapper}>{<CheckBoxText onClick={() => console.log("hi")}>하이</CheckBoxText>}</div>
    );
  } else if (category === "symptoms") {
  } else if (category === "disease") {
  }
  return <div>Nothing</div>;
};

export default CategoryContent;
