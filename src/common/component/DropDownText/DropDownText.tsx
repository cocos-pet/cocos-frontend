import { IcUp } from "@asset/svg";
import * as styles from "./DropDownText.css";
import { useState } from "react";
import { useFilterStore } from "@store/filter";

interface DropDownTextPropTypes {
  children: string; // title
}

const DropDownText = ({ children }: DropDownTextPropTypes) => {
  const { category, categoryData, toggleChips } = useFilterStore();
  const [isOpen, setIsOpen] = useState(false);

  const dropDownData = categoryData[category];
  if (!dropDownData.length) return;

  return (
    <>
      <div className={styles.dropdownTextWrapper}>
        <div className={styles.dropdownText} onClick={() => setIsOpen((prev) => !prev)}>
          <span style={{ width: "100%" }}>{children}</span>
          <IcUp className={styles.rotateIcon({ isOpen })} />
        </div>

        {isOpen && (
          <div className={styles.dropdownContent}>
            {dropDownData.map((data) => (
              //todo: 칩으로 변경, selected 상태일 때 모습도 반영(selectedFilters 이용)
              <span key={`dropDown-${data.id}`} onClick={() => toggleChips(data.name)}>
                {data.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DropDownText;
