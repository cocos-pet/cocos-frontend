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
interface CategoryData {
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

  selectedChips: { breedId: [], diseaseIds: [], symptomIds: [] }, // 초기화된 구조
  toggleChips: ({ id, category }) =>
    set((state) => {
      // const keyMap = {
      //   kind: "breedId",
      //   disease: "diseaseIds",
      //   symptoms: "symptomIds",
      // } as const;

      // // category가 keyMap에 존재하는지 체크
      // console.log(category);

      // if (!(category in keyMap)) {
      //   console.error(`Invalid category: ${category}`);
      //   return state; // 잘못된 category 값인 경우 상태를 그대로 반환
      // }

      // const key = keyMap[category as keyof typeof keyMap];

      const currentList = state.selectedChips[category] || [];
      const alreadyExists = currentList.includes(id);

      // ID 추가 또는 제거
      const updatedList = alreadyExists ? currentList.filter((chipId) => chipId !== id) : [...currentList, id];

      return {
        selectedChips: {
          ...state.selectedChips,
          [category]: updatedList,
        },
      };
    }),

  categoryData: { kind: CATEGORY_KIND, symptoms: CATEGORY_SYMPTOM, disease: CATEGORY_DISEASE }, //todo: api 연결 후에는 [] 로 변경할 것
  setCategoryData: (category, data) =>
    set((state) => ({
      categoryData: { ...state.categoryData, [category]: data }, // todo: 이거 조금 수정 필요할 수도 있음
    })),
}));
