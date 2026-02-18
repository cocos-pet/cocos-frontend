import { ERROR_MSG } from "@shared/constant/errorMsg";

/** YYYY/MM/DD 형식으로 자동 포맷 (4자리, 2자리, 2자리마다 / 추가) */
export const formatBirthDate = (value: string): string => {
  const numericValue = value.replace(/[^0-9]/g, "").slice(0, 8);
  if (numericValue.length <= 4) {
    return numericValue;
  }
  if (numericValue.length <= 6) {
    return `${numericValue.slice(0, 4)}/${numericValue.slice(4)}`;
  }
  return `${numericValue.slice(0, 4)}/${numericValue.slice(4, 6)}/${numericValue.slice(6)}`;
};
/** YYYY/MM/DD 형식인지 검증 */
const isValidFormat = (value: string): boolean => {
  return /^\d{4}\/\d{2}\/\d{2}$/.test(value);
};

/** 윤년 여부 (4년마다, 단 100의 배수는 400의 배수일 때만) */
const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/** 날짜 유효성 검사 결과 */
export type ValidationResult = { valid: true } | { valid: false; error: string };

/** 반려동물 생일 유효성 검사 (우선 순위: 형식 → 오늘 이후 날짜 → 윤달 → 일) */
export const validateBirthDate = (formattedValue: string): ValidationResult => {
  // 1. 형식 검사
  if (!isValidFormat(formattedValue)) {
    return { valid: false, error: ERROR_MSG.petBirth.format };
  }

  const [yearStr, monthStr, dayStr] = formattedValue.split("/");
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);

  if (month < 1 || month > 12) {
    return { valid: false, error: ERROR_MSG.petBirth.format };
  }

  // 2. 오늘 이후 날짜 입력 불가
  const inputDate = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);
  if (inputDate > today) {
    return { valid: false, error: ERROR_MSG.petBirth.futureDate };
  }

  // 3. 윤달 (2월 29일, 비윤년)
  if (month === 2 && day === 29 && !isLeapYear(year)) {
    return { valid: false, error: ERROR_MSG.petBirth.leapMonth };
  }

  // 일 유효성 (형식)
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const maxDay = month === 2 && isLeapYear(year) ? 29 : daysInMonth[month - 1];
  if (day < 1 || day > maxDay) {
    return { valid: false, error: ERROR_MSG.petBirth.format };
  }

  return { valid: true };
};

/** YYYY/MM/DD -> YYYY-MM-DD (API 요청 형식) */
export const toBirthDateString = (formattedValue: string): string => {
  return formattedValue.replace(/\//g, "-");
};
