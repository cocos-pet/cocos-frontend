import { ERROR_MSG } from "../constant/errorMsg";
export function validateNickname(nickname: string): string {
  const errors: string[] = [];

  // 닉네임 길이 검사
  if (nickname.length < 2 || nickname.length > 8) {
    errors.push(ERROR_MSG.nickname.length);
  }

  // 공백 특수문자 검사
  if (/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/.test(nickname)) {
    errors.push(ERROR_MSG.nickname.spaceSymbol);
  }

  // 완성된 한글 검사
  if (/[ㄱ-ㅎㅏ-ㅣ]/.test(nickname)) {
    errors.push(ERROR_MSG.nickname.ko);
  }

  // 에러가 없으면 공백 반환
  if (errors.length === 0) {
    return "";
  }

  // 에러 메시지를 순서대로 합쳐서 반환
  return errors.join(" ");
}
