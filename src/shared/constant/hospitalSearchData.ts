export interface HospitalSearchKeyword {
  id: number;
  content: string;
}

export interface HospitalSearchData {
  keywords: HospitalSearchKeyword[];
}

export const hospitalSearchData: HospitalSearchData = {
  keywords: [
    { id: 1, content: "서울삼성병원" },
    { id: 2, content: "강남세브란스" },
    { id: 3, content: "분당서울대병원" },
    { id: 4, content: "서울아산병원" },
    { id: 5, content: "고려대학교병원" }
  ]
};
