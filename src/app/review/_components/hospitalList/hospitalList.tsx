import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import * as styles from "./hospitalList.css";
import Image from "next/image";
import { getMockHospitalResponse } from "./mockData";

interface Hospital {
  id: number;
  name: string;
  address: string;
  reviewCount: number;
  image: string;
}

interface HospitalResponse {
  code: number;
  message: string;
  data: {
    cursorId: number;
    cursorReviewCount: number;
    hospitals: Hospital[];
  };
}

interface HospitalListProps {
  title: string;
  highlightText: string;
}

export default function HospitalList({ title, highlightText }: HospitalListProps) {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery<HospitalResponse>({
    queryKey: ["hospitals"] as const,
    initialPageParam: { page: 1 },
    queryFn: async ({ pageParam }: { pageParam: { page: number } }) => {
      return getMockHospitalResponse(pageParam.page);
    },
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.data.hospitals.length === 0) return undefined;
      return { page: pages.length + 1 };
    },
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title} <span className={styles.highlight}>{highlightText}</span>이에요
      </h2>
      <div className={styles.listContainer}>
        {data?.pages.map((page, pageIndex) =>
          page.data.hospitals.map((hospital: Hospital) => (
            <div key={`${pageIndex}-${hospital.id}`} className={styles.hospitalItem}>
              <div className={styles.hospitalInfo}>
                <h3 className={styles.hospitalName}>{hospital.name}</h3>
                <p className={styles.hospitalAddress}>
                  {hospital.address} · 리뷰 {hospital.reviewCount}
                </p>
              </div>
              <Image src={hospital.image} alt={hospital.name} width={80} height={80} className={styles.hospitalImage} />
            </div>
          )),
        )}
        <div ref={ref} className={styles.loadingTrigger}>
          {isFetchingNextPage && "로딩 중"}
        </div>
      </div>
    </div>
  );
}
