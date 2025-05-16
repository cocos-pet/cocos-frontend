import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import { IcDownArrow, IcTarget } from "@asset/svg";
import { motion } from "framer-motion";
import { LoadingFallback, ReviewFilter } from "@app/community/detail/_section/index.tsx";
import HospitalReview from "@shared/component/HospitalReview/HospitalReview.tsx";
import Chip from "@common/component/Chip/Chip.tsx";
import { usePostHospitalReviews } from "@api/domain/community/detail/hook.ts";

const ReviewDetailContent = () => {
  const searchParams = useSearchParams();
  const bodyId = searchParams?.get("id");
  const router = useRouter();
  const [isReviewFilterOpen, setIsReviewFilterOpen] = useState(false);
  const [isRegionFilterOpen, setIsRegionFilterOpen] = useState(false);
  const { mutate: postHospitalReviews, isPending } = usePostHospitalReviews();
  const [reviewList, setReviewList] = useState([]);
  const handleProfileClick = (nickname: string) => {
    router.push(`/profile?nickname=${nickname}`);
  };

  useEffect(() => {
    postHospitalReviews(
      {
        size: 10,
        // locationId: 1,
        // locationType: "CITY",
        // bodyId: Number(bodyId),
        // summaryOptionId: 1,
        // cursorId: 1,
      },
      {
        onSuccess: (data) => {
          console.log(data);
          setReviewList(data);
        },
      },
    );
  }, []);

  if (isPending) {
    return <LoadingFallback />;
  }

  if (reviewList.length === 0) {
    return <div>리뷰가 없습니다.</div>;
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
          <Chip label={"좋아요"} color={"gray"} size={"small"} rightIcon={<IcDownArrow width={20} />} />
          <Chip label={"아쉬워요"} color={"gray"} size={"small"} rightIcon={<IcDownArrow width={20} />} />
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
          />
        ))}
      </div>
      <ReviewFilter isOpen={isReviewFilterOpen} onClose={() => setIsReviewFilterOpen(false)} />
    </div>
  );
};

export default ReviewDetailContent;
