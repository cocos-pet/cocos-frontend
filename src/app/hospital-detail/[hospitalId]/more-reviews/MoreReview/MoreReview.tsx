"use client";

import { useInfiniteHospitalReviews } from "@api/domain/community/detail/hook";
import { useGetHospitalDetail } from "@api/domain/hospitals/hook";
import { useEffect, useRef, useState } from "react";
import { components } from "src/type/schema";
import HospitalReview from "@shared/component/HospitalReview/HospitalReview";
import Divider from "@common/component/Divider/Divider";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcChevronLeft } from "@asset/svg";
import * as styles from "./MoreReview.css";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";
import { useAuth } from "@providers/AuthProvider";
import { Modal } from "@common/component/Modal/Modal";
import { useIsPetRegistered } from "@common/hook/useIsPetRegistered";

interface MoreReviewProps {
  hospitalId: number;
}

const MoreReview = ({ hospitalId }: MoreReviewProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const isPetRegistered = useIsPetRegistered();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { data: hospitalData } = useGetHospitalDetail(hospitalId);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteHospitalReviews(hospitalId);

  useEffect(() => {
    const element = loadMoreRef.current;
    if (!element || !hasNextPage) return;

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

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
            <div
              key={review.id}
              onClick={() =>
                !isAuthenticated && index >= 3 && handleLoginClick()
              }
            >
              <HospitalReview
                handleProfileClick={() =>
                  review.memberId && handleProfileClick(review.memberId)
                }
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
          {hasNextPage && <div ref={loadMoreRef} style={{ height: "10px" }} />}
        </div>
      </div>

      <Modal.Root open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
        <Modal.Content
          title={<Modal.Title>로그인이 필요해요.</Modal.Title>}
          bottomAffix={
            <Modal.BottomAffix>
              <Modal.Close label={"취소"} />
              <Modal.Confirm
                label={"로그인"}
                onClick={() => router.push(PATH.LOGIN)}
              />
            </Modal.BottomAffix>
          }
        >
          코코스를 더 잘 즐기기 위해 로그인을 해주세요.
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default MoreReview;
