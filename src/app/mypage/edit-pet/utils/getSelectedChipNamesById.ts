import {CategoryData, CategoryType} from "../store/categoryFilter";

export const getSelectedChipNamesById = (
  id: number,
  category: CategoryType,
  categoryData: CategoryData,
): string | undefined => {
  if (category === "disease") {
    return categoryData.disease.flatMap((group) => group.diseases).find((item) => item?.id === id)?.name;
  }
  if (category === "symptoms") {
    return categoryData.symptoms.flatMap((group) => group.symptoms).find((item) => item?.id === id)?.name;
  }
  return undefined;
};
