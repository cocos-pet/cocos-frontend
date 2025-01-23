import { container, itemStyle } from "./DropDown.css";
import React from "react";

type DropDownType = {
  isOpen: boolean;
  items: Array<{ icon: React.ReactNode; label: string; value: number }>;
  onClickItem: (target: string, value: number) => void;
  toggleDropDown: () => void;
};

const DropDown = ({
  isOpen,
  items,
  onClickItem,
  toggleDropDown,
}: DropDownType) => {
  if (!isOpen) {
    return;
  }
  const onClick = (value: number) => {
    onClickItem("categoryId", value);
    toggleDropDown();
  };

  return (
    <div className={container}>
      {items.map((item, index) => (
        <div
          key={index}
          className={itemStyle}
          onClick={() => onClick(item.value)}
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
