import { IcUp } from "@asset/svg";
import * as styles from "./DropDownText.css";
import { useState } from "react";
import Chip from "@common/component/Chip/Chip";
import {
  DiseaseItem,
  SelectedChips,
  SymptomItem,
  useCategoryFilterStore,
} from "@page/mypage/edit-pet/store/categoryFilter";

interface DropDownTextPropTypes {
  children: string; // title
  content: SymptomItem["symptoms"] | DiseaseItem["diseases"];
  parentKey: keyof SelectedChips; // 선택된 필터 키
}

//참고) content는 depth가 깊은 symptoms나 disease에 대응하기 위해 만들어둠
const DropDownText = ({ children, content, parentKey }: DropDownTextPropTypes) => {
  const { toggleChips, selectedChips } = useCategoryFilterStore();
  const [isOpen, setIsOpen] = useState(false);

  const isSelected = (id: number): boolean => {
    return selectedChips[parentKey]?.includes(id) ?? false;
  };

  const renderDropDownData = () => {
    if (content) {
      return content.map((data) => (
        <Chip
          key={`dropDown-${data.id}`}
          label={data.name}
          onClick={() => toggleChips({ category: parentKey, id: data.id })}
          isSelected={isSelected(data.id)}
        />
      ));
    }
  };

  if (!content) return;
  return (
    <>
      <div className={styles.dropdownTextWrapper}>
        <div className={styles.dropdownText} onClick={() => setIsOpen((prev) => !prev)}>
          <span style={{ width: "100%" }}>{children}</span>
          <IcUp className={styles.rotateIcon({ isOpen })} />
        </div>

        {isOpen && <div className={styles.dropdownContent}>{renderDropDownData()}</div>}
      </div>
    </>
  );
};

export default DropDownText;
