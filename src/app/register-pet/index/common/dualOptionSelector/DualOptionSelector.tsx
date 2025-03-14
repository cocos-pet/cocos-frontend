import * as styles from "./DualOptionSelector.css";
import {useState} from "react";
import {animalGetResponse} from "@api/domain/register-pet/animal/index";

interface DualOptionSelectorProps {
  data: animalGetResponse["data"];
  onSelect?: (value: string) => void;
}

const DualOptionSelector = ({ data, onSelect }: DualOptionSelectorProps) => {
  // 선택된 옵션 상태
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // 옵션 클릭 시 색상 변경 및 부모로 선택 값 전달
  const handleOptionClick = (id: number | undefined, name: string | undefined) => {
    if (id === undefined || name === undefined) return; // name이 undefined일 경우 아무 작업도 하지 않음
    setSelectedOption(id);
    if (onSelect) {
      onSelect(name);
    }
  };

  return (
    <div className={styles.layout}>
      {data?.animals?.map((item) => (
        <div
          key={item.id}
          className={styles.selector({
            state: selectedOption === item.id ? "selected" : "unselected",
          })}
          onClick={() => handleOptionClick(item.id, item.name)}
        >
          {item.name}
          <img src={item.image} alt={item.name} width={104} height={59} />
        </div>
      ))}
    </div>
  );
};

export default DualOptionSelector;
