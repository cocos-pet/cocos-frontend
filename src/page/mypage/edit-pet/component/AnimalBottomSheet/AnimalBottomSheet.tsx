import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import { CategoryType, useAnimalFilterStore } from "../../store/animalFilter";
import * as styles from "./AnimalBottomSheet.css";
import Tab from "@common/component/Tab/Tab";
import { Button } from "@common/component/Button";
import CategoryContent from "./components/CategoryContent/CategoryContent";
import { usePatchPetInfo } from "@api/domain/mypage/edit-pet/hook";

const categories: { id: CategoryType; label: string }[] = [
  { id: "animal", label: "종류" },
  { id: "breeds", label: "세부 종류" },
  { id: "gender", label: "성별" },
];

const AnimalBottomSheet = ({petId} : {petId: number}) => {
  const { category, selectedChips, setCategory, isOpen, setOpen, toggleChips, categoryData } = useAnimalFilterStore();
  const { mutate: patchPetInfo } = usePatchPetInfo();

  const handleClickButton = () => {
    if (selectedChips.breedId && selectedChips.gender && selectedChips.animalId) {
      patchPetInfo({ petId, reqBody: { breedId: selectedChips.breedId, gender: selectedChips.gender } });
      setOpen(false);
    } else {
      //만약 animalId가 없다면
      if (!selectedChips.animalId) alert("종류를 정해주세요.");
      else if (!selectedChips.breedId) alert("세부 종류를 정해주세요.");
    }
  };

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
          <Button label="수정하기" size="large" width="100%" onClick={handleClickButton} />
        </div>
      </>
    </BottomSheet>
  );
};

export default AnimalBottomSheet;
