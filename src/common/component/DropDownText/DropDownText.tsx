import { IcUp } from "@asset/svg";
import * as styles from "./DropDownText.css";
import { useState } from "react";
import { SymptomItem, useFilterStore } from "@store/filter";

interface DropDownTextPropTypes {
  children: string; // title
  content?: SymptomItem["symptoms"]; // symptom.symptoms의 타입
}

//참고) content는 depth가 깊은 symptoms나 disease에 대응하기 위해 만들어둠
const DropDownText = ({ children, content }: DropDownTextPropTypes) => {
  const { category, toggleChips, categoryData } = useFilterStore();
  const [isOpen, setIsOpen] = useState(false);

  const dropDownData = categoryData[category];

  console.log(dropDownData);

  const renderDropDownData = () => {
    if (content) {
      return content.map((data) => (
        //todo: 칩으로 변경, selected 상태일 때 모습도 반영(selectedFilters 이용)
        <span key={`dropDown-${data.id}`} onClick={() => toggleChips(data.name)}>
          {data.name}
        </span>
      ));
    }
    return dropDownData.map((data) => (
      //todo: 칩으로 변경, selected 상태일 때 모습도 반영(selectedFilters 이용)
      <span key={`dropDown-${data.id}`} onClick={() => toggleChips(data.name)}>
        {data.name}
      </span>
    ));
  };

  if (!dropDownData) return;
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
