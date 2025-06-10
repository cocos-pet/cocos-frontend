"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { IcSearch } from "@asset/svg";
import * as styles from "./style.css";
import { TextField } from "@common/component/TextField";
import { useGetMemberInfo } from "@api/domain/mypage/hook";
import banner from "@asset/image/banner.png";
import Image from "next/image";
import HospitalList from "./_components/hospitalList/hospitalList";
import { NAV_CONTENT } from "@common/component/Nav/constant";
import Nav from "@common/component/Nav/Nav";
import FloatingBtn from "@common/component/FloatingBtn/Floating";
import LocationHeader from "./_components/locationHeader/locationHeader";
import { useInfiniteHospitalList } from "@api/domain/hospitals/hook";
import type { Hospital } from "@api/domain/hospitals";

export default function ReviewPage() {
  const router = useRouter();
  const { data: userData } = useGetMemberInfo();
  const nickname = userData?.nickname;
  const [searchText, setSearchText] = useState("");
  const [isRecentPost, setIsRecentPost] = useState(false);

  const {
    data: hospitalData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteHospitalList({
    locationType: "ALL",
    size: 10,
    sortBy: "REVIEW_COUNT",
    image: "",
  });

  const hospitals = hospitalData?.pages?.[0]?.hospitals || [];

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    // 검색 로직 구현
  };

  return (
    <div>
      <LocationHeader />

      <div className={styles.reviewContainer}>
        <div className={styles.reviewList}>
          <div className={styles.headerContainer}>
            <div className={styles.searchBarContainer}>
              <TextField
                state="default"
                placeholder="심장병, 백내장"
                onClick={handleSearchClick}
                onChange={handleTextFieldChange}
                value={searchText}
                icon={<IcSearch />}
              />
            </div>
            <div className={styles.recommendHospital}>
              <h2 className={styles.recommendTitle}>
                {nickname && `${nickname}님을 위한 `}
                <span className={styles.recommendTitleHighlight}>추천 병원</span>
                이에요
              </h2>
              <div className={styles.recommendList}>
                {hospitals.map((hospital: Hospital, idx: number) => (
                  <div
                    key={hospital.id}
                    className={styles.hospitalCard}
                    onClick={() => router.push(`/hospital/${hospital.id}`)}
                  >
                    <div className={styles.hospitalTitleContainer}>
                      <span className={styles.hospitalRank}>{idx + 1}</span>
                      <span className={styles.hospitalName}>{hospital.name}</span>
                    </div>
                    <span className={styles.hospitalAddress}>{hospital.address}</span>
                  </div>
                ))}
              </div>
              <Image src={banner} alt="banner" className={styles.bannerContainer} />
            </div>
            <div className={styles.hospitalWrapper}>
              <p className={styles.hospitalListText}>믿고 찾는 인기 병원</p>
              <HospitalList title={"많은 반려인들이"} highlightText={"다녀간 병원"} />
            </div>
            <div className={styles.navWrapper}>
              <Nav content={NAV_CONTENT} type={"nav"} />
            </div>
          </div>
        </div>
        <div className={styles.floatBtnWrapper}>
          <FloatingBtn />
        </div>
      </div>
    </div>
  );
}
