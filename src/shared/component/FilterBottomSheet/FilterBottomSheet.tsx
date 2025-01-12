import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import * as styles from "./FilterBottomSheet.css";
import Tab from "@common/component/Tab/Tab";
import { useState } from "react";

interface FilterBottomSheetPropTypes {
  isOpen: boolean;
  onClick?: () => void;
  //children: JSX.Element; //ReactNode는 범위가 너무 넓음
}

type CategoryType = "kind" | "symptoms" | "disease";

const categories: { id: CategoryType; label: string }[] = [
  { id: "kind", label: "종류" },
  { id: "symptoms", label: "증상" },
  { id: "disease", label: "질병" },
];

//커뮤니티 게시글 작성, 검색 결과 필터 바텀 시트
const FilterBottomSheet = ({ isOpen }: FilterBottomSheetPropTypes) => {
  const [category, setCategory] = useState<CategoryType>("kind");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const isSelectedCategory = (cate: CategoryType): boolean => {
    return cate === category;
  };

  const handleClickCategory = (cate: CategoryType) => {
    setCategory(cate);
  };

  return (
    <BottomSheet isOpen={isOpen}>
      <>
        {selectedFilters.length ? (
          <div className={styles.selectedZone}>
            <div>칩 요소</div>
            <div>칩 요소</div>
            <div>칩 요소</div>
            <div>칩 요소</div>
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

        <div className={styles.bodyZone}>바디 내용 써넣기~</div>
      </>
    </BottomSheet>
  );
};

export default FilterBottomSheet;
