import React from "react";
import { components } from "@type/schema";
import { DropDownItem } from "../_component/DropDown/DropDown";

export const formatCategoriesToDropDownItems = (
  response: components["schemas"]["PostCategoriesResponse"] | undefined,
): DropDownItem[] => {
  const categories = response?.categories ?? [];
  return categories
    .filter((category) => category.id != null && category.name)
    .map((category) => ({
      icon: category.image ? (
        <img src={category.image} alt={category.name} width={20} height={20} />
      ) : null,
      label: category.name!,
      value: category.id!,
    }));
};
