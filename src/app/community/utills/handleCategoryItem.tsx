import {IcDeleteBlack} from "@asset/svg";
import {DropDownItems} from "@page/community/constant/writeConfig.tsx";
import React from "react";

export const getDropdownIdtoIcon = (categoryId: number | undefined) => {
  if (!categoryId) {
    return <IcDeleteBlack width={24} />;
  }

  const selectedItem = DropDownItems.find((item) => categoryId === item.value);
  if (!selectedItem) return <IcDeleteBlack width={24} />;

  return selectedItem.icon;
};

export const getDropdownIdtoValue = (categoryId: number | undefined) => {
  const selectedItem = DropDownItems.find((item) => categoryId === item.value);
  return selectedItem ? selectedItem.label : "";
};

export const getDropdownValuetoIcon = (category: string | undefined) => {
  const selectedItem = DropDownItems.find((item) => category === item.label);
  return selectedItem ? selectedItem.icon : <IcDeleteBlack width={24} />;
};

export const getCategorytoEnglish = (category: string | undefined) => {
  const selectedItem = DropDownItems.find((item) => category === item.label);
  return selectedItem ? selectedItem.english : "";
};

export const getCategorytoId = (category: string | undefined) => {
  const selectedItem = DropDownItems.find((item) => category === item.label);
  return selectedItem ? selectedItem.value : 0;
};
