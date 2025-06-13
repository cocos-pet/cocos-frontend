"use client";

import HospitalReview from "@shared/component/ReviewItem/ReviewItem";
import * as styles from "./RecentView.css";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";
import { usePostHospitalReviews } from "@api/domain/community/detail/hook";
import { useEffect, useState } from "react";
import { postHospitalReviewsResponseData } from "@api/domain/community/detail";
import { useAuth } from "@providers/AuthProvider";
import Divider from "@common/component/Divider/Divider";
import { IcChevronRight } from "@asset/svg";

interface RecentViewProps {
  hospitalId: string;
}

const RecentView = ({ hospitalId }: RecentViewProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
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

  const handleLoginClick = () => {
    router.push(PATH.LOGIN);
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

      <div>
        {reviewCount > 0
          ? reviews.map(
              (review: postHospitalReviewsResponseData, index: number) => (
                <div
                  key={review.id}
                  onClick={() =>
                    !isAuthenticated && index >= 3 && handleLoginClick()
                  }
                >
                  <HospitalReview
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
                    isBlurred={!isAuthenticated && index >= 3}
                  />
                  {index < reviews.length - 1 && <Divider size="small" />}
                </div>
              )
            )
          : null}
      </div>
      {!isAuthenticated && (
        <div className={styles.toast} onClick={handleLoginClick}>
          로그인 하고 리뷰 확인하기 &nbsp; &gt;
        </div>
      )}
    </div>
  );
};

export default RecentView;
