import { ERROR_MSG } from "@shared/constant/errorMsg";
export function validatePetName(petName: string): string[] {
  const errors: string[] = [];

  // 영어 또는 숫자 하나라도 포함되면 오류
  const alphanumericPattern = /[a-zA-Z0-9]/;
  if (alphanumericPattern.test(petName)) {
    errors.push(ERROR_MSG.petName.enNum); // 영어 또는 숫자가 포함된 경우
  }

  // 펫이름 길이
  if (petName.length > 8) {
    errors.push(ERROR_MSG.petName.length);
  }

  // 공백 특수문자
  if (/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/.test(petName)) {
    errors.push(ERROR_MSG.petName.spaceSymbol);
  }
  // 완성된 한글
  if (/[ㄱ-ㅎㅏ-ㅣ]/.test(petName)) {
    errors.push(ERROR_MSG.petName.ko);
  }

  return errors;
}
