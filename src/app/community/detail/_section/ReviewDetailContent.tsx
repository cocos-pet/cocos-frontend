import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import { IcDownArrow, IcRightArrow, IcTarget } from "@asset/svg";
import { motion } from "framer-motion";
import { LoadingFallback, ReviewFilter } from "@app/community/detail/_section/index.tsx";
import Chip from "@common/component/Chip/Chip.tsx";
import { usePostHospitalReviews } from "@api/domain/community/detail/hook.ts";
import NoData from "@shared/component/NoData/NoData.tsx";
import HospitalReview from "@shared/component/HospitalReview/HospitalReview.tsx";
import { postHospitalReviewsResponseData } from "@api/domain/community/detail";
import { color } from "@style/styles.css.ts";
import { useAuth } from "@providers/AuthProvider.tsx";
import { Button } from "@common/component/Button";

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
  const handleProfileClick = (nickname: string | undefined) => {
    router.push(`/profile?nickname=${nickname}`);
  };
  const { isAuthenticated } = useAuth();

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

  if (isPending) {
    return <LoadingFallback />;
  }

  if (reviewList.length === 0) {
    return <NoData />;
  }

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewFilter}>
        <div className={styles.reviewRegion} onClick={() => setIsRegionFilterOpen(!isRegionFilterOpen)}>
          <IcTarget width={20} />
          <span className={styles.reviewRegionText}>서울시 강남구</span>
          <motion.div
            style={{ height: "20px" }}
            animate={{ rotate: isRegionFilterOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <IcDownArrow width={20} />
          </motion.div>
        </div>
        <div className={styles.filterChip} onClick={() => setIsReviewFilterOpen(!isReviewFilterOpen)}>
          <Chip
            label={"좋아요"}
            color={filterType === "good" ? "blue" : "gray"}
            size={"small"}
            rightIcon={
              <IcDownArrow width={20} fill={filterType === "good" ? color.primary.blue700 : color.gray.gray700} />
            }
          />
          <Chip
            label={"아쉬워요"}
            color={filterType === "bad" ? "blue" : "gray"}
            size={"small"}
            rightIcon={
              <IcDownArrow width={20} fill={filterType === "bad" ? color.primary.blue700 : color.gray.gray700} />
            }
          />
        </div>
      </div>
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
      <ReviewFilter
        isOpen={isReviewFilterOpen}
        onClose={() => setIsReviewFilterOpen(false)}
        selectedFilterId={filterId || undefined}
        onFilterClick={handleFilterClick}
      />
      {!isAuthenticated && (
        <div className={styles.notAuthButton}>
          <Button size={"large"} label={"로그인 하고 리뷰 확인하기"} rightIcon={<IcRightArrow />} />
        </div>
      )}
    </div>
  );
};

export default ReviewDetailContent;
