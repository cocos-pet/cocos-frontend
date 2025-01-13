import { IcUp } from "@asset/svg";
import * as styles from "./DropDownText.css";
import { useState } from "react";

interface DropDownTextPropTypes {
  children: string; // title
  dropDownData: { id: number; name: string }[];
  selectedFilters?: string[];
  setFilter?: (filter: string) => void;
}

const DropDownText = ({ children, dropDownData, selectedFilters, setFilter }: DropDownTextPropTypes) => {
  if (!dropDownData.length || !setFilter) return;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.dropdownTextWrapper}>
        <div className={styles.dropdownText} onClick={() => setIsOpen((prev) => !prev)}>
          <span style={{ width: "100%" }}>{children}</span>
          <IcUp className={styles.rotateIcon({ isOpen: isOpen })} />
        </div>

        {isOpen && (
          <div className={styles.dropdownContent}>
            {dropDownData.map((data) => (
              //todo: 칩으로 변경, selected 상태일 때 모습도 반영(selectedFilters 이용)
              <span key={`dropDown-${data.id}`} onClick={() => setFilter(data.name)}>
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
