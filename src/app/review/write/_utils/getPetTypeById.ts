import { PET_TYPE_STANDARD } from "../constant";

// 동물 타입 판단
export const getPetTypeFromBreedId = (breedId: number | undefined): string => {
  if (typeof breedId !== "number") return "";
  return breedId > 0 ? (breedId < PET_TYPE_STANDARD ? "강아지" : "고양이") : "";
};
