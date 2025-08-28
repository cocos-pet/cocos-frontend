import * as styles from "./DualOptionSelector.css";
import { useState } from "react";
import { animalGetResponse } from "@api/domain/register-pet/animal/index";
import Image, { StaticImageData } from "next/image";
import LazyImage from "@common/component/LazyImage";

interface DualOptionSelectorProps {
  data: {
    animals?: {
      id?: number;
      name?: string;
      image?: string | StaticImageData;
    }[];
  };
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
          {item.image && <LazyImage src={item.image} alt={item.name || ""} width="10.4rem" height="5.9rem" />}
        </div>
      ))}
    </div>
  );
};

export default DualOptionSelector;
