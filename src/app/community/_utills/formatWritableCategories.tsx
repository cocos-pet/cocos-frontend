import React from "react";
import { components } from "@type/schema";
import { DropDownItem } from "../_component/DropDown/DropDown";
import { DropDownItems } from "../_constant/writeConfig.tsx";

type PostCategoryType = components["schemas"]["PostCategoriesResponse"];

const getCategoryEnglish = (name: string) => {
  return DropDownItems.find((item) => item.label === name)?.english;
};

export const formatCategoriesToDropDownItems = (
  response: PostCategoryType | undefined,
): DropDownItem[] => {
  const categories = response?.categories ?? [];
  return categories
    .filter((category) => category.id != null && category.name)
    .map((category) => ({
      icon: category.image ? (
        <img src={category.image} alt={category.name} width={20} height={20} />
      ) : null,
      label: category.name ?? "",
      value: category.id ?? 0,
      english: getCategoryEnglish(category.name ?? ""),
    }));
};
