import { IcDeleteBlack } from "@asset/svg";
import { DropDownItems } from "../_constant/writeConfig.tsx";
import { DropDownItem } from "@app/community/_component/DropDown/DropDown.tsx";

const emptyIconSpace = (
  <span style={{ display: "inline-block", width: 20, height: 20 }} />
);

export const getDropdownIdtoIcon = (
  categoryId: number | undefined,
  items: DropDownItem[],
) => {
  if (!categoryId) {
    return emptyIconSpace;
  }

  const selectedItem = items.find((item) => categoryId === item.value);
  if (!selectedItem?.icon) return <IcDeleteBlack width={24} />;

  return selectedItem.icon;
};

export const getDropdownIdtoValue = (
  categoryId: number | undefined,
  items: DropDownItem[],
) => {
  const selectedItem = items.find((item) => categoryId === item.value);
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
