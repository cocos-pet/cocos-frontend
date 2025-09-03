import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback, useRef, useEffect } from "react";
import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import { IcRightArrow } from "@asset/svg";
import { usePostHospitalReviews } from "@api/domain/community/detail/hook.ts";
import NoData from "@shared/component/NoData/NoData.tsx";
import HospitalReview from "@shared/component/HospitalReview/HospitalReview.tsx";
import { postHospitalReviewsResponseData } from "@api/domain/community/detail";
import { useAuth } from "@providers/AuthProvider.tsx";
import { Button } from "@common/component/Button";
import { Modal } from "@common/component/Modal/Modal.tsx";
import { PATH } from "@route/path.ts";
import HospitalReviewFilter, { LocationFilterType } from "@app/community/detail/_section/HospitalReviewFilter.tsx";
import { If } from "@shared/component/If/if.tsx";
import { ReviewActiveTabType } from "@app/community/detail/_section/ReviewFilter.tsx";
import { useOpenToggle } from "@shared/hook/useOpenToggle.ts";

const PAGE_SIZE = 20;
const DEFAULT_LOCATION_ID = 9;

const ReviewDetailContent = () => {
  const searchParams = useSearchParams();
  const bodyId = searchParams?.get("id");
  const filterId = searchParams?.get("filterId");
  const filterType = searchParams?.get("filterType") as ReviewActiveTabType;
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (!bodyId) {
    return null;
  }

  const { isOpen: isModalOpen, handleOpenChange, handleOpen: handleOpenModal } = useOpenToggle();
  const [location, setLocation] = useState<LocationFilterType>({
    id: 9,
    name: "서울 전체",
    type: "CITY",
  });
  const [reviewList, setReviewList] = useState<postHospitalReviewsResponseData[]>([]);
  const [cursorId, setCursorId] = useState<number | undefined>(undefined);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { mutate: postHospitalReviews, isPending } = usePostHospitalReviews();

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasMore && !isLoadingMore && !isPending) {
        setIsLoadingMore(true);
        postHospitalReviews(
          {
            size: PAGE_SIZE,
            cursorId,
            locationId: location.id,
            locationType: location.type,
            bodyId: Number(bodyId),
            summaryOptionId: filterId ? Number(filterId) : undefined,
          },
          {
            onSuccess: (data) => {
              if (data.length < PAGE_SIZE) {
                setHasMore(false);
              }
              setReviewList((prev) => [...prev, ...data]);
              if (data.length > 0) {
                setCursorId(data[data.length - 1].id);
              }
              setIsLoadingMore(false);
            },
          },
        );
      }
    },
    [bodyId, filterId, hasMore, isLoadingMore, isPending, location, cursorId, postHospitalReviews],
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
    router.push(`/profile?nickname=${nickname}`);
  };

  const handleHospitalClick = (hospitalId: number | undefined) => {
    if (hospitalId) {
      router.push(`/hospital-detail/${hospitalId}`);
    }
  };

  const handleLoginClick = () => {
    router.push(PATH.LOGIN);
  };

  const postReviews = useCallback(
    (location?: LocationFilterType | undefined, summaryOptionId?: number | undefined) => {
      if (!bodyId) return;

      setCursorId(undefined);
      setHasMore(true);
      setIsLoadingMore(false);

      postHospitalReviews(
        {
          size: PAGE_SIZE,
          locationId: location?.id ?? DEFAULT_LOCATION_ID,
          locationType: location?.type ?? "CITY",
          bodyId: Number(bodyId),
          summaryOptionId,
        },
        {
          onSuccess: (data) => {
            if (data.length < PAGE_SIZE) {
              setHasMore(false);
            }
            setReviewList(data);
            if (data.length > 0) {
              setCursorId(data[data.length - 1].id);
            }
          },
        },
      );
    },
    [bodyId, postHospitalReviews],
  );

  const handleReviewFilterClose = (summaryOptionId: number | undefined) => {
    postReviews(location, summaryOptionId);
  };

  const handleLocationSelect = (newLocation: LocationFilterType) => {
    setLocation(newLocation);
    postReviews(newLocation, filterId ? Number(filterId) : undefined);
  };

  const handleRefresh = () => {
    if (searchParams) {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete("filterId");
      newSearchParams.delete("filterType");
      router.replace(`?${newSearchParams.toString()}`);
    }

    postReviews(location);
  };

  const handleHospitalReviewClick = () => {
    if (!isAuthenticated) {
      handleOpenModal();
    }
  };

  return (
    <div className={styles.reviewContainer}>
      <HospitalReviewFilter
        selectedLocation={location}
        onRegionFilterClick={handleLocationSelect}
        filterType={filterType}
        onRefresh={handleRefresh}
        onReviewFilterClose={handleReviewFilterClose}
      />

      <div className={styles.reviewItemContainer}>
        <If condition={reviewList.length === 0}>
          <NoData />
        </If>
        {reviewList.map((review) => (
          <HospitalReview
            key={review.id}
            handleProfileClick={() => handleProfileClick(review.nickname)}
            reviewData={review}
            handleHospitalDetailClick={() => handleHospitalClick(review.hospitalId)}
            isBlurred={!isAuthenticated}
            handleHospitalReviewClick={handleHospitalReviewClick}
          />
        ))}
        {hasMore && (
          <div ref={loadMoreRef} style={{ height: "10px" }}>
            {isLoadingMore ? "더 불러오는 중..." : ""}
          </div>
        )}
      </div>

      <If condition={!isAuthenticated}>
        <div className={styles.notAuthButton}>
          <Button
            size="large"
            label="로그인 하고 리뷰 확인하기"
            rightIcon={<IcRightArrow />}
            onClick={handleOpenModal}
          />
        </div>
      </If>

      <Modal.Root open={isModalOpen} onOpenChange={handleOpenChange}>
        <Modal.Content
          title={<Modal.Title>로그인이 필요해요.</Modal.Title>}
          bottomAffix={
            <Modal.BottomAffix>
              <Modal.Close label="취소" />
              <Modal.Confirm label="로그인" onClick={handleLoginClick} />
            </Modal.BottomAffix>
          }
        >
          코코스를 더 잘 즐기기 위해 로그인을 해주세요.
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

export default ReviewDetailContent;
