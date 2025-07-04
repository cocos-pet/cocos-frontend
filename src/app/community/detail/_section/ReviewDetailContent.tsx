import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import { IcRightArrow } from "@asset/svg";
import { LoadingFallback, ReviewFilter } from "@app/community/detail/_section/index.tsx";
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

interface ReviewFilterState {
  location: LocationFilterType | null;
  summaryOptionId: number | undefined;
  filterType: ReviewActiveTabType;
}

const DEFAULT_LOCATION_ID = 1;
const PAGE_SIZE = 20;

const ReviewDetailContent = () => {
  const searchParams = useSearchParams();
  const bodyId = searchParams?.get("id");
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (!bodyId) {
    return null;
  }
  // State
  const [isReviewFilterOpen, setIsReviewFilterOpen] = useState(false);
  const { isOpen: isModalOpen, handleOpenChange, handleOpen: handleOpenModal } = useOpenToggle();
  const [filterState, setFilterState] = useState<ReviewFilterState>({
    location: {
      id: 1,
      name: "경기 전체",
      type: "CITY",
    },
    summaryOptionId: undefined,
    filterType: undefined,
  });
  const [reviewList, setReviewList] = useState<postHospitalReviewsResponseData[]>([]);

  // API
  const { mutate: postHospitalReviews, isPending } = usePostHospitalReviews();

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

  const postReviews = (location?: LocationFilterType | undefined, summaryOptionId?: number | undefined) => {
    if (!bodyId) return;

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
          setReviewList(data);
        },
      },
    );
  };

  const handleReviewFilterClose = (summaryOptionId: number | undefined, filterType: ReviewActiveTabType) => {
    setIsReviewFilterOpen(false);
    setFilterState((prev) => ({
      ...prev,
      summaryOptionId,
      filterType,
    }));
    postReviews(filterState.location || undefined, summaryOptionId);
  };

  const handleLocationSelect = (location: LocationFilterType) => {
    setFilterState((prev) => ({
      ...prev,
      location,
    }));
    postReviews(location);
  };

  const handleRefresh = () => {
    setFilterState((prev) => ({
      ...prev,
      summaryOptionId: undefined,
      filterType: undefined,
    }));
    setIsReviewFilterOpen(false);
    postReviews(filterState.location || undefined);
  };

  const handleHospitalReviewClick = () => {
    if (!isAuthenticated) {
      handleOpenModal();
    }
  };

  useEffect(() => {
    if (bodyId) {
      postReviews();
    }
  }, [bodyId]);

  if (isPending) {
    return <LoadingFallback />;
  }

  return (
    <div className={styles.reviewContainer}>
      <HospitalReviewFilter
        selectedLocation={filterState.location}
        onRegionFilterClick={handleLocationSelect}
        onReviewFilterClick={() => setIsReviewFilterOpen(!isReviewFilterOpen)}
        filterType={filterState.filterType}
        onRefresh={handleRefresh}
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

      <ReviewFilter isOpen={isReviewFilterOpen} onClose={handleReviewFilterClose} />

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
