import { useCallback, useEffect, useRef, useState } from "react";
import * as styles from "./HospitalReviewWrapper.css";
import { IcEllipses } from "@asset/svg";
import SimpleBottomSheet from "@design-system/Button/SimpleBottomSheet/SimpleBottomSheet";
import { useDeleteHospitalReview, useInfiniteHospitalReview } from "@api/shared/hook";
import HospitalReview from "./HospitalReview/HospitalReview";
import { useRouter } from "next/navigation";
import { useMypageMemberInfo } from "@app/mypage/_store/mypageStore";
import { useAuth } from "@providers/AuthProvider";

interface HospitalReviewWrapperProps {
  isMypage?: boolean;
  nickname?: string;
}

const HospitalReviewWrapper = ({ isMypage = false, nickname: _nickname }: HospitalReviewWrapperProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [isDeleteReviewModalOpen, setIsDeleteReviewModalOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);
  const [isDeleteButtonOpen, setIsDeleteButtonOpen] = useState(false);

  const member = useMypageMemberInfo((s) => s.member);
  const nickname = isMypage ? member?.nickname : _nickname;

  const isBlurred = !isAuthenticated;
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteHospitalReview({
    nickname: nickname ?? "",
    cursorId: undefined,
    size: 5,
  });

  const { mutate: deleteReview } = useDeleteHospitalReview();

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
    const isSameReview = reviewId === selectedReviewId;
    if (isSameReview) {
      setSelectedReviewId(null);
      setIsDeleteButtonOpen(false);
    } else {
      setSelectedReviewId(reviewId);
      setIsDeleteButtonOpen(true);
    }
  };

  const closeDeleteReviewModal = () => {
    setIsDeleteReviewModalOpen(false);
    setSelectedReviewId(null);
    setIsDeleteButtonOpen(false);
  };

  const openDeleteReviewModal = () => {
    setIsDeleteReviewModalOpen(true);
    setIsDeleteButtonOpen(false);
  };

  const handleDeleteReview = (reviewId: string | number) => {
    deleteReview(reviewId);
    closeDeleteReviewModal();
  };

  const handleHospitalDetailClick = (hospitalId: number) => {
    router.push(`/hospital-detail/${hospitalId}`);
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
            {isMypage && (
              <IcEllipses
                width={20}
                height={20}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDropdownClick(review.id as number);
                }}
              />
            )}
            {selectedReviewId === review.id && isDeleteButtonOpen && (
              <div className={styles.dropdownContainer}>
                <div className={styles.dropdownItem} onClick={openDeleteReviewModal}>
                  삭제하기
                </div>
              </div>
            )}
          </div>
          <HospitalReview
            handleHospitalDetailClick={() => handleHospitalDetailClick(review.hospitalId as number)}
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

      {selectedReviewId && (
        <SimpleBottomSheet
          isOpen={isDeleteReviewModalOpen}
          handleClose={closeDeleteReviewModal}
          content="리뷰를 정말 삭제할까요?"
          leftText="취소"
          rightText="삭제할게요"
          leftOnClick={() => closeDeleteReviewModal()}
          rightOnClick={() => handleDeleteReview(selectedReviewId)}
        />
      )}
    </>
  );
};

export default HospitalReviewWrapper;
