import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import * as styles from "./FilterBottomSheet.css";
import Tab from "@common/component/Tab/Tab";
import CategoryContent from "./CategoryContent/CategoryContent";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip";
import { CategoryType, useFilterStore } from "@store/filter";

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

  return (
    <BottomSheet isOpen={isOpen} handleOpen={setOpen}>
      <>
        {selectedChips.length ? (
          <div className={styles.selectedZone}>
            {selectedChips.map((filter) => (
              <Chip key={`filter-${filter}`} label={filter} icon={true} onClick={() => toggleChips(filter)} />
            ))}
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
