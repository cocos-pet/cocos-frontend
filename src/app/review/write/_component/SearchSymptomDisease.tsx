import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import * as styles from "@shared/component/FilterBottomSheet/FilterBottomSheet.css";
import Tab from "@common/component/Tab/Tab";
import { Button } from "@common/component/Button";
import { useState } from "react";

type CategoryType = "symptom" | "disease";

interface SearchSymptomDiseaseProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const categories: { id: CategoryType; label: string }[] = [
  { id: "symptom", label: "증상 선택하기" },
  { id: "disease", label: "진단 선택하기" },
];

const SearchSymptomDisease = ({ isOpen, onClose, onSubmit }: SearchSymptomDiseaseProps) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("symptom");

  return (
    <BottomSheet isOpen={isOpen} handleOpen={() => {}} handleDimmedClose={onClose}>
      <>
        {/* 카테고리 탭 */}
        <div className={styles.categoryZone}>
          {categories.map(({ id, label }) => (
            <Tab key={id} active={selectedCategory === id} onClick={() => setSelectedCategory(id)}>
              {label}
            </Tab>
          ))}
        </div>

        {/* 탭별 컨텐츠 */}
        <div className={styles.bodyZone}>
          {selectedCategory === "symptom" && <p>첫번째 카테고리 내용</p>}
          {selectedCategory === "disease" && <p>두번째 카테고리 내용</p>}
        </div>

        {/* 확인 버튼 */}
        <div className={styles.buttonWrapper}>
          <Button
            label="확인하기"
            size="large"
            width="100%"
            onClick={() => {
              onClose();
              onSubmit();
            }}
          />
        </div>
      </>
    </BottomSheet>
  );
};

export default SearchSymptomDisease;
