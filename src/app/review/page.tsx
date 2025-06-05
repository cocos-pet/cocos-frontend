"use client";

import { ChangeEvent } from "react";
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
import { useQuery } from "@tanstack/react-query";

interface Review {
  id: string;
  title: string;
  content: string;
  rating: number;
  createdAt: string;
  hospitalName: string;
  petInfo: {
    breed: string;
    age: number;
  };
}
interface Hospital {
  id: number;
  name: string;
  address: string;
}

const RECOMMENDED_HOSPITALS: Hospital[] = [
  {
    id: 1,
    name: "코코스동물병원",
    address: "서울시 강남구 · 리뷰 777",
  },
  {
    id: 2,
    name: "행복한동물병원",
    address: "서울시 서초구 · 리뷰 521",
  },
  {
    id: 3,
    name: "우리동물병원",
    address: "서울시 강남구 · 리뷰 432",
  },
];

const MOCK_REVIEWS: Review[] = [
  {
    id: "1",
    title: "매우 친절한 병원이에요",
    content: "우리 강아지 치료를 정말 잘해주셨어요. 의사선생님이 정말 친절하고 자세히 설명해주셨습니다.",
    rating: 5,
    createdAt: "2023-08-15",
    hospitalName: "코코스동물병원",
    petInfo: {
      breed: "말티즈",
      age: 3,
    },
  },
  {
    id: "2",
    title: "전문적인 진료가 좋았어요",
    content: "우리 고양이 피부병 치료를 위해 방문했는데, 정확한 진단과 처방을 해주셨어요.",
    rating: 4,
    createdAt: "2023-09-20",
    hospitalName: "행복한동물병원",
    petInfo: {
      breed: "코리안숏헤어",
      age: 2,
    },
  },
  {
    id: "3",
    title: "24시간 응급실이 있어 안심돼요",
    content: "새벽에 급하게 방문했는데도 신속하게 대응해주셨어요. 응급상황에 큰 도움이 됐습니다.",
    rating: 5,
    createdAt: "2023-10-05",
    hospitalName: "우리동물병원",
    petInfo: {
      breed: "골든리트리버",
      age: 5,
    },
  },
];
const fetchReviews = async (): Promise<Review[]> => {
  // todo: 실제 api 연동 후 삭제
  return Promise.resolve(MOCK_REVIEWS);
};

export default function ReviewPage() {
  const router = useRouter();
  const { data: userData } = useGetMemberInfo();
  const nickname = userData?.nickname;

  const { data: review = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
    initialData: MOCK_REVIEWS,
  });

  function handleTextFieldChange(e: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  function handleSearchClick(): void {
    throw new Error("Function not implemented.");
  }

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
                value=""
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
                {RECOMMENDED_HOSPITALS.map((hospital) => (
                  <div
                    key={hospital.id}
                    className={styles.hospitalCard}
                    onClick={() => router.push(`/hospital/${hospital.id}`)}
                  >
                    <div className={styles.hospitalTitleContainer}>
                      <span className={styles.hospitalRank}>{hospital.id}</span>
                      <span className={styles.hospitalName}>{hospital.name}</span>
                    </div>
                    <span className={styles.hospitalAddress}>{hospital.address}</span>
                  </div>
                ))}
              </div>
              <Image src={banner} alt="banner" className={styles.bannerContainer} />
            </div>
            <p className={styles.hospitalListText}>믿고 찾는 인기 병원</p>
            <HospitalList title={"많은 반려인들이"} highlightText={"다녀간 병원"} />
          </div>
        </div>
        <div className={styles.floatBtnWrapper}>
          <FloatingBtn />
        </div>
        <div className={styles.navWrapper}>
          <Nav content={NAV_CONTENT} type={"nav"} />
        </div>
      </div>
    </div>
  );
}
