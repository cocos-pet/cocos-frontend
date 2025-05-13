import React, { useState, useRef, useEffect, useCallback } from "react";
import * as styles from "./HospitalReviewWrapper.css";
import { IcEllipses } from "@asset/svg";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet";
import { useInfiniteHospitalReview } from "@api/shared/hook";
import { isLoggedIn } from "@api/index";
import HospitalReview from "./HospitalReview/HospitalReview";

interface HospitalReviewWrapperProps {
  isMypage?: boolean;
  nickname: string;
}

const HospitalReviewWrapper = ({ isMypage = false, nickname }: HospitalReviewWrapperProps) => {
  const [isDeleteReviewModalOpen, setIsDeleteReviewModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);
  const isBlurred = !isLoggedIn();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteHospitalReview({
    nickname,
    cursorId: undefined,
    size: 5,
  });

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

  const handleDropdownClick = (reviewId: number) => {
    setSelectedReviewId(reviewId === selectedReviewId ? null : reviewId);
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDeleteReviewModal = () => {
    setIsDeleteReviewModalOpen(false);
  };

  const openDeleteReviewModal = () => {
    setIsDeleteReviewModalOpen(true);
    setIsDropdownOpen(false);
  };

  const handleProfileClick = () => {
    alert("프로필 클릭");
  };

  const handleHospitalDetailClick = () => {
    alert("병원 상세 클릭");
  };

  if (isLoading) return <div className={styles.nothingContent}>{"리뷰를 불러오는 중..."}</div>;

  const reviews = data?.pages.flatMap((page) => page?.reviews || []) || [];

  if (reviews.length === 0) return <div className={styles.nothingContent}>{"아직 작성한 후기가 없어요."}</div>;

  return (
    <>
      {reviews.map((review) => (
        <section key={review.id} className={styles.reviewContainer}>
          <div className={styles.visitWrapper}>
            <span className={styles.visitDate}>{review.visitedAt} 방문</span>
            {isMypage && <IcEllipses width={20} height={20} onClick={() => handleDropdownClick(review.id as number)} />}
            {isDropdownOpen && selectedReviewId === review.id && (
              <div className={styles.dropdownContainer}>
                <div className={styles.dropdownItem} onClick={openDeleteReviewModal}>
                  삭제하기
                </div>
              </div>
            )}
          </div>

          <HospitalReview
            handleProfileClick={handleProfileClick}
            handleHospitalDetailClick={handleHospitalDetailClick}
            reviewData={review}
            isBlurred={isBlurred}
            isNoProfile={true}
          />
        </section>
      ))}

      {hasNextPage && (
        <div ref={loadMoreRef} className={styles.loadMoreContainer}>
          {isFetchingNextPage ? "더 불러오는 중..." : ""}
        </div>
      )}

      <SimpleBottomSheet
        isOpen={isDeleteReviewModalOpen}
        handleClose={closeDeleteReviewModal}
        content="리뷰를 정말 삭제할까요?"
        leftText="취소"
        rightText="삭제할게요"
        leftOnClick={() => closeDeleteReviewModal()}
        rightOnClick={() => alert("Todo")}
      />
    </>
  );
};

export default HospitalReviewWrapper;
