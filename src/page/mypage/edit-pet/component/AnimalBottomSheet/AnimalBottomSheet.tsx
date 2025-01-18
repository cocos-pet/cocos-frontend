import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import { CategoryType, useAnimalFilterStore } from "../../store/animalFilter";
import * as styles from "./AnimalBottomSheet.css";
import Tab from "@common/component/Tab/Tab";
import { Button } from "@common/component/Button";
import CategoryContent from "./components/CategoryContent/CategoryContent";

const categories: { id: CategoryType; label: string }[] = [
  { id: "animal", label: "종류" },
  { id: "breeds", label: "세부 종류" },
  { id: "gender", label: "성별" },
];

const AnimalBottomSheet = () => {
  const { category, selectedChips, setCategory, isOpen, setOpen, toggleChips, categoryData } = useAnimalFilterStore();

  const isSelectedCategory = (cate: CategoryType): boolean => {
    return cate === category;
  };

  const handleClickCategory = (cate: CategoryType) => {
    setCategory(cate);
  };

  return (
    <BottomSheet isOpen={isOpen} handleOpen={setOpen}>
      <>
        <div className={styles.categoryZone}>
          {categories.map(({ id, label }) => (
            <Tab key={id} active={isSelectedCategory(id)} onClick={() => handleClickCategory(id)}>
              {label}
            </Tab>
          ))}
        </div>

        <div className={styles.bodyZone}>
          <CategoryContent />
        </div>

        <div className={styles.buttonWrapper}>
          <Button label="확인하기" size="large" width="100%" onClick={() => setOpen(false)} />
        </div>
      </>
    </BottomSheet>
  );
};

export default AnimalBottomSheet;
