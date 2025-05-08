"use client"

import Summary from "./Summary/Summary"
import RecentView from "./RecentView/RecentView"
  const ReviewContent = () => {
const goodReviews = [
  { id: 1, name: "상담 시간이 충분해요.", count: 132 },
  { id: 2, name: "치료 과정이 상세히 설명돼요.", count: 119 },
  { id: 3, name: "진료비가 합리적이에요.", count: 85 },
  { id: 4, name: "반려동물이 스트레스를 덜 받아요.", count: 73 },
  { id: 5, name: "최신 장비와 기술을 갖추고 있어요.", count: 64 },
  { id: 6, name: "필요한 진료만 추천받았어요.", count: 58 }
];

const badReviews = [
  { id: 101, name: "상담 시간이 짧아요.", count: 42 },
  { id: 102, name: "치료 과정 설명이 부족해요.", count: 37 },
  { id: 103, name: "진료비가 다소 비싸요.", count: 29 },
  { id: 104, name: "반려동물이 많이 불안해했어요.", count: 24 },
  { id: 105, name: "병원의 장비나 기술이 오래됐어요.", count: 21 },
  { id: 106, name: "불필요한 진료를 받은 것 같아요.", count: 19 }
];


  return (
    <div>
      <Summary goodReviews={goodReviews} badReviews={badReviews} />
      <RecentView />

    </div>
  )
}

export default ReviewContent