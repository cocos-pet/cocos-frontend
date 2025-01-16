import { container, itemStyle } from "./DropDown.css";
import React from "react";

type DropDownType = {
  isOpen: boolean;
  items: Array<{ icon: React.ReactNode; label: string }>;
  onClickItem: (item: string) => void;
};

const DropDown = ({ isOpen, items, onClickItem }: DropDownType) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={container}>
      {items.map((item, index) => (
        <div
          key={index}
          className={itemStyle}
          onClick={() => onClickItem(item.label)}
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
