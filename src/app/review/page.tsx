"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { IcSearch } from "@asset/svg";
import * as styles from "./style.css";
import { TextField } from "@common/component/TextField";
import { useGetMemberInfo } from "@api/domain/mypage/hook";
import banner from "@asset/image/banner.png";
import HospitalList from "./_components/hospitalList/hospitalList";
import { NAV_CONTENT } from "@common/component/Nav/constant";
import Nav from "@common/component/Nav/Nav";
import FloatingBtn from "@common/component/FloatingBtn/Floating";
import LocationHeader from "./_components/locationHeader/locationHeader";
import { useInfiniteHospitalList } from "@api/domain/hospitals/hook";
import type { Hospital } from "@api/domain/hospitals";
import { PATH } from "@route/path";
import { useAuth } from "@providers/AuthProvider";
import { useIsPetRegistered } from "@common/hook/useIsPetRegistered";
import { Modal } from "@common/component/Modal/Modal.tsx";
import { useGetReviewAgreementStatus } from "@api/domain/review/agree/hook";
import LazyImage from "@common/component/LazyImage";
import LoginModal from "@common/component/LoginModal/LoginModal";

interface Location {
  id: number;
  name: string;
  type: "CITY" | "DISTRICT";
}

export default function ReviewPage() {
  const router = useRouter();
  const { data: userData } = useGetMemberInfo();
  const nickname = userData?.nickname;
  const [searchText, setSearchText] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLocationSheetOpen, setIsLocationSheetOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const isPetRegistered = useIsPetRegistered();
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  // 추천 병원 리스트 (위치 필터링 없음)
  const { data: recommendedHospitalData } = useInfiniteHospitalList({
    locationType: "CITY",
    size: 10,
    sortBy: "REVIEW",
    image: "",
  });

  const recommendedHospitals = recommendedHospitalData?.pages?.[0]?.hospitals?.slice(0, 3) || [];

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    router.push(PATH.REVIEW.SEARCH);
  };

  const isReviewAgree = useGetReviewAgreementStatus();
  const isAgreed = isReviewAgree?.data?.isReviewTermsAgree;

  const handleFloatingBtnClick = () => {
    // 로그인x -> 로그인 모달
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    // 펫 등록x -> 펫 등록 페이지
    if (!isPetRegistered) {
      router.push(PATH.ONBOARDING.COMPLETE);
      return;
    }
    // 리뷰작성 동의 여부에 따라, 동의x -> 리뷰동의 페이지, 동의o -> 바로 리뷰 작성
    const nextPath = isAgreed ? PATH.REVIEW.WRITE : PATH.REVIEW.AGREE;
    router.push(nextPath);
  };

  const handleLocationChange = (location: Location) => {
    setSelectedLocation(location);
  };

  return (
    <div className={styles.pageWrapper}>
      <LocationHeader onLocationChange={handleLocationChange} onBottomSheetOpenChange={setIsLocationSheetOpen} />

      <div className={styles.reviewContainer}>
        <div className={styles.reviewList}>
          <div className={styles.headerContainer}>
            <div className={styles.searchBarContainer}>
              <TextField
                state="default"
                placeholder="병원명을 검색해보세요"
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
                {recommendedHospitals.map((hospital: Hospital, idx: number) => (
                  <div
                    key={hospital.id}
                    className={styles.hospitalCard}
                    onClick={() => router.push(`${PATH.HOSPITAL.ROOT}/${hospital.id}`)}
                  >
                    <div className={styles.hospitalTitleContainer}>
                      <span className={styles.hospitalRank}>{idx + 1}</span>
                      <span className={styles.hospitalName}>{hospital.name}</span>
                    </div>
                    <span className={styles.hospitalAddress}>{hospital.address}</span>
                  </div>
                ))}
              </div>
              <LazyImage src={banner} alt="banner" className={styles.bannerContainer} width="100%" height="10rem" />
            </div>
            <p className={styles.hospitalListText}>믿고 찾는 인기 병원</p>
            <HospitalList
              title={"많은 반려인들이"}
              highlightText={"다녀간 병원"}
              selectedLocation={selectedLocation || undefined}
            />
          </div>
        </div>
        {!isLocationSheetOpen && (
          <div className={styles.floatBtnWrapper}>
            <FloatingBtn onClick={handleFloatingBtnClick} />
          </div>
        )}
        <div className={styles.navWrapper}>
          <Nav content={NAV_CONTENT} type={"nav"} />
        </div>
      </div>

      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
    </div>
  );
}
