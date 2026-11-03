const POSITIVE_KEYWORDS_POOL: string[][] = [
  ["설명 자세", "책임감", "꼼꼼"],
  ["친절", "청결", "빠른 진료"],
  ["세심한 상담", "합리적 비용"],
  ["전문성", "믿음직"],
];

export const getMockPositiveKeywords = (hospitalId: number): string[] => {
  if (!hospitalId) return [];
  return POSITIVE_KEYWORDS_POOL[hospitalId % POSITIVE_KEYWORDS_POOL.length];
};
