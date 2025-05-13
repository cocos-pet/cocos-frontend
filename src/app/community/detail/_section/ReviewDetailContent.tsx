import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import { IcDownArrow, IcFilterBlack, IcFilterBlue, IcTarget } from "@asset/svg";
import { motion } from "framer-motion";
import { Button } from "@common/component/Button";
import { sampleReviewData } from "@app/community/_constant/reviewMockData.ts";
import ReviewItem from "@shared/component/ReviewItem/ReviewItem.tsx";
import { ReviewFilter } from "@app/community/detail/_section/index.tsx";

const ReviewDetailContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isReviewFilterOpen, setIsReviewFilterOpen] = useState(false);
  const [isRegionFilterOpen, setIsRegionFilterOpen] = useState(false);

  const handleProfileClick = (nickname: string) => {
    router.push(`/profile?nickname=${nickname}`);
  };

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
        <Button
          variant={"outlinePrimary"}
          size={"small"}
          label={
            <>
              필터
              {isReviewFilterOpen ? (
                <IcFilterBlue style={{ width: "20px" }} />
              ) : (
                <IcFilterBlack style={{ width: "20px" }} />
              )}
            </>
          }
          style={{ width: "fit-content" }}
          className={isReviewFilterOpen ? styles.filterButtonActive : styles.filterButton}
          onClick={() => setIsReviewFilterOpen(!isReviewFilterOpen)}
        />
      </div>
      <div className={styles.reviewItemContainer}>
        {sampleReviewData.reviews.map((review) => (
          <ReviewItem
            key={review.id}
            handleProfileClick={() => handleProfileClick(review.nickname)}
            reviewData={review}
            isBlurred={true}
            handleHospitalDetailClick={() => {
              router.push(`/hospital/${review.hospitalId}`);
            }}
          />
        ))}
        {sampleReviewData.reviews.map((review) => (
          <ReviewItem
            key={review.id}
            handleProfileClick={() => handleProfileClick(review.nickname)}
            reviewData={review}
            handleHospitalDetailClick={() => {
              router.push(`/hospital/${review.hospitalId}`);
            }}
          />
        ))}
      </div>
      <ReviewFilter isOpen={isReviewFilterOpen} onClose={() => setIsReviewFilterOpen(false)} />
    </div>
  );
};

export default ReviewDetailContent;
