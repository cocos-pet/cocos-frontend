import { useFilterStore } from "@store/filter.ts";

export interface DieasesItem {
  id?: number;
  name?: string;
}

export interface BreedItem {
  id: number;
  name: string;
}

export interface SymptomItem {
  id?: number;
  name?: string;
}
export type CategoryDiases = DieasesItem[];
export type CategoryBreed = BreedItem[];
export type CategorySymptom = SymptomItem[];

export interface CategoryData {
  disease: CategoryDiases;
  breeds: CategoryBreed;
  symptoms: CategorySymptom;
}

export type CategoryType = keyof CategoryData;

/**
 * 선택된 칩 ID (단일) 을 카테고리 데이터에 맞는 이름으로 변환
 * @param id 칩 ID
 * @param category 카테고리
 * @param categoryData 카테고리 데이터
 */

export const getFillterChipNamesById = (
  id: number,
  category: CategoryType,
  categoryData: CategoryData
): string | undefined => {
  if (category === "disease") {
    return categoryData.disease.find((item) => item.id === id)?.name;
  }
  if (category === "breeds") {
    return categoryData.breeds.find((item) => item.id === id)?.name;
  }
  if (category === "symptoms") {
    return categoryData.symptoms.find((item) => item.id === id)?.name;
  }
  return undefined;
};

/**
 * 선택된 칩 ID 리스트를 이름으로 변환 후 join 처리
 * @param list 칩 리스트
 * @param category 카테고리
 */
export const FillterToName = (list: number[], category: CategoryType) => {
  const { categoryData } = useFilterStore();

  const selectedList = list.map((id) => {
    return getFillterChipNamesById(id, category, categoryData);
  });
  return selectedList.join(", ");
};
