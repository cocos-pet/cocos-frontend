import React, { useState } from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Chip from "@common/component/Chip/Chip.tsx";
import * as styles from "./HospitalReviewItem.css.ts";

interface ReviewChip {
  id: number;
  name: string;
}

interface Symptom {
  id: number;
  name: string;
}

interface Disease {
  id: number;
  name: string;
}

export interface HospitalReviewItemProps {
  memberId?: number;
  nickname: string;
  profileImage?: string;
  breedName?: string;
  petDisease?: string;
  visitedAt?: string;
  hospitalId?: number;
  hospitalName: string;
  hospitalAddress: string;
  content: string;
  goodReviews: ReviewChip[];
  badReviews: ReviewChip[];
  images?: string[];
  symptoms?: Symptom[];
  diseases?: Disease[];
  animal?: string;
  gender?: string;
  breed?: string;
  weight?: number;
  onClick?: () => void;
}

const HospitalReviewItem: React.FC<HospitalReviewItemProps> = ({
  nickname,
  profileImage,
  breedName,
  petDisease,
  visitedAt,
  hospitalName,
  hospitalAddress,
  content,
  goodReviews,
  badReviews,
  symptoms,
  diseases,
  animal,
  gender,
  breed,
  weight,
  onClick,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={styles.hospitalReviewItem}>
      <ProfileInfo profileImage={profileImage} nickname={nickname} breed={breedName} onClick={onClick} />
      <div className={styles.hospitalInfoContainer}>
        <div className={styles.hospitalInfoTitle}>{hospitalName}</div>
        <div className={styles.hospitalInfoArea}>{hospitalAddress}</div>
      </div>
      <div className={styles.reviewContainer}>
        <div className={styles.reviewContent}>
          <span>{content}</span>
        </div>
        {!expanded ? (
          <button onClick={toggleExpand} className={styles.detailButton}>
            상세보기
          </button>
        ) : (
          <div className={styles.expandedContent}>
            <div className={styles.detailSection}>
              <h4 className={styles.detailTitle}>사전 증상</h4>
              <div className={styles.detailContent}>
                {symptoms?.map((symptom) => (
                  <Chip key={symptom.id} label={symptom.name} color="blue" />
                ))}
                {!symptoms?.length && <span>증상 정보가 없습니다.</span>}
              </div>
            </div>

            <div className={styles.detailSection}>
              <h4 className={styles.detailTitle}>진단 내용</h4>
              <div className={styles.detailContent}>
                {diseases?.map((disease) => (
                  <Chip key={disease.id} label={disease.name} color="blue" />
                ))}
                {petDisease && <div className={styles.diseaseText}>{petDisease}</div>}
                {!diseases?.length && !petDisease && <span>진단 정보가 없습니다.</span>}
              </div>
            </div>

            <div className={styles.detailSection}>
              <h4 className={styles.detailTitle}>동물 기본 정보</h4>
              <div className={styles.animalInfo}>
                {animal && <div className={styles.infoItem}>종류: {animal}</div>}
                {gender && <div className={styles.infoItem}>성별: {gender}</div>}
                {breed && <div className={styles.infoItem}>품종: {breed}</div>}
                {weight && <div className={styles.infoItem}>무게: {weight}kg</div>}
                {!(animal || gender || breed || weight) && <span>동물 정보가 없습니다.</span>}
              </div>
            </div>

            <button onClick={toggleExpand} className={styles.collapseButton}>
              접기
            </button>
          </div>
        )}
      </div>
      <div className={styles.chipContainer}>
        <div className={styles.chipSection}>
          {goodReviews.length > 0 && (
            <div className={styles.chipWrapper}>
              {goodReviews.map((review) => (
                <Chip key={review.id} label={review.name} color="blue" />
              ))}
            </div>
          )}
        </div>
        <div className={styles.chipSection}>
          {badReviews.length > 0 && (
            <div className={styles.chipWrapper}>
              {badReviews.map((review) => (
                <Chip key={review.id} label={review.name} color="gray" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HospitalReviewItem;
