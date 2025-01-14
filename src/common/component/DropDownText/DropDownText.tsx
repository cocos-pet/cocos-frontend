import { IcUp } from "@asset/svg";
import * as styles from "./DropDownText.css";
import { useState } from "react";
import { DiseaseItem, SymptomItem, useFilterStore } from "@store/filter";
import Chip from "@common/component/Chip/Chip";

interface DropDownTextPropTypes {
  children: string; // title
  content: SymptomItem["symptoms"] | DiseaseItem["diseases"];
}

//참고) content는 depth가 깊은 symptoms나 disease에 대응하기 위해 만들어둠
const DropDownText = ({ children, content }: DropDownTextPropTypes) => {
  const { toggleChips, selectedChips } = useFilterStore();
  const [isOpen, setIsOpen] = useState(false);

  const renderDropDownData = () => {
    if (content) {
      return content.map((data) => (
        //todo: 칩으로 변경, selected 상태일 때 모습도 반영(selectedFilters 이용)
        <Chip
          key={`dropDown-${data.id}`}
          label={data.name}
          onClick={() => toggleChips(data.name)}
          isSelected={selectedChips.includes(data.name)}
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
