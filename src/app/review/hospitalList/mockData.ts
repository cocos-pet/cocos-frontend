export const MOCK_HOSPITALS = [
  {
    id: 1,
    name: "코코스동물병원",
    address: "서울시 강남구",
    reviewCount: 777,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "행복한동물병원",
    address: "서울시 서초구",
    reviewCount: 521,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "우리동물병원",
    address: "서울시 강남구",
    reviewCount: 432,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "24시동물병원",
    address: "서울시 송파구",
    reviewCount: 384,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "착한동물병원",
    address: "서울시 강동구",
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "반려동물병원",
    address: "서울시 마포구",
    reviewCount: 298,
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "힐링동물병원",
    address: "서울시 용산구",
    reviewCount: 272,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "베스트동물병원",
    address: "서울시 종로구",
    reviewCount: 259,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "다정한동물병원",
    address: "서울시 은평구",
    reviewCount: 240,
    image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "펫케어동물병원",
    address: "서울시 성동구",
    reviewCount: 229,
    image: "https://images.unsplash.com/photo-1575833899116-bdcd7c0634d7?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 11,
    name: "휴먼앤펫병원",
    address: "서울시 구로구",
    reviewCount: 215,
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b6?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 12,
    name: "강북동물병원",
    address: "서울시 강북구",
    reviewCount: 204,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 13,
    name: "참동물병원",
    address: "서울시 노원구",
    reviewCount: 198,
    image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 14,
    name: "착한펫병원",
    address: "서울시 도봉구",
    reviewCount: 186,
    image: "https://images.unsplash.com/photo-1575833899116-bdcd7c0634d7?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 15,
    name: "러브펫동물병원",
    address: "서울시 서대문구",
    reviewCount: 173,
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b6?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 16,
    name: "포근한동물병원",
    address: "서울시 양천구",
    reviewCount: 165,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 17,
    name: "행복펫병원",
    address: "서울시 중랑구",
    reviewCount: 158,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 18,
    name: "펫사랑병원",
    address: "서울시 금천구",
    reviewCount: 144,
    image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 19,
    name: "올케어동물병원",
    address: "서울시 관악구",
    reviewCount: 130,
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=2835&auto=format&fit=crop"
  },
  {
    id: 20,
    name: "이웃동물병원",
    address: "서울시 강서구",
    reviewCount: 121,
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b6?q=80&w=2835&auto=format&fit=crop"
  }
];

export const getMockHospitalResponse = (page: number = 1) => {
  const pageSize = 2;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const hospitals = MOCK_HOSPITALS.slice(start, end);

  return {
    code: 1073741824,
    message: "success",
    data: {
      cursorId: hospitals[hospitals.length - 1]?.id ?? 0,
      cursorReviewCount: hospitals[hospitals.length - 1]?.reviewCount ?? 0,
      hospitals
    }
  };
}; 