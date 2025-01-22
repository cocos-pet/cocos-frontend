import { ERROR_MSG } from "@shared/constant/errorMsg";

export function validateNickname(nickname: string): string[] {
  const errors: string[] = [];

  // 닉네임 길이
  if (nickname.length < 2 || nickname.length > 8) {
    errors.push(ERROR_MSG.nickname.length);
  }

  // 공백 특수문자
  if (/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/.test(nickname)) {
    errors.push(ERROR_MSG.nickname.spaceSymbol);
  }

  // 완성된 한글
  if (/[ㄱ-ㅎㅏ-ㅣ]/.test(nickname)) {
    errors.push(ERROR_MSG.nickname.ko);
  }

  return errors;
}
