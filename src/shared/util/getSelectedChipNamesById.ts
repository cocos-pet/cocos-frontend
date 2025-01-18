import { CategoryData } from "./../../store/filter";
// 중첩 데이터 탐색
import { CategoryType } from "@store/filter";

export const getSelectedChipNamesById = (
  id: number,
  category: CategoryType,
  categoryData: CategoryData,
): string | undefined => {
  if (category === "kind") {
    return categoryData.kind.find((item) => item.id === id)?.name;
  }
  if (category === "disease") {
    return categoryData.disease.flatMap((group) => group.diseases).find((item) => item.id === id)?.name;
  }
  if (category === "symptoms") {
    return categoryData.symptoms.flatMap((group) => group.symptoms).find((item) => item.id === id)?.name;
  }
  return undefined;
};
