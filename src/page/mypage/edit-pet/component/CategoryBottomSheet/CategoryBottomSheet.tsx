import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import { CategoryType, SelectedChips, useCategoryFilterStore } from "../../store/categoryFilter";
import Tab from "@common/component/Tab/Tab";
import * as styles from "./CategoryBottomSheet.css";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip";
import { getSelectedChipNamesById } from "../../utils/getSelectedChipNamesById";
import CategoryContent from "./components/CategoryContent/CategoryContent";

const categories: { id: CategoryType; label: string }[] = [
  { id: "symptoms", label: "증상" },
  { id: "disease", label: "질병" },
];

const CategoryBottomSheet = () => {
  const { category, selectedChips, setCategory, isOpen, setOpen, toggleChips, categoryData } = useCategoryFilterStore();

  const isSelectedCategory = (cate: CategoryType): boolean => {
    return cate === category;
  };

  const handleClickCategory = (cate: CategoryType) => {
    setCategory(cate);
  };

  const isAnyChipSelected = Object.entries(selectedChips).some(([_, ids]) => {
    return (ids as number[]).length > 0;
  });

  return (
    <BottomSheet isOpen={isOpen} handleOpen={setOpen}>
      <>
        {isAnyChipSelected ? (
          <div className={styles.selectedZone}>
            {Object.entries(selectedChips).map(([key, ids]) =>
              (ids as number[]).map((id) => {
                const keyMap: Record<keyof SelectedChips, CategoryType> = {
                  diseaseIds: "disease",
                  symptomIds: "symptoms",
                } as const;

                const category = keyMap[key as keyof SelectedChips];
                const name = getSelectedChipNamesById(id, category, categoryData);

                return (
                  <Chip
                    key={`filter-${key}-${id}`}
                    label={name || "Unknown"}
                    icon={true}
                    onClick={() => toggleChips({ id, category: key as keyof SelectedChips })}
                  />
                );
              }),
            )}
          </div>
        ) : (
          <></>
        )}

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

export default CategoryBottomSheet;
