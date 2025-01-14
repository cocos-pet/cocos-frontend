import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import * as styles from "./FilterBottomSheet.css";
import Tab from "@common/component/Tab/Tab";
import { useState } from "react";
import CategoryContent from "./CategoryContent/CategoryContent";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip";

interface FilterBottomSheetPropTypes {
  isOpen: boolean;
  handleOpen: () => void;
  onClick?: () => void;
  //children: JSX.Element; //ReactNode는 범위가 너무 넓음
}

export type CategoryType = "kind" | "symptoms" | "disease";

const categories: { id: CategoryType; label: string }[] = [
  { id: "kind", label: "종류" },
  { id: "symptoms", label: "증상" },
  { id: "disease", label: "질병" },
];

//todo: selectedFilters, setSelectedFilters 는 더 상위 요소에서 전달받기
//커뮤니티 게시글 작성, 검색 결과 필터 바텀 시트
const FilterBottomSheet = ({ isOpen, handleOpen }: FilterBottomSheetPropTypes) => {
  const [category, setCategory] = useState<CategoryType>("kind");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const isSelectedCategory = (cate: CategoryType): boolean => {
    return cate === category;
  };

  const handleClickCategory = (cate: CategoryType) => {
    setCategory(cate);
  };

  const setFilters = (filter: string) => {
    setSelectedFilters(
      (prev) =>
        prev.includes(filter)
          ? prev.filter((item) => item !== filter) // 이미 존재하면 삭제
          : [...prev, filter], // 존재하지 않으면 추가
    );
  };

  return (
    <BottomSheet isOpen={isOpen}>
      <>
        {selectedFilters.length ? (
          <div className={styles.selectedZone}>
            {selectedFilters.map((filter) => (
              <Chip key={`filter-${filter}`} label={filter}/>
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
          <CategoryContent category={category} selectedFilters={selectedFilters} setFilter={setFilters} />
        </div>

        <div className={styles.buttonWrapper}>
          <Button label="확인하기" size="large" width="100%" onClick={handleOpen} />
        </div>
      </>
    </BottomSheet>
  );
};

export default FilterBottomSheet;
