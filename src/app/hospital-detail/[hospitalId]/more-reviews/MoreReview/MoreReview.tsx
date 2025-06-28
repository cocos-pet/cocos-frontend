"use client";

import { useInfiniteHospitalReviews } from "@api/domain/community/detail/hook";
import { useGetHospitalDetail } from "@api/domain/hospitals/hook";
import { useEffect, useRef } from "react";
import { components } from "src/type/schema";
import HospitalReview from "@shared/component/ReviewItem/ReviewItem";
import Divider from "@common/component/Divider/Divider";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcChevronLeft } from "@asset/svg";
import * as styles from "./MoreReview.css";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";

interface MoreReviewProps {
  hospitalId: number;
}

const MoreReview = ({ hospitalId }: MoreReviewProps) => {
  const router = useRouter();
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

  const reviews = data?.pages.flatMap((page) => page.reviews) || [];

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

  return (
    <>
      <HeaderNav
        leftIcon={<IcChevronLeft width={24} height={24} />}
        centerContent={hospitalData?.name || ""}
        onLeftClick={handleBackClick}
      />
      <div className={styles.container}>
        <div className={styles.reviewList}>
          {reviews.map(
            (
              review: components["schemas"]["HospitalReviewResponse"],
              index: number
            ) => (
              <div key={review.id}>
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
                    breedName: review.memberBreed ?? "",
                    petAge: review.age ?? 0,
                    petDisease: review.disease ?? "",
                    vistitedAt: review.visitedAt ?? "",
                    hospitalId: review.hospitalId ?? 0,
                    hospitalName: review.hospitalName ?? "",
                    hospitalAddress: review.hospitalAddress ?? "",
                    content: review.content ?? "",
                    goodReviews:
                      review.reviewSummary?.goodReviews?.map((item) => ({
                        id: item.id ?? 0,
                        name: item.label ?? "",
                      })) ?? [],
                    badReviews:
                      review.reviewSummary?.badReviews?.map((item) => ({
                        id: item.id ?? 0,
                        name: item.label ?? "",
                      })) ?? [],
                    images: review.images ?? [],
                    symptoms:
                      review.symptoms?.map((symptom) => ({
                        id: 0,
                        name: symptom,
                      })) ?? [],
                    diseases: review.disease
                      ? [{ id: 1, name: review.disease }]
                      : [],
                    animal: review.animal ?? "",
                    gender: review.gender ?? "",
                    weight: review.weight ?? 0,
                  }}
                />
                {index < reviews.length - 1 && <Divider size="small" />}
              </div>
            )
          )}
          {hasNextPage && <div ref={loadMoreRef} style={{ height: "10px" }} />}
        </div>
      </div>
    </>
  );
};

export default MoreReview;
