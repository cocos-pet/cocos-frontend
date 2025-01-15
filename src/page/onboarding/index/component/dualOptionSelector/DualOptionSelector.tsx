import * as styles from "./DualOptionSelector.css";
import { useState } from "react";
import selectImg from "@asset/image/image 1733.png";

interface DualOptionSelectorProps {
  leftLabel: string;
  rightLabel: string;
  onSelect?: (value: string) => void; // 부모 컴포넌트가 뭘 선택해야하는지 알아야 하니까
}

const DualOptionSelector = ({ leftLabel, rightLabel, onSelect }: DualOptionSelectorProps) => {
  // 선택된 옵션 상태
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // 옵션 클릭 시 색상 변경 및 하단 버튼 활성화 (활성화는 합칠 때 구현)
  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className={styles.layout}>
      {/* 왼쪽 선택지 */}
      <div
        className={styles.selector({ state: selectedOption === leftLabel ? "selected" : "unselected" })}
        onClick={() => handleOptionClick(leftLabel)}
      >
        {leftLabel}
        <img src={selectImg} alt="onboarding-character" />
      </div>
      {/* 오른쪽 선택지 */}
      <div
        className={styles.selector({ state: selectedOption === rightLabel ? "selected" : "unselected" })}
        onClick={() => handleOptionClick(rightLabel)}
      >
        {rightLabel}
        <img src={selectImg} alt="onboarding-character" />
      </div>
    </div>
  );
};

export default DualOptionSelector;
