import * as styles from "./DualOptionSelector.css";
import { selector } from "./DualOptionSelector.css";
import { useState } from "react";
import selectImg from "@asset/image/image 1733.png";

const DualOptionSelector = () => {
  // 선택된 옵션을 추적하는 상태
  const [selectedOption, setSelectedOption] = useState<"female" | "male" | null>(null);

  // 항목 클릭 시 처리 함수
  const handleOptionClick = (option: "female" | "male") => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.layout}>
      <div
        className={selector({ state: selectedOption === "female" ? "selected" : "unselected" })}
        onClick={() => handleOptionClick("female")}
      >
        암컷
        <img src={selectImg} alt="onboarding-character" />
      </div>
      <div
        className={selector({ state: selectedOption === "male" ? "selected" : "unselected" })}
        onClick={() => handleOptionClick("male")}
      >
        수컷
        <img src={selectImg} alt="onboarding-character" />
      </div>
    </div>
  );
};

export default DualOptionSelector;
