"use client";

import HospitalReview from "@shared/component/HospitalReview/HospitalReview";
import * as styles from "./RecentView.css";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";
import { useInfiniteHospitalReviews } from "@api/domain/community/detail/hook";
import { useEffect, useState, useRef, useCallback } from "react";
import { components } from "src/type/schema";
import { useAuth } from "@providers/AuthProvider";
import { useIsPetRegistered } from "@common/hook/useIsPetRegistered";
import Divider from "@common/component/Divider/Divider";
import FloatingBtn from "@common/component/FloatingBtn/Floating";
import no_review from "@asset/image/no_review.png";
import { Button } from "@common/component/Button";
import LazyImage from "@common/component/LazyImage";
import LoginModal from "@common/component/LoginModal/LoginModal";

interface ReviewSummaryItem {
  id?: number;
  label?: string;
}

interface RecentViewProps {
  hospitalId: number;
}

const RecentView = ({ hospitalId }: RecentViewProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const isPetRegistered = useIsPetRegistered();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteHospitalReviews(hospitalId);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteReviewSearch(hospitalId);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );

  useEffect(() => {
    const element = loadMoreRef.current;

    if (element) {
      observerRef.current = new IntersectionObserver(handleObserver, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      });

      observerRef.current.observe(element);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver]);

  const handleProfileClick = (nickname: string | undefined) => {
    if (!nickname) return;
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    router.push(`${PATH.PROFILE.ROOT}/?nickname=${nickname}`);
  };

  const handleHospitalDetailClick = () => {
    router.push(`${PATH.HOSPITAL.ROOT}/${hospitalId}`);
  };

  const handleMoreClick = () => {
    router.push(`${PATH.HOSPITAL.ROOT}/${hospitalId}/more-reviews`);
  };

  const handleLoginClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    if (!isPetRegistered) {
      router.push(PATH.ONBOARDING.COMPLETE);
      return;
    }
  };

  const handleFloatingBtnClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    if (!isPetRegistered) {
      router.push(PATH.ONBOARDING.COMPLETE);
      return;
    }
    router.push(PATH.REVIEW.AGREE);
  };

  const reviews = data?.pages.flat() || [];
  const totalReviewCount = reviews.length;

  return (
    <div className={styles.recentViewContainer}>
      <div className={styles.headerRow}>
        <div className={styles.headerLeft}>
          <span className={styles.recentViewTitle}>최근 많이 본 리뷰</span>
          {totalReviewCount > 0 && <span className={styles.reviewCount}>+{totalReviewCount}</span>}
          {totalReviewCount > 0 && <span className={styles.reviewCount}>+{totalReviewCount}</span>}
        </div>
        {totalReviewCount > 0 && (
          <button className={styles.headerMore} onClick={handleMoreClick}>
            리뷰 더보기 &nbsp; &gt;
          </button>
        )}
      </div>

      <div>
        {reviews.length > 0 ? (
          <>
            {reviews.map((review: components["schemas"]["HospitalReviewResponse"], index: number) => (
              <div key={review.id} onClick={() => !isAuthenticated && index >= 3 && handleLoginClick()}>
                <HospitalReview
                  handleProfileClick={() => handleProfileClick(review.nickname)}
                  handleHospitalDetailClick={handleHospitalDetailClick}
                  reviewData={{
                    id: review.id ?? 0,
                    memberId: review.memberId ?? 0,
                    nickname: review.nickname ?? "",
                    breed: review.memberBreed ?? "",
                    memberBreed: review.memberBreed ?? "",
                    age: review.age ?? 0,
                    disease: review.disease ?? "",
                    visitedAt: review.visitedAt ?? "",
                    hospitalId: review.hospitalId ?? 0,
                    hospitalName: review.hospitalName ?? "",
                    hospitalAddress: review.hospitalAddress ?? "",
                    content: review.content ?? "",
                    visitPurpose: review.visitPurpose ?? "",
                    reviewSummary: {
                      goodReviews: review.reviewSummary?.goodReviews ?? [],
                      badReviews: review.reviewSummary?.badReviews ?? [],
                    },
                    images: review.images ?? [],
                    symptoms: review.symptoms ?? [],
                    animal: review.animal ?? "",
                    gender: review.gender || "M",
                    weight: review.weight ?? 0,
                  }}
                  isBlurred={!isAuthenticated && index >= 3}
                />
                {index < reviews.length - 1 && <Divider size="small" />}
              </div>
            ))}
            {hasNextPage && <div ref={loadMoreRef} style={{ height: "10px" }} />}
          </>
        ) : (
          <div className={styles.noReviewContainer}>
            <div className={styles.imageContainer}>
              <LazyImage
                src={no_review}
                alt="리뷰 없음"
                width="12.7rem"
                height="12.7rem"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className={styles.noReviewText}>리뷰가 아직 없어요</p>
            <Button size="large" onClick={handleFloatingBtnClick} label="리뷰 작성하기" />
            <Button size="large" onClick={handleFloatingBtnClick} label="리뷰 작성하기" />
          </div>
        )}
      </div>
      {!isAuthenticated && (
        <div className={styles.toast} onClick={handleLoginClick}>
          로그인 하고 리뷰 확인하기 &nbsp; &gt;
        </div>
      )}

      {isAuthenticated && reviews.length > 0 && (
        <div className={styles.floatBtnWrapper}>
          <FloatingBtn onClick={handleFloatingBtnClick} />
        </div>
      )}

      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
    </div>
  );
};

export default RecentView;
