import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import { IcDownArrow, IcTarget, IcRightArrow } from "@asset/svg";
import { motion } from "framer-motion";
import { LoadingFallback, ReviewFilter } from "@app/community/detail/_section/index.tsx";
import Chip from "@common/component/Chip/Chip.tsx";
import { usePostHospitalReviews } from "@api/domain/community/detail/hook.ts";
import NoData from "@shared/component/NoData/NoData.tsx";
import HospitalReview from "@shared/component/HospitalReview/HospitalReview.tsx";
import { postHospitalReviewsResponseData } from "@api/domain/community/detail";
import { useAuth } from "@providers/AuthProvider.tsx";
import { Button } from "@common/component/Button";
import { Modal } from "@common/component/Modal/Modal.tsx";
import { PATH } from "@route/path.ts";
import HospitalReviewFilter from "@app/community/detail/_section/HospitalReviewFilter.tsx";
import { color } from "@style/styles.css.ts";
import LocationBottomSheet from "@shared/component/LocationBottomSheet/LocationBottomSheet.tsx";

interface Location {
    id: number;
    name: string;
    districts?: {
        id: number;
        name: string;
    }[];
}
const ReviewDetailContent = () => {
  const searchParams = useSearchParams();
  const bodyId = searchParams?.get("id");
  const router = useRouter();
  const [isReviewFilterOpen, setIsReviewFilterOpen] = useState(false);
  const [isRegionFilterOpen, setIsRegionFilterOpen] = useState(false);
  const [filterId, setFilterId] = useState<number | undefined>(undefined);
  const [filterType, setFilterType] = useState<"good" | "bad" | null>(null);

  const { mutate: postHospitalReviews, isPending } = usePostHospitalReviews();
  const [reviewList, setReviewList] = useState<postHospitalReviewsResponseData[]>([]);

  const [isLocationBottomSheetOpen, setIsLocationBottomSheetOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  console.log("selectedLocation", selectedLocation);
  console.log("isLocationBottomSheetOpen", isLocationBottomSheetOpen);

  const handleProfileClick = (nickname: string | undefined) => {
    router.push(`/profile?nickname=${nickname}`);
  };
  const { isAuthenticated } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenChange = (open: boolean) => {
    setIsModalOpen(open);
  };

  const handleFilterClick = (id: number | undefined, type: "good" | "bad") => {
    setFilterId(id);
    setFilterType(type);
  };

  useEffect(() => {
    if (!bodyId) return;
    postHospitalReviews(
      {
        size: 10,
        locationId: 1,
        locationType: "CITY",
        bodyId: Number(bodyId),
        summaryOptionId: filterId ?? undefined,
        // cursorId: 1,
      },
      {
        onSuccess: (data) => {
          setReviewList(data);
        },
      },
    );
  }, [isReviewFilterOpen]);

  const handleCloseBottomSheet = () => {
    setIsLocationBottomSheetOpen(false);
  };

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    handleCloseBottomSheet();
  };

  if (isPending) {
    return <LoadingFallback />;
  }

  if (reviewList.length === 0) {
    return <NoData />;
  }

  return (
    <div className={styles.reviewContainer}>
      {isAuthenticated && (
        <HospitalReviewFilter
          onRegionFilterClick={() => setIsRegionFilterOpen(!isRegionFilterOpen)}
          isRegionFilterOpen={isRegionFilterOpen}
          onReviewFilterClick={() => setIsReviewFilterOpen(!isReviewFilterOpen)}
          filterType={filterType}
        />
      )}
      <div className={styles.reviewItemContainer}>
        {reviewList.map((review) => (
          <HospitalReview
            key={review.id}
            handleProfileClick={() => handleProfileClick(review.nickname)}
            reviewData={review}
            handleHospitalDetailClick={() => {
              router.push(`/hospital/${review.hospitalId}`);
            }}
            isBlurred={!isAuthenticated}
          />
        ))}
      </div>
      {!isAuthenticated && (
        <div className={styles.notAuthButton}>
          <Button
            size={"large"}
            label={"로그인 하고 리뷰 확인하기"}
            rightIcon={<IcRightArrow />}
            onClick={() => onOpenChange(true)}
          />
        </div>
      )}
      <ReviewFilter
        isOpen={isReviewFilterOpen}
        onClose={() => setIsReviewFilterOpen(false)}
        selectedFilterId={filterId || undefined}
        onFilterClick={handleFilterClick}
      />
      <Modal.Root open={isModalOpen} onOpenChange={onOpenChange}>
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
        <LocationBottomSheet
            isOpen={isLocationBottomSheetOpen}
            onClose={handleCloseBottomSheet}
            onLocationSelect={handleLocationSelect}
        />
    </div>
  );
};

export default ReviewDetailContent;
