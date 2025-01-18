import { CategoryData, CategoryType } from "../store/animalFilter";

export const getAnimalChipNamesById = (
  id: number | "M" | "F",
  category: CategoryType,
  categoryData: CategoryData,
): string | undefined => {
  if (category === "animal") {
    return categoryData.animal.find((item) => item.id === id)?.name;
  }
  if (category === "breeds") {
    return categoryData.breeds.find((item) => item.id === id)?.name;
  }
  if (category === "gender" && typeof id === "string") {
    return categoryData.gender.find((item) => item.gender === id)?.value;
  }
  return undefined;
};
