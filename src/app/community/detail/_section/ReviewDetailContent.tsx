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
  const [filterId, setFilterId] = useState<number | undefined>(undefined);
  const [filterType, setFilterType] = useState<"good" | "bad" | null>(null);

  const { mutate: postHospitalReviews, isPending } = usePostHospitalReviews();
  const [reviewList, setReviewList] = useState<postHospitalReviewsResponseData[]>([]);

  const [selectedLocation, setSelectedLocation] = useState<LocationFilterType | null>(null);

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
        locationId: selectedLocation?.id ?? 1,
        locationType: "DISTRICT",
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
  }, [filterId, selectedLocation]);

  const handleLocationSelect = (location: LocationFilterType) => {
    setSelectedLocation(location);
  };

  if (isPending) {
    return <LoadingFallback />;
  }

  return (
    <div className={styles.reviewContainer}>
      {isAuthenticated && (
        <HospitalReviewFilter
          onRegionFilterClick={handleLocationSelect}
          onReviewFilterClick={() => setIsReviewFilterOpen(!isReviewFilterOpen)}
          filterType={filterType}
        />
      )}
      <div className={styles.reviewItemContainer}>
        <If condition={reviewList.length === 0}>
          <NoData />
        </If>
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
      <If condition={!isAuthenticated}>
        <div className={styles.notAuthButton}>
          <Button
            size={"large"}
            label={"로그인 하고 리뷰 확인하기"}
            rightIcon={<IcRightArrow />}
            onClick={() => onOpenChange(true)}
          />
        </div>
      </If>
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
    </div>
  );
};

export default ReviewDetailContent;
