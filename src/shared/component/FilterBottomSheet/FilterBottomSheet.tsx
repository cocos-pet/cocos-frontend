import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import * as styles from "./FilterBottomSheet.css";
import Tab from "@common/component/Tab/Tab";
import CategoryContent from "./CategoryContent/CategoryContent";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip";
import { CategoryType, SelectedChips, useFilterStore } from "@store/filter";

const categories: { id: CategoryType; label: string }[] = [
  { id: "kind", label: "종류" },
  { id: "symptoms", label: "증상" },
  { id: "disease", label: "질병" },
];

//커뮤니티 게시글 작성, 검색 결과 필터 바텀 시트
const FilterBottomSheet = () => {
  const { category, selectedChips, setCategory, isOpen, setOpen, toggleChips } = useFilterStore();

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
                const categoryData = useFilterStore.getState().categoryData;
                const keyMap: Record<keyof SelectedChips, CategoryType> = {
                  breedId: "kind",
                  diseaseIds: "disease",
                  symptomIds: "symptoms",
                } as const;

                const category = keyMap[key as keyof SelectedChips];

                // 중첩 데이터 탐색
                const getNameById = (id: number, category: CategoryType): string | undefined => {
                  if (category === "kind") {
                    return categoryData.kind.find((item) => item.id === id)?.name;
                  }
                  if (category === "disease") {
                    return categoryData.disease.flatMap((group) => group.diseases).find((item) => item.id === id)?.name;
                  }
                  if (category === "symptoms") {
                    return categoryData.symptoms.flatMap((group) => group.symptoms).find((item) => item.id === id)
                      ?.name;
                  }
                  return undefined;
                };

                const name = getNameById(id, category);

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

export default FilterBottomSheet;
