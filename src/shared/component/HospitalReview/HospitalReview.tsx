"use client";

import { useState } from "react";
import * as styles from "./HospitalReview.css.ts";
import Chip from "@common/component/Chip/Chip";
import Profile from "@app/community/_component/Profile/Profile.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
import { Separated } from "react-simplikit";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageGalleryModal from "@shared/component/ImageGalleryModal.tsx";

export interface ReviewItemType {
  id?: number;
  memberId?: number;
  nickname?: string;
  memberBreed?: string;
  disease?: string;
  age?: number;
  hospitalId?: number;
  hospitalName?: string;
  vistitedAt?: string;
  hospitalAddress?: string;
  content?: string;
  reviewSummary?: {
    goodReviews?: ReadonlyArray<{ id?: number; label?: string }>;
    badReviews?: ReadonlyArray<{ id?: number; label?: string }>;
  };
  images?: ReadonlyArray<string>;
  symptoms?: ReadonlyArray<string>;
  diseases?: ReadonlyArray<string>;
  animal?: string;
  gender?: string;
  breed?: string;
  weight?: number;
  visitPurpose?: string;
}

interface propsType {
  handleProfileClick?: () => void;
  handleHospitalDetailClick?: () => void;
  reviewData: ReviewItemType;
  isBlurred?: boolean;
  isNoProfile?: boolean;
}

/**
 * 병원리뷰 컴포넌트
 * @param handleProfileClick  유저 프로필 클릭 시
 * @param handleHospitalDetailClick 병원 상세 클릭 시
 * @param reviewData 리뷰 데이터
 * @param isBlurred 리뷰가 블러 처리되어야 하는지 여부
 */
const HospitalReview = (props: propsType) => {
  const { handleProfileClick, handleHospitalDetailClick, reviewData, isBlurred = false, isNoProfile = false } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageGalleryModalOpen, setIsImageGalleryModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsImageGalleryModalOpen(true);
  };
  const closeImageGalleryModal = () => {
    setIsImageGalleryModalOpen(false);
  };

  const isReviewImage = reviewData.images?.length ? true : false;

  return (
    <section className={styles.reviewItemContainer({ isNoProfile: isNoProfile })}>
      {!isNoProfile && (
        <Profile
          handleProfileClick={handleProfileClick}
          createdAt={reviewData.vistitedAt}
          nickname={reviewData.nickname}
          breed={reviewData.memberBreed}
          petAge={reviewData.age}
        />
      )}
      <article className={isBlurred ? styles.blurEffect : undefined}>
        <div className={styles.hospitalDetail} onClick={handleHospitalDetailClick}>
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
            {/*<ChipSection title="방문목적" items={reviewData.visitPurpose || ""} color="border" />*/}
            {/*<ChipSection*/}
            {/*  title="사전증상"*/}
            {/*  items={reviewData.symptoms?.map((symptom, index) => ({ id: index, name: symptom })) || []}*/}
            {/*  color="border"*/}
            {/*/>*/}
            {/*<ChipSection*/}
            {/*  title="진단 내용"*/}
            {/*  items={reviewData.diseases?.map((disease, index) => ({ id: index, name: disease })) || []}*/}
            {/*  color="border"*/}
            {/*/>*/}
            <PetInfo reviewData={reviewData} />
          </div>
        </motion.div>
        <div className={styles.detailButton} onClick={toggleExpand}>
          {isExpanded ? "접기" : "상세보기"}
        </div>
        {isReviewImage && (
          <div className={styles.imagesContainer}>
            {reviewData.images?.map((image, index) => (
              <Image
                key={`${image}-${index}`}
                className={styles.reviewImage}
                src={image}
                alt="Post image"
                width={76}
                height={76}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        )}

        {reviewData.reviewSummary && (
          <div className={styles.reviewChipsContainer}>
            {reviewData.reviewSummary?.goodReviews?.map((review, index) => (
              <Chip key={`good-${review.id}-${index}`} label={review.label || ""} color="blue" disabled />
            ))}
            {reviewData.reviewSummary?.badReviews?.map((review, index) => (
              <Chip key={`bad-${review.id}-${index}`} label={review.label || ""} color="red" disabled />
            ))}
          </div>
        )}

        {/* 이미지 갤러리 모달 */}
        <ImageGalleryModal
          isOpen={isImageGalleryModalOpen}
          images={reviewData.images as string[]}
          currentIndex={currentImageIndex}
          onClose={closeImageGalleryModal}
        />
      </article>
    </section>
  );
};

/**
 * 동물 기본 정보
 */
const PetInfo = ({ reviewData }: { reviewData: ReviewItemType }) => (
  <div>
    <div className={styles.detailTitle}>동물 기본 정보</div>
    <div className={styles.petInfoContainer}>
      <Separated by={<Divider size="popular" />}>
        <div className={styles.petInfoCategory}>
          <p className={styles.petInfoLabel}>종</p>
          <p className={styles.petInfoValue}>{reviewData.breed}</p>
        </div>
        <div className={styles.petInfoCategory}>
          <p className={styles.petInfoLabel}>성별</p>
          <p className={styles.petInfoValue}>{reviewData.gender}</p>
        </div>
        <div className={styles.petInfoCategory}>
          <p className={styles.petInfoLabel}>동물</p>
          <p className={styles.petInfoValue}>{reviewData.animal}</p>
        </div>
        <div className={styles.petInfoCategory}>
          <p className={styles.petInfoLabel}>몸무게</p>
          <p className={styles.petInfoValue}>{reviewData.weight}</p>
        </div>
      </Separated>
    </div>
  </div>
);

/**
 * Chip Section (구조가 공통으로 반복되어 있음)
 * @param title
 * @param items
 * @param color
 * @constructor
 */
const ChipSection = ({
  title,
  items,
  color,
}: {
  title: string;
  items: ReadonlyArray<{ id: number; name: string }> | string;
  color: "border" | "blue" | "red";
}) => (
  <div>
    <div className={styles.detailTitle}>{title}</div>
    <div className={styles.detailContent}>
      {Array.isArray(items) ? (
        items.map((item) => <Chip key={item.id} label={item.name} color={color} disabled />)
      ) : typeof items === 'string' ? (
        <Chip label={items} color={color} disabled />
      ) : null}
    </div>
  </div>
);

export default HospitalReview;
