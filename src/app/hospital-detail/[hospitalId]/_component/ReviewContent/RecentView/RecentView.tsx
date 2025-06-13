"use client";

import HospitalReview from "@shared/component/ReviewItem/ReviewItem";
import * as styles from "./RecentView.css";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";
import { usePostHospitalReviews } from "@api/domain/community/detail/hook";
import { useEffect } from "react";
import { postHospitalReviewsResponseData } from "@api/domain/community/detail";

interface RecentViewProps {
  hospitalId: string;
}

const RecentView = ({ hospitalId }: RecentViewProps) => {
  const router = useRouter();
  const { mutate: getReviews, data: reviewsData } = usePostHospitalReviews();

  useEffect(() => {
    getReviews({
      hospitalId: Number(hospitalId),
      size: 5,
    });
  }, [hospitalId, getReviews]);

  const handleProfileClick = (memberId: number) => {
    if (memberId) {
      router.push(`${PATH.MYPAGE.ROOT}/${memberId}`);
    }
  };

  const handleHospitalDetailClick = () => {
    router.push(`${PATH.HOSPITAL.ROOT}/${hospitalId}`);
  };

  const handleMoreClick = () => {
    router.push(`${PATH.HOSPITAL.ROOT}/${hospitalId}/reviews`);
  };

  const reviews = reviewsData || [];
  const reviewCount = reviews.length;

  return (
    <div className={styles.recentViewContainer}>
      <div className={styles.headerRow}>
        <div className={styles.headerLeft}>
          <span className={styles.recentViewTitle}>최근 많이 본 리뷰</span>
          {reviewCount > 0 && (
            <span className={styles.reviewCount}>+{reviewCount}</span>
          )}
        </div>
        {reviewCount > 0 && (
          <button className={styles.headerMore} onClick={handleMoreClick}>
            리뷰 더보기 &nbsp; &gt;
          </button>
        )}
      </div>

      {reviewCount > 0
        ? reviews.map((review: postHospitalReviewsResponseData) => (
            <HospitalReview
              key={review.id}
              handleProfileClick={() =>
                review.memberId && handleProfileClick(review.memberId)
              }
              handleHospitalDetailClick={handleHospitalDetailClick}
              reviewData={{
                id: review.id ?? 0,
                memberId: review.memberId ?? 0,
                nickname: review.nickname ?? "",
                breed: review.memberBreed ?? "",
                breedName: review.memberBreed ?? "",
                petAge: review.age ?? 0,
                petDisease: review.disease ?? "",
                vistitedAt: review.visitedAt ?? "",
                hospitalId: review.hospitalId ?? 0,
                hospitalName: review.hospitalName ?? "",
                hospitalAddress: review.hospitalAddress ?? "",
                content: review.content ?? "",
                goodReviews:
                  review.reviewSummary?.goodReviews?.map((item) => ({
                    id: item.id ?? 0,
                    name: item.label ?? "",
                  })) ?? [],
                badReviews:
                  review.reviewSummary?.badReviews?.map((item) => ({
                    id: item.id ?? 0,
                    name: item.label ?? "",
                  })) ?? [],
                images: review.images ?? [],
                symptoms:
                  review.symptoms?.map((symptom) => ({
                    id: 0,
                    name: symptom,
                  })) ?? [],
                diseases: review.disease
                  ? [{ id: 1, name: review.disease }]
                  : [],
                animal: review.animal ?? "",
                gender: review.gender ?? "",
                weight: review.weight ?? 0,
              }}
              isBlurred={false}
            />
          ))
        : null}
    </div>
  );
};

export default RecentView;
