import React from "react";
import { components } from "@type/schema";

type PostCategory = components["schemas"]["PostCategoryResponse"];

export type DropDownItem = {
  icon: React.ReactNode;
  label: string;
  value: number;
  english: string;
};

const CATEGORY_NAME_TO_ENGLISH: Record<string, string> = {
  "증상·질병": "symptom",
  병원고민: "hospital",
  "일상·치유": "healing",
  코코스매거진: "magazine",
};

export const getCategoryEnglishByName = (name: string) => {
  return CATEGORY_NAME_TO_ENGLISH[name] ?? "";
};

export const formatCategoriesToDropDownItems = (
  categories: PostCategory[] = [],
): DropDownItem[] => {
  return categories
    .filter((category) => category.id != null && category.name)
    .map((category) => ({
      icon: category.image ? (
        <img src={category.image} alt={category.name} width={20} height={20} />
      ) : null,
      label: category.name!,
      value: category.id!,
      english: getCategoryEnglishByName(category.name!),
    }));
};
