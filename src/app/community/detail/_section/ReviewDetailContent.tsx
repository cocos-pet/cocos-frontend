import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import { IcRightArrow } from "@asset/svg";
import { LoadingFallback } from "@app/community/detail/_section/index.tsx";
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
import LoginModal from "@common/component/LoginModal/LoginModal";

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
  const filterId = searchParams?.get("filterId");
  const filterType = searchParams?.get("filterType") as ReviewActiveTabType;
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (!bodyId) {
    return null;
  }

  // State
  const { isOpen: isModalOpen, handleOpenChange, handleOpen: handleOpenModal } = useOpenToggle();
  const [location, setLocation] = useState<LocationFilterType>({
    id: 1,
    name: "경기 전체",
    type: "CITY",
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

  const postReviews = useCallback(
    (location?: LocationFilterType | undefined, summaryOptionId?: number | undefined) => {
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
    },
    [bodyId, postHospitalReviews],
  );

  const handleReviewFilterClose = (summaryOptionId: number | undefined, filterType: ReviewActiveTabType) => {
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

  if (isPending) {
    return <LoadingFallback />;
  }

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

      <LoginModal isOpen={isModalOpen} setIsOpen={handleOpenChange} />
    </div>
  );
};

export default ReviewDetailContent;
