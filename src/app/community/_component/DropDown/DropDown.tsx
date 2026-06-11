import {container, itemStyle} from "./DropDown.css.ts";
import React from "react";

export interface DropDownItem {
  icon: React.ReactNode;
  label: string;
  value: number;
  english?: string;
};

interface DropDownProps {
  isOpen: boolean;
  items: Array<DropDownItem>;
  onClickItem: (target: string, value: string | number) => void;
  toggleDropDown: () => void;
};

const DropDown = ({ isOpen, items, onClickItem, toggleDropDown }: DropDownProps) => {
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
        <div key={item.value} className={itemStyle} onClick={() => onClick(item.value)}>
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
