"use client";

import { useState } from "react";
import * as styles from "./ReviewItem.css";
import Chip from "@common/component/Chip/Chip";
import Profile from "@app/community/_component/Profile/Profile.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
import { Separated } from "react-simplikit";
import { motion } from "framer-motion";

interface ReviewItem {
  id: number;
  memberId: number;
  nickname: string;
  breedName: string;
  petDiseases: { id: number; name: string }[];
  vistitedAt: string;
  hospitalId: number;
  hospitalName: string;
  hospitalAddress: string;
  content: string;
  goodReviews: { id: number; name: string }[];
  badReviews: { id: number; name: string }[];
  images: string[];
  symptoms: { id: number; name: string }[];
  diseases: { id: number; name: string }[];
  animal: string;
  gender: string;
  breed: string;
  weight: number;
  petAge: number; // 이거 api 응답 값 예시에 없음 나중에 요청
  profileImage: string; // 이거 api 응답 값 예시에 없음 나중에 요청
}

interface propsType {
  handleProfileClick: () => void;
  reviewData: ReviewItem;
  isBlurred: boolean;
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
      <section className={`${styles.reviewItemContainer} ${isBlurred && styles.blurEffect}`}>
        <Profile
        handleProfileClick={handleProfileClick}
        profileImageData={reviewData.profileImage}
        createdAt={reviewData.vistitedAt}
        nickname={reviewData.nickname}
        breed={reviewData.breed}
        petAge={reviewData.petAge}
      />
      <div className={styles.hospitalDetail}>
        <div className={styles.hospitalName}>{reviewData.hospitalName}</div>
        <div className={styles.hospitalAddress}>{reviewData.hospitalAddress}</div>
      </div>
      <div className={isExpanded ? styles.reviewContentExpanded : styles.reviewContent}>{reviewData.content}</div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
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
              {reviewData.petDiseases?.map((disease) => (
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

      <div className={styles.reviewChipsContainer}>
        {reviewData.goodReviews?.map((review) => (
          <Chip key={review.id} label={review.name} color="blue" disabled={true} />
        ))}
        {reviewData.badReviews?.map((review) => (
          <Chip key={review.id} label={review.name} color="red" disabled={true} />
        ))}
      </div>
    </section>
  );
};

export default ReviewItem;
