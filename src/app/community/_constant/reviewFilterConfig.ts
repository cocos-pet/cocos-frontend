interface ReviewFilterItem {
  id: number;
  name: string;
}

interface ReviewFilterConfig {
  goodReviews: ReviewFilterItem[];
  badReviews: ReviewFilterItem[];
}

export const REVIEW_FILTER_CONFIG: ReviewFilterConfig = {
  goodReviews: [
    { id: 1, name: "치료과정 설명이 상세해요" },
    { id: 2, name: "반려동물이 덜 스트레스 받아요" },
    { id: 3, name: "꼭 필요한 진료만 추천받았어요" },
    { id: 4, name: "의료진이 믿을만했어요" },
    { id: 5, name: "진료비용을 사전에 안내받았어요" },
    { id: 6, name: "처방전을 제공받았어요" },
  ],
  badReviews: [
    { id: 1, name: "설명이 부족했어요" },
    { id: 2, name: "반려동물이 진료 중 불안해했어요" },
    { id: 3, name: "진료비용 안내가 부족했어요" },
    { id: 4, name: "대기시간이 길었어요" },
  ],
};
