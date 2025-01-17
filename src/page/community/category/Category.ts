export interface Category {
  id: number;
  name: string;
  path: string;
}

export interface DataItem {
  id: number;
  category: string;
  title: string;
  description: string;
  author: string;
  time: string;
}

export const categories: Category[] = [
  { id: 1, name: "증상·질병", path: "symptom" },
  { id: 2, name: "병원 고민", path: "hospital" },
  { id: 3, name: "일상 치유", path: "healing" },
  { id: 4, name: "코코스 매거진", path: "magazine" },
];

export const dummyData: DataItem[] = [
  {
    id: 1,
    category: "symptom",
    title: "강아지 헥헥거림 증상",
    description: "강아지 2주째부터 헥헥거림 증상이 심한데 원인을 알 수 있을까요?",
    author: "골든트리바",
    time: "12시간",
  },
  {
    id: 2,
    category: "hospital",
    title: "24시 동물병원 추천",
    description: "근처에서 믿을 수 있는 24시 동물병원을 추천해주세요.",
    author: "펫케어러",
    time: "1일 전",
  },
  {
    id: 3,
    category: "healing",
    title: "반려동물과의 산책 코스",
    description: "강아지와 함께 갈 수 있는 힐링 산책 코스를 추천해주세요.",
    author: "댕댕러버",
    time: "2일 전",
  },
  {
    id: 4,
    category: "magazine",
    title: "최신 반려동물 뉴스",
    description: "반려동물 관련 최신 소식을 알려드립니다.",
    author: "애니멀매거진",
    time: "3일 전",
  },
];
