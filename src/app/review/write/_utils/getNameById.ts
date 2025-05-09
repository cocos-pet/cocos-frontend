interface Item {
  id?: number;
  name?: string;
}

interface BodyData {
  bodies?: {
    id?: number;
    name?: string;
    symptoms?: Item[];
    diseases?: Item[];
  }[];
}

export const getNameById = (id: number, symptomBodyData?: BodyData, diseaseBodyData?: BodyData): string => {
  const allItems = [
    ...(symptomBodyData?.bodies?.flatMap((b) => b.symptoms ?? []) ?? []),
    ...(diseaseBodyData?.bodies?.flatMap((b) => b.diseases ?? []) ?? []),
  ];

  return allItems.find((item) => item.id === id)?.name ?? "알 수 없음";
};
