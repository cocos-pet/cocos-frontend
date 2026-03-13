/** YYYY-MM-DD 또는 YYYY/MM/DD 형식의 생일로부터 나이 계산 */
export const getAgeFromBirthDate = (birthDateStr: string): number => {
  const normalized = birthDateStr.replace(/\//g, "-");
  const [year, month, day] = normalized.split("-").map(Number);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age -= 1;
  }

  return Math.max(0, age);
};
