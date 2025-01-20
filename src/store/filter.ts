import { create } from "zustand";
import {
  CATEGORY_KIND,
  CATEGORY_SYMPTOM,
  CATEGORY_DISEASE,
} from "@shared/component/FilterBottomSheet/CategoryContent/constant";

// todo: 추후 타입들 분리하기
// 각 필터 항목의 기본 타입
export interface FilterItem {
  id: number;
  name: string;
}
export interface SymptomItem extends FilterItem {
  [x: string]: string | undefined;
  symptoms: FilterItem[];
}
export interface DiseaseItem extends FilterItem {
  diseases: FilterItem[];
}

// API로부터 GET 해오는 데이터 타입들
export type CategoryKind = FilterItem[];
export type CategorySymptom = SymptomItem[];
export type CategoryDisease = DiseaseItem[];

// 전체 categoryData의 타입
export interface CategoryData {
  kind: CategoryKind;
  symptoms: CategorySymptom;
  disease: CategoryDisease;
}

// CategoryType과 연계된 타입
export type CategoryType = keyof CategoryData;

export interface SelectedChips {
  breedId: number[];
  diseaseIds: number[];
  symptomIds: number[];
}

interface FilterState {
  //필터 바텀 시트 오픈 여부
  isOpen: boolean;
  toggleOpen: () => void;
  setOpen: (state: boolean) => void;

  //현재 보고 있는 카테고리
  category: CategoryType;
  setCategory: (category: CategoryType) => void;

  // 적용된 필터
  selectedChips: SelectedChips;
  toggleChips: (chip: { id: number; category: keyof SelectedChips }) => void;

  // 각 category에 해당하는 데이터 배열
  categoryData: CategoryData;
  setCategoryData: (category: CategoryType, data: CategoryKind | CategorySymptom | CategoryDisease) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (state) => set({ isOpen: state }),

  category: "kind",
  setCategory: (category) => set({ category }),

  selectedChips: { breedId: [], diseaseIds: [], symptomIds: [] },
  toggleChips: ({ id, category }) =>
    set((state) => {
      const currentList = state.selectedChips[category] || [];
      const alreadyExists = currentList.includes(id);

      // 카테고리가 'kind'일 경우 하나만 선택 가능
      if (category === "breedId") {
        return {
          selectedChips: {
            ...state.selectedChips,
            [category]: alreadyExists ? [] : [id], // 선택된 ID만 남기고 초기화
          },
        };
      }

      // 일반적인 다중 선택 로직
      const updatedList = alreadyExists
        ? currentList.filter((chipId) => chipId !== id) // 이미 선택되어 있으면 제거
        : [...currentList, id]; // 선택되지 않은 경우 추가

      return {
        selectedChips: {
          ...state.selectedChips,
          [category]: updatedList,
        },
      };
    }),

  categoryData: {
    kind: CATEGORY_KIND,
    symptoms: CATEGORY_SYMPTOM,
    disease: CATEGORY_DISEASE,
  }, //todo: api 연결 후에는 [] 로 변경할 것
  setCategoryData: (category, data) =>
    set((state) => ({
      categoryData: { ...state.categoryData, [category]: data }, // todo: 이거 조금 수정 필요할 수도 있음
    })),
}));
