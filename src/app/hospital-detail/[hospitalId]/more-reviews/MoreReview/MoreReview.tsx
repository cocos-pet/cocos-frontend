"use client";

import { useInfiniteHospitalReviews } from "@api/domain/community/detail/hook";
import { useGetHospitalDetail } from "@api/domain/hospitals/hook";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import HospitalReview from "@shared/component/HospitalReview/HospitalReview";
import Divider from "@common/component/Divider/Divider";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcChevronLeft } from "@asset/svg";
import * as styles from "./MoreReview.css";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";
import { useAuth } from "@providers/AuthProvider";
import { useIsPetRegistered } from "@common/hook/useIsPetRegistered";
import LoginModal from "@common/component/LoginModal/LoginModal";

interface MoreReviewProps {
  hospitalId: number;
}

const MoreReview = ({ hospitalId }: MoreReviewProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const isPetRegistered = useIsPetRegistered();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { ref, inView } = useInView();

  const { data: hospitalData } = useGetHospitalDetail(hospitalId);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteHospitalReviews(hospitalId);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const reviews = data?.pages.flat() || [];

  const handleProfileClick = (memberId: number) => {
    if (memberId) {
      router.push(`${PATH.ONBOARDING.ROOT}`);
    }
  };

  const handleHospitalDetailClick = () => {
    router.push(`${PATH.HOSPITAL.ROOT}/${hospitalId}`);
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleLoginClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    if (!isPetRegistered) {
      router.push(PATH.ONBOARDING.COMPLETE);
      return;
    }
  };

  return (
    <>
      <HeaderNav
        leftIcon={<IcChevronLeft width={24} height={24} />}
        centerContent={hospitalData?.name || ""}
        onLeftClick={handleBackClick}
      />
      <div className={styles.container}>
        <div className={styles.reviewList}>
          {reviews.map((review, index) => (
            <div key={review.id} onClick={() => !isAuthenticated && index >= 3 && handleLoginClick()}>
              <HospitalReview
                handleProfileClick={() => review.memberId && handleProfileClick(review.memberId)}
                handleHospitalDetailClick={handleHospitalDetailClick}
                reviewData={{
                  id: review.id ?? 0,
                  memberId: review.memberId ?? 0,
                  nickname: review.nickname ?? "",
                  breed: review.memberBreed ?? "",
                  memberBreed: review.memberBreed ?? "",
                  age: review.age ?? 0,
                  disease: review.disease ?? "",
                  visitedAt: review.visitedAt ?? "",
                  hospitalId: review.hospitalId ?? 0,
                  hospitalName: review.hospitalName ?? "",
                  hospitalAddress: review.hospitalAddress ?? "",
                  content: review.content ?? "",
                  visitPurpose: review.visitPurpose ?? "",
                  reviewSummary: {
                    goodReviews: review.reviewSummary?.goodReviews ?? [],
                    badReviews: review.reviewSummary?.badReviews ?? [],
                  },
                  images: review.images ?? [],
                  symptoms: review.symptoms ?? [],
                  animal: review.animal ?? "",
                  gender: review.gender || "M",
                  weight: review.weight ?? 0,
                }}
                isBlurred={!isAuthenticated && index >= 3}
              />
              {index < reviews.length - 1 && <Divider size="small" />}
            </div>
          ))}
          {hasNextPage && <div ref={ref} style={{ height: "10px" }} />}
        </div>
      </div>

      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
    </>
  );
};

export default MoreReview;
