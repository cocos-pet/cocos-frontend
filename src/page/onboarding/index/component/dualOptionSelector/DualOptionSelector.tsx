import * as styles from "./DualOptionSelector.css";
import { useState } from "react";

interface AnimalData {
  id: number;
  label: string;
  image: string;
}

interface DualOptionSelectorProps {
  data: AnimalData[];
  onSelect?: (value: string) => void;
}

const DualOptionSelector = ({ data, onSelect }: DualOptionSelectorProps) => {
  // 선택된 옵션 상태
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // 옵션 클릭 시 색상 변경 및 부모로 선택 값 전달
  const handleOptionClick = (id: number, name: string) => {
    setSelectedOption(id);
    if (onSelect) {
      onSelect(name);
    }
  };

  return (
    <div className={styles.layout}>
      {data.map((item) => (
        <div
          key={item.id}
          className={styles.selector({
            state: selectedOption === item.id ? "selected" : "unselected",
          })}
          onClick={() => handleOptionClick(item.id, item.label)}
        >
          {item.label}
          <img src={item.image} alt={item.label} />
        </div>
      ))}
    </div>
  );
};

export default DualOptionSelector;
