import { create } from "zustand";
import { CATEGORY_SYMPTOM, CATEGORY_DISEASE } from "@shared/component/FilterBottomSheet/CategoryContent/constant";

// todo: 추후 타입들 분리하기
// 각 필터 항목의 기본 타입
export interface FilterItem {
  id: number;
  name: string;
}
export interface SymptomItem extends FilterItem {
  symptoms: FilterItem[];
}
export interface DiseaseItem extends FilterItem {
  diseases: FilterItem[];
}

// API로부터 GET 해오는 데이터 타입들 중 일부
export type CategorySymptom = SymptomItem[];
export type CategoryDisease = DiseaseItem[];

// 전체 categoryData의 타입
export interface CategoryData {
  symptoms: CategorySymptom;
  disease: CategoryDisease;
}

export type CategoryType = keyof CategoryData;

export interface SelectedChips {
  diseaseIds: number[];
  symptomIds: number[];
}

interface CategoryFilterState {
  isOpen: boolean;
  toggleOpen: () => void;
  setOpen: (state: boolean) => void;

  category: CategoryType;
  setCategory: (category: CategoryType) => void;

  // 적용된 필터
  selectedChips: SelectedChips;
  toggleChips: (chip: { id: number; category: keyof SelectedChips }) => void;

  // 각 category에 해당하는 데이터 배열
  categoryData: CategoryData;
  setCategoryData: (category: CategoryType, data: CategorySymptom | CategoryDisease) => void;
}

export const useCategoryFilterStore = create<CategoryFilterState>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (state) => set({ isOpen: state }),

  category: "disease",
  setCategory: (category) => set({ category }),

  selectedChips: { diseaseIds: [], symptomIds: [] },
  // Note: category는 diseaseIds, symptomIds가 된다.
  toggleChips: ({ id, category }) =>
    set((state) => {
      const currentList = state.selectedChips[category] || [];
      const alreadyExists = currentList.includes(id);

      const updatedList = alreadyExists ? currentList.filter((chipId) => chipId !== id) : [...currentList, id];

      return {
        selectedChips: {
          ...state.selectedChips,
          [category]: updatedList,
        },
      };
    }),

  categoryData: {
    symptoms: CATEGORY_SYMPTOM,
    disease: CATEGORY_DISEASE,
  }, //todo: api 연결 후에는 [] 로 변경할 것
  setCategoryData: (category, data) =>
    set((state) => ({
      categoryData: { ...state.categoryData, [category]: data },
    })),
}));
