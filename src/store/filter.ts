import { create } from "zustand";

// 각 필터 항목의 기본 타입
interface FilterItem {
  id: number;
  name: string;
}
interface SymptomItem extends FilterItem {
  symptoms: FilterItem[];
}
interface DiseaseItem extends FilterItem {
  diseases: FilterItem[];
}

// API로부터 GET 해오는 데이터 타입들
type CategoryKind = FilterItem[];
type CategorySymptom = SymptomItem[];
type CategoryDisease = DiseaseItem[];

// 전체 categoryData의 타입
interface CategoryData {
  kind: CategoryKind;
  symptoms: CategorySymptom;
  disease: CategoryDisease;
}

// CategoryType과 연계된 타입
type CategoryType = keyof CategoryData;

interface FilterState {
  category: CategoryType;
  setCategory: (category: CategoryType) => void;

  selectedChips: string[];
  toggleChips: (chip: string) => void; // 필터 토글 함수

  categoryData: CategoryData; // 각 category에 해당하는 데이터 배열
  setCategoryData: (category: CategoryType, data: CategoryData) => void; // 카테고리
}

export const useFilterStore = create<FilterState>((set) => ({
  category: "kind",
  setCategory: (category) => set({ category }),

  selectedChips: [],
  toggleChips: (chip) =>
    set((state) => ({
      selectedChips: state.selectedChips.includes(chip)
        ? state.selectedChips.filter((f) => f !== chip)
        : [...state.selectedChips, chip],
    })),

  categoryData: { kind: [], symptoms: [], disease: [] },
  setCategoryData: (category, data) =>
    set((state) => ({
      categoryData: { ...state.categoryData, [category]: data },
    })),
}));
