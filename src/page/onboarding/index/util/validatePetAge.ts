import { ERROR_MSG } from "../constant/errorMsg";

export function validatePetAge(petAge: string): string {
  // 반려 동물 100살 미만
  if (petAge.length === 3) {
    return ERROR_MSG.petAge.length;
  }

  return "";
}
