import { create } from "zustand";
import {
  CATEGORY_KIND,
  CATEGORY_BREED,
  CATEGORY_GENDER,
} from "@shared/component/FilterBottomSheet/CategoryContent/constant";

export interface AnimalItem {
  id?: number;
  name?: string;
  image?: string;
}

export interface BreedItem {
  id: number;
  name: string;
}

// API로부터 GET 해오는 데이터 타입들
export type CategoryAnimal = AnimalItem[];
export type CategoryBreed = BreedItem[];

export type CategoryGender = { gender: "M" | "F"; value: "수컷" | "암컷" }[];

// 전체 categoryData의 타입
export interface CategoryData {
  animal: CategoryAnimal;
  breeds: CategoryBreed;
  gender: CategoryGender;
}

// CategoryType과 연계된 타입
export type CategoryType = keyof CategoryData;

// 선택된 필터 상태
export interface SelectedChips {
  animalId: number | null;
  breedId: number | null;
  gender: "M" | "F" | null;
}

interface AnimalFilterState {
  // 필터 바텀 시트 오픈 여부
  isOpen: boolean;
  toggleOpen: () => void;
  setOpen: (state: boolean) => void;

  // 현재 보고 있는 카테고리
  category: CategoryType; //animal, breeds, gender
  setCategory: (category: CategoryType) => void;

  // 적용된 필터
  selectedChips: SelectedChips;
  toggleChips: (chip: { id: number | "M" | "F"; category: keyof SelectedChips }) => void;
  //animalId, breedId, gender

  // 각 category에 해당하는 데이터 배열
  categoryData: CategoryData;
  setCategoryData: (category: CategoryType, data: CategoryAnimal | CategoryBreed | CategoryGender) => void;
}

export const useAnimalFilterStore = create<AnimalFilterState>((set) => ({
  // 초기값 설정
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (state) => set({ isOpen: state }),

  category: "animal",
  setCategory: (category) => set({ category }),

  selectedChips: { animalId: null, breedId: null, gender: null },
  toggleChips: ({ id, category }) =>
    set((state) => ({
      selectedChips: {
        ...state.selectedChips,
        [category]: state.selectedChips[category] === id ? null : id, // 동일 ID 선택 시 해제
      },
    })),

  categoryData: {
    animal: CATEGORY_KIND,
    breeds: CATEGORY_BREED,
    gender: CATEGORY_GENDER,
  },
  setCategoryData: (category, data) =>
    set((state) => ({
      categoryData: { ...state.categoryData, [category]: data },
    })),
}));
