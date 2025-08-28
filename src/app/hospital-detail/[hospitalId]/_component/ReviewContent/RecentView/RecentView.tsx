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
import { Modal } from "@common/component/Modal/Modal";
import FloatingBtn from "@common/component/FloatingBtn/Floating";
import Image from "next/image";
import no_review from "@asset/image/no_review.png";
import { Button } from "@common/component/Button";

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

  const handleProfileClick = (memberId: number) => {
    if (memberId) {
      router.push(`${PATH.ONBOARDING.ROOT}`);
    }
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
                  handleProfileClick={() => review.memberId && handleProfileClick(review.memberId)}
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
            {hasNextPage && (
              <div ref={loadMoreRef} style={{ height: "10px" }}>
                {isFetchingNextPage ? "더 불러오는 중..." : ""}
              </div>
            )}
          </>
        ) : (
          <div className={styles.noReviewContainer}>
            <div className={styles.imageContainer}>
              <Image src={no_review} alt="리뷰 없음" width={127} height={127} style={{ objectFit: "contain" }} />
            </div>
            <p className={styles.noReviewText}>리뷰가 아직 없어요</p>
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

      <Modal.Root open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
        <Modal.Content
          title={<Modal.Title>로그인이 필요해요.</Modal.Title>}
          bottomAffix={
            <Modal.BottomAffix>
              <Modal.Close label={"취소"} />
              <Modal.Confirm label={"로그인"} onClick={() => router.push(PATH.LOGIN)} />
            </Modal.BottomAffix>
          }
        >
          코코스를 더 잘 즐기기 위해 로그인을 해주세요.
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

export default RecentView;
