"use client";

import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Content from "@common/component/Content/Content";
import {IcSearch} from "@asset/svg";
import * as styles from "./revies.css";
import { formatTime } from "@shared/util/formatTime";
import { TextField } from '@common/component/TextField';
import { useGetMemberInfo } from "@api/domain/mypage/hook";
import banner from "@asset/image/banner.png";
import Image from "next/image";
import HospitalList from './hospitalList/hospitalList';
import { NAV_CONTENT } from '@common/component/Nav/constant';
import Nav from '@common/component/Nav/Nav';
import FloatingBtn from '@common/component/FloatingBtn/Floating';

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
  }
];

export default function ReviewPage() {
  const router = useRouter();
  const [isRecentPost, setIsRecentPost] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const { data: userData } = useGetMemberInfo();
  const nickname = userData?.nickname;

  useEffect(() => {
    fetchReviews();
  }, [isRecentPost]);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/review');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('리뷰 목록 조회 중 오류 발생:', error);
    }
  };

  function handleTextFieldChange(e: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

  function handleSearchClick(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewList}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <Content
              key={review.id}
              breed={review.petInfo.breed}
              petAge={review.petInfo.age}
              postTitle={review.hospitalName}
              postContent={review.content}
              likeCnt={review.rating}
              commentCnt={0}
              likeIconType="curious"
              onClick={() => router.push(`/review/${review.id}`)}
              timeAgo={formatTime(review.createdAt)}
              category="병원 리뷰"
            />
          ))
        ) : (
          <div className={styles.headerContainer}>
            <div className={styles.searchBarContainer}>
              <TextField
                state="main"
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
              <Image 
                src={banner} 
                alt="banner" 
                className={styles.bannerContainer}
              />
            </div>
            <p className={styles.hospitalListText}>믿고 찾는 인기 병원</p>
            <HospitalList title={'많은 반려인들이'} highlightText={'다녀간 병원'} />
          </div>
        )}
      </div>
      <div className={styles.floatBtnWrapper}>
        <FloatingBtn />
      </div>
      <div className={styles.navWrapper}>
        <Nav content={NAV_CONTENT} type={"nav"} />
      </div>
    </div>
  );
}



