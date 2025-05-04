"use client";

import { useState } from "react";
import * as styles from "./ReviewItem.css";
import Chip from "@common/component/Chip/Chip";
import Profile from "@app/community/_component/Profile/Profile.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
import { Separated } from "react-simplikit";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ReviewItemType {
  id: number;
  memberId: number;
  nickname: string;
  breedName: string;
  petDisease: string;
  petAge: number; // notion 명세에 없음
  vistitedAt: string;
  hospitalId: number;
  hospitalName: string;
  hospitalAddress: string;
  content: string;
  goodReviews: ReadonlyArray<{ id: number; name: string }>;
  badReviews: ReadonlyArray<{ id: number; name: string }>;
  images: ReadonlyArray<string>;
  symptoms: ReadonlyArray<{ id: number; name: string }>;
  diseases: ReadonlyArray<{ id: number; name: string }>;
  animal: string;
  gender: string;
  breed: string;
  weight: number;
}

interface propsType {
  handleProfileClick: () => void;
  reviewData: ReviewItemType;
  isBlurred?: boolean;
}

const ReviewItem = (props: propsType) => {
  const { handleProfileClick, reviewData, isBlurred = false } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!reviewData) {
    return null;
  }

  return (
    <section className={styles.reviewItemContainer}>
      <Profile
        handleProfileClick={handleProfileClick}
        createdAt={reviewData.vistitedAt}
        nickname={reviewData.nickname}
        breed={reviewData.breed}
        petAge={reviewData.petAge}
      />
      <article className={`${isBlurred && styles.blurEffect} `}>
        <div className={styles.hospitalDetail}>
          <div className={styles.hospitalName}>{reviewData.hospitalName}</div>
          <div className={styles.hospitalAddress}>{reviewData.hospitalAddress}</div>
        </div>

        <div className={isExpanded ? styles.reviewContentExpanded : styles.reviewContent}>{reviewData.content}</div>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          style={{ overflow: "hidden" }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.detailSection}>
            <div>
              <div className={styles.detailTitle}>사전증상</div>
              <div className={styles.detailContent}>
                {reviewData.symptoms?.map((symptom) => (
                  <Chip key={symptom.id} label={symptom.name} color="border" disabled={true} />
                ))}
              </div>
            </div>

            <div>
              <div className={styles.detailTitle}>진단 내용</div>
              <div className={styles.detailContent}>
                {reviewData.diseases?.map((disease) => (
                  <Chip key={disease.id} label={disease.name} color="border" disabled={true} />
                ))}
              </div>
            </div>

            <div>
              <div className={styles.detailTitle}>동물 기본 정보</div>
              <div className={styles.petInfoContainer}>
                <Separated by={<Divider size={"popular"} />}>
                  <div className={styles.petInfoCategory}>
                    <p className={styles.petInfoLabel}>종</p>
                    <p className={styles.petInfoValue}>{reviewData.breed}</p>
                  </div>
                  <div className={styles.petInfoCategory}>
                    <p className={styles.petInfoLabel}>성별</p>
                    <p className={styles.petInfoValue}>{reviewData.gender}</p>
                  </div>
                  <div className={styles.petInfoCategory}>
                    <p className={styles.petInfoLabel}>성별</p>
                    <p className={styles.petInfoValue}>{reviewData.animal}</p>
                  </div>
                  <div className={styles.petInfoCategory}>
                    <p className={styles.petInfoLabel}>몸무게</p>
                    <p className={styles.petInfoValue}>{reviewData.weight}</p>
                  </div>
                </Separated>
              </div>
            </div>
          </div>
        </motion.div>
        <div className={styles.detailButton} onClick={toggleExpand}>
          {isExpanded ? "접기" : "상세보기"}
        </div>
        <div className={styles.imagesContainer}>
          {reviewData.images.map((image, index) => (
            <Image
              key={`${image}-${index}`}
              className={styles.reviewImage}
              src={image}
              alt="Post image"
              width={76}
              height={76}
            />
          ))}
        </div>
        <div className={styles.reviewChipsContainer}>
          {reviewData.goodReviews?.map((review) => (
            <Chip key={review.id} label={review.name} color="blue" disabled={true} />
          ))}
          {reviewData.badReviews?.map((review) => (
            <Chip key={review.id} label={review.name} color="red" disabled={true} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default ReviewItem;
