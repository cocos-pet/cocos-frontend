"use client";

import {useState} from "react";
import * as styles from "./ReviewItem.css";
import Chip from "@common/component/Chip/Chip";
import Profile from "@app/community/_component/Profile/Profile.tsx";

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
}

const ReviewItem = (props: propsType) => {
  const { handleProfileClick, reviewData } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!reviewData) {
    return null;
  }

  return (
    <div className={styles.reviewItemContainer}>
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

      {isExpanded && (
        <div className={styles.detailSection}>
          <div>
            <div className={styles.detailTitle}>사전증상</div>
            <div className={styles.petInfoContainer}>
              {reviewData.symptoms?.map((symptom) => (
                <Chip key={symptom.id} label={symptom.name} color="border" />
              ))}
            </div>
          </div>

          <div>
            <div className={styles.detailTitle}>진단 내용</div>
            <div className={styles.detailContent}>
              {reviewData.petDiseases?.map((disease) => (
                <Chip key={disease.id} label={disease.name} color="border" />
              ))}
            </div>
          </div>

          <div>
            <div className={styles.detailTitle}>동물 기본 정보</div>
            <div className={styles.petInfoContainer}>
              <Chip label={`종: ${reviewData.breed}`} color="border" />
              <Chip label={`성별: ${reviewData.gender}`} color="border" />
              <Chip label={`종류: ${reviewData.animal}`} color="border" />
              <Chip label={`몸무게: ${reviewData.weight}`} color="border" />
            </div>
          </div>
        </div>
      )}
      <div className={styles.detailButton} onClick={toggleExpand}>
        {isExpanded ? "접기" : "상세보기"}
      </div>

      <div className={styles.reviewChipsContainer}>
        {reviewData.goodReviews?.map((review) => (
          <Chip key={review.id} label={review.name} color="blue" />
        ))}
        {reviewData.badReviews?.map((review) => (
          <Chip key={review.id} label={review.name} color="red" />
        ))}
      </div>
    </div>
  );
};

export default ReviewItem;
