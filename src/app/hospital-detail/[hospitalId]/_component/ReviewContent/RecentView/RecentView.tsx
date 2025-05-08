"use client"

import ReviewItem from "@shared/component/ReviewItem/ReviewItem"
import * as styles from "./RecentView.css"
import { IcChevronRight } from "@asset/svg"
import { color } from "@style/index"

// API 응답 스펙에 맞는 목데이터
const mockData = {
  code: 200,
  message: "조회 성공",
  data: {
    reviewCount: 123,
    cursorId: 12345,
    reviews: [
      {
        id: 1,
        memberId: 1,
        nickname: "사용자1",
        breedName: "말티즈",
        petDisease: "감기",
        petAge: 3,
        vistitedAt: "2024-03-20",
        hospitalId: 1,
        hospitalName: "행복한 동물병원",
        hospitalAddress: "서울시 강남구",
        content: "친절한 진료와 깔끔한 시설이 좋았습니다.",
        goodReviews: [{ id: 1, name: "친절함" }],
        badReviews: [{ id: 2, name: "대기시간" }],
        images: ["https://example.com/image1.jpg"],
        symptoms: [{ id: 1, name: "기침" }],
        diseases: [{ id: 1, name: "감기" }],
        animal: "강아지",
        gender: "M",
        breed: "말티즈",
        weight: 5.2
      }
    ]
  }
}

const RecentView = () => {
  const { reviewCount, reviews } = mockData.data

  return (
    <div className={styles.recentViewContainer}>
      <div className={styles.headerRow}>
        <div className={styles.headerLeft}>
          <span className={styles.recentViewTitle}>최근 많이 본 리뷰</span>
          <span className={styles.reviewCount}>+{reviewCount}</span>
        </div>
        <button className={styles.headerMore}>
          리뷰 더보기 &nbsp; &gt;</button>
      </div>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          handleProfileClick={() => {}}
          handleHospitalDetailClick={() => {}}
          reviewData={review}
          isBlurred={false}
        />
      ))}
    </div>
  )
}

export default RecentView
