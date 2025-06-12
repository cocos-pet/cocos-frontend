import { useInView } from "react-intersection-observer";
import { useInfiniteHospitalList } from "@api/domain/hospitals/hook";
import { useEffect } from "react";
import * as styles from "./hospitalList.css";
import Image from "next/image";
import Link from "next/link";
import { HospitalListResponse, Hospital } from "@api/domain/hospitals";
import { PATH } from "@route/path";

interface HospitalListProps {
  title: string;
  highlightText: string;
}

export default function HospitalList({ title, highlightText }: HospitalListProps) {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteHospitalList({
    locationType: "CITY",
    size: 10,
    sortBy: "REVIEW",
    image: "",
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
        {data?.pages?.map((page: HospitalListResponse, pageIndex: number) =>
          page.hospitals?.map((hospital: Hospital) => (
            <div key={`${pageIndex}-${hospital.id}`} className={styles.hospitalItem}>
              <Link href={`${PATH.HOSPITAL.ROOT}/${hospital.id}`} className={styles.link}>
                <div className={styles.hospitalInfo}>
                  <h3 className={styles.hospitalName}>{hospital.name}</h3>
                  <p className={styles.hospitalAddress}>{hospital.address}</p>
                  <p className={styles.reviewCount}>리뷰 {hospital.reviewCount}</p>
                </div>
                {hospital.image && (
                  <Image
                    src={hospital.image}
                    alt={hospital.name}
                    width={80}
                    height={80}
                    className={styles.hospitalImage}
                  />
                )}
              </Link>
            </div>
          )),
        )}
        <div ref={ref}>{isFetchingNextPage && "로딩 중"}</div>
      </div>
    </div>
  );
}
