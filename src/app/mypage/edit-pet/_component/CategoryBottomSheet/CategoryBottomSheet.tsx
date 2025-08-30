import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import { CategoryType, SelectedChips, useCategoryFilterStore } from "../../_store/categoryFilter";
import Tab from "src/design-system/Tab/Tab";
import * as styles from "./CategoryBottomSheet.css";
import { Button } from "@design-system/Button";
import Chip from "../../../../../design-system/Chip/Chip";
import { getSelectedChipNamesById } from "../../_utils/getSelectedChipNamesById";
import CategoryContent from "./components/CategoryContent/CategoryContent";
import { usePatchPetInfo } from "@api/domain/mypage/edit-pet/hook";

const categories: { id: CategoryType; label: string }[] = [
  { id: "symptoms", label: "증상" },
  { id: "disease", label: "질병" },
];

const CategoryBottomSheet = ({ petId }: { petId: number }) => {
  const { category, selectedChips, setCategory, isOpen, setOpen, toggleChips, categoryData } = useCategoryFilterStore();
  const { mutate: patchPetInfo } = usePatchPetInfo();

  const handleClickButton = () => {
    if (selectedChips.diseaseIds && selectedChips.symptomIds) {
      if (!selectedChips.symptomIds.length) {
        alert("증상은 최소 1개 이상 존재해야합니다.");
        return;
      }
      patchPetInfo({
        petId,
        reqBody: {
          diseaseIds: selectedChips.diseaseIds,
          symptomIds: selectedChips.symptomIds,
        },
      });
      setOpen(false);
    } else {
      alert("에러 발생");
    }
  };

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
          <Button label="수정하기" size="large" style={{ width: "100%" }} onClick={handleClickButton} />
        </div>
      </>
    </BottomSheet>
  );
};

export default CategoryBottomSheet;
