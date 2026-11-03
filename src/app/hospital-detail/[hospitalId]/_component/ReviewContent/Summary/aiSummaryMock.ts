export interface AiReviewSummary {
  totalReviewCount: number;
  positiveKeywords: string[];
  negativeKeywords: string[];
}

export const AI_REVIEW_SUMMARY_MOCK: AiReviewSummary = {
  totalReviewCount: 128,
  positiveKeywords: ["설명 자세", "책임감", "꼼꼼"],
  negativeKeywords: ["대기 시간 긺", "주차 불편"],
};
