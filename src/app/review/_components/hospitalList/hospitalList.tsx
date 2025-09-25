import { useInView } from "react-intersection-observer";
import { useInfiniteHospitalList } from "@api/domain/hospitals/hook";
import { useEffect } from "react";
import * as styles from "./hospitalList.css";
import Link from "next/link";
import { HospitalListResponse, Hospital } from "@api/domain/hospitals";
import { PATH } from "@route/path";
import { DEFAULT_LOCATION } from "@app/review/_constant/locationConfig";
import LazyImage from "@common/component/LazyImage";

interface Location {
  id: number;
  name: string;
  type?: "CITY" | "DISTRICT";
  districts?: {
    id: number;
    name: string;
  }[];
}

interface HospitalListProps {
  title: string;
  highlightText: string;
  selectedLocation?: Location;
}

export default function HospitalList({ title, highlightText, selectedLocation }: HospitalListProps) {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useInfiniteHospitalList({
    locationType: selectedLocation?.type || DEFAULT_LOCATION.DISTRICT.type,
    locationId: selectedLocation?.id || DEFAULT_LOCATION.DISTRICT.id,
    size: 10,
    sortBy: "REVIEW",
    image: "",
  });

  useEffect(() => {
    refetch();
  }, [selectedLocation, refetch]);

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
                  <LazyImage
                    src={hospital.image}
                    alt={hospital.name}
                    width="8rem"
                    height="8rem"
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
