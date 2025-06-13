"use client";

import { ChangeEvent, useState, useEffect } from "react";
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
import { PATH } from "@route/path";
import { useAuth } from "@providers/AuthProvider";
import { Modal } from "@common/component/Modal/Modal";
import { useIsPetRegistered } from "@common/hook/useIsPetRegistered";

export default function ReviewPage() {
  const router = useRouter();
  const { data: userData } = useGetMemberInfo();
  const nickname = userData?.nickname;
  const [searchText, setSearchText] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const isPetRegistered = useIsPetRegistered();

  useEffect(() => {
    if (isAuthenticated && !isPetRegistered) {
      router.push(PATH.REGISTER_PET.ROOT);
    }
  }, [isAuthenticated, isPetRegistered, router]);

  const { data: hospitalData } = useInfiniteHospitalList({
    locationType: "CITY",
    size: 10,
    sortBy: "REVIEW",
    image: "",
  });

  const hospitals = hospitalData?.pages?.[0]?.hospitals?.slice(0, 3) || [];

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    router.push(PATH.REVIEW.SEARCH);
  };

  const handleFloatingBtnClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    if (!isPetRegistered) {
      router.push(PATH.REGISTER_PET.ROOT);
      return;
    }
    router.push(PATH.COMMUNITY.WRITE);
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
                <span className={styles.recommendTitleHighlight}>
                  추천 병원
                </span>
                이에요
              </h2>
              <div className={styles.recommendList}>
                {hospitals.map((hospital: Hospital, idx: number) => (
                  <div
                    key={hospital.id}
                    className={styles.hospitalCard}
                    onClick={() =>
                      router.push(`${PATH.HOSPITAL.ROOT}/${hospital.id}`)
                    }
                  >
                    <div className={styles.hospitalTitleContainer}>
                      <span className={styles.hospitalRank}>{idx + 1}</span>
                      <span className={styles.hospitalName}>
                        {hospital.name}
                      </span>
                    </div>
                    <span className={styles.hospitalAddress}>
                      {hospital.address}
                    </span>
                  </div>
                ))}
              </div>
              <Image
                src={banner}
                alt="banner"
                className={styles.bannerContainer}
              />
            </div>
            <p className={styles.hospitalListText}>믿고 찾는 인기 병원</p>
            <HospitalList
              title={"많은 반려인들이"}
              highlightText={"다녀간 병원"}
            />
          </div>
        </div>
        <div className={styles.floatBtnWrapper}>
          <FloatingBtn onClick={handleFloatingBtnClick} />
        </div>
        <div className={styles.navWrapper}>
          <Nav content={NAV_CONTENT} type={"nav"} />
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
    </div>
  );
}
