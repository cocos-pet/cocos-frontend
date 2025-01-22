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

export const getFillterChipNamesById = (
  id: number,
  category: CategoryType,
  categoryData: CategoryData
): string | undefined => {
  if (category === "disease") {
    return categoryData.disease.find((item) => item.id === id)?.name;
  }
  if (category === "breeds") {
    console.log(categoryData.breeds.find((item) => item.id === id)?.name);
    return categoryData.breeds.find((item) => item.id === id)?.name;
  }
  if (category === "symptoms") {
    console.log(categoryData.symptoms.find((item) => item.id === id)?.name);
    return categoryData.symptoms.find((item) => item.id === id)?.name;
  }
  return undefined;
};
