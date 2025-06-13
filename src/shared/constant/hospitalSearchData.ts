export interface HospitalSearchKeyword {
  id: number;
  content: string;
}

export interface HospitalSearchData {
  keywords: HospitalSearchKeyword[];
}

export interface Hospital {
  id: number;
  name: string;
  address: string;
  reviewCount: number;
  rating: number;
  imageUrl?: string;
  distance?: number;
  isOpen?: boolean;
}

export interface HospitalSearchResult {
  hospitals: Hospital[];
  cursorId: number;
  cursorReviewCount: number;
  hasNext: boolean;
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

export const mockHospitalSearchResult: HospitalSearchResult = {
  hospitals: [
    {
      id: 1,
      name: "서울삼성병원",
      address: "서울특별시 강남구",
      reviewCount: 156,
      rating: 4.8,
      imageUrl: "/images/hospital1.jpg",
      distance: 0.8,
      isOpen: true
    },
    {
      id: 2,
      name: "강남세브란스병원",
      address: "서울특별시 강남구",
      reviewCount: 243,
      rating: 4.7,
      imageUrl: "/images/hospital2.jpg",
      distance: 1.2,
      isOpen: true
    },
    {
      id: 3,
      name: "분당서울대병원",
      address: "경기도 성남시 분당구",
      reviewCount: 189,
      rating: 4.6,
      imageUrl: "/images/hospital3.jpg",
      distance: 2.5,
      isOpen: false
    },
    {
      id: 4,
      name: "서울아산병원",
      address: "서울특별시 송파구 ",
      reviewCount: 312,
      rating: 4.9,
      imageUrl: "/images/hospital4.jpg",
      distance: 3.1,
      isOpen: true
    },
    {
      id: 5,
      name: "고려대학교병원",
      address: "서울특별시 성북구",
      reviewCount: 178,
      rating: 4.5,
      imageUrl: "/images/hospital5.jpg",
      distance: 4.2,
      isOpen: true
    }
  ],
  cursorId: 11,
  cursorReviewCount: 77,
  hasNext: true
};
