import { ERROR_MSG } from "@shared/constant/errorMsg";
// 목데이터(추후 api연결시 삭제)
const existingNicknames = ["0준혁", "딤민정C", "얄뭉", "알콜주도개발자"];

export function validateNickname(nickname: string): string[] {
  const errors: string[] = [];
  // 중복 닉네임
  if (existingNicknames.includes(nickname)) {
    errors.push(ERROR_MSG.nickname.duplicate);
  }
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
