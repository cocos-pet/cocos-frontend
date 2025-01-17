import { container, itemStyle } from "./DropDown.css";
import React from "react";

type DropDownType = {
  isOpen: boolean;
  items: Array<{ icon: React.ReactNode; label: string }>;
  onClickItem: (target: string, value: string) => void;
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
  const onClick = (label: string) => {
    onClickItem("category", label);
    toggleDropDown();
  };

  return (
    <div className={container}>
      {items.map((item, index) => (
        <div
          key={index}
          className={itemStyle}
          onClick={() => onClick(item.label)}
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
