import React, { useState } from "react";
import * as styles from "./Hospital.css";
import Chip from "@common/component/Chip/Chip";
import Divider from "@common/component/Divider/Divider";
import { IcEllipses } from "@asset/svg";
import Image from "next/image";
import nocategory from "@asset/image/nocategory.png";
import ImageGalleryModal from "./ImageGalleryModal";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet";

interface HospitalReviewProps {
  isMypage?: boolean;
}

const HospitalReview = ({ isMypage = false }: HospitalReviewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(!isMypage);
  const btnText = isOpen ? "접기" : "상세보기";
  const [isImageGalleryModalOpen, setIsImageGalleryModalOpen] = useState(false);
  const [isDeleteReviewModalOpen, setIsDeleteReviewModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 리뷰 이미지 배열 (실제 구현에서는 props나 API로 받아올 수 있음)
  const reviewImages = [nocategory, nocategory, nocategory, nocategory, nocategory, nocategory];

  const handleOpenDetail = () => {
    if (!isBlurred) setIsOpen((prev) => !prev);
  };

  const handleImageClick = (index: number) => {
    if (isBlurred) return;
    setCurrentImageIndex(index);
    setIsImageGalleryModalOpen(true);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeImageGalleryModal = () => {
    setIsImageGalleryModalOpen(false);
  };

  const closeDeleteReviewModal = () => {
    setIsDeleteReviewModalOpen(false);
  };

  const openDeleteReviewModal = () => {
    setIsDeleteReviewModalOpen(true);
    handleDropdownClick();
  };

  const testDataLength = 1;
  if (!testDataLength) return <div className={styles.nothingContent}>{"아직 작성한 후기가 없어요."}</div>;

  return (
    <section className={styles.reviewContainer}>
      <div className={styles.visitWrapper}>
        <span className={styles.visitDate}>2025.01.01 방문</span>
        {isMypage && <IcEllipses width={20} height={20} onClick={handleDropdownClick} />}
        {isDropdownOpen && (
          <div className={styles.dropdownContainer}>
            <div className={styles.dropdownItem} onClick={openDeleteReviewModal}>
              삭제하기
            </div>
          </div>
        )}
      </div>

      <article
        className={`${styles.hospitalNameBox}  ${isBlurred ? styles.blurred : ""}`}
        onClick={() => alert("Todo")}
      >
        <h1 className={styles.hospitalName}>코코스동물병원</h1>
        <span className={styles.address}>서울시 강남구 테헤란로</span>
      </article>

      <article className={`${styles.reviewArea} ${isBlurred ? styles.blurred : ""}`}>
        <span className={`${isOpen ? styles.reviewContent : styles.reviewEllipsisContent}`}>
          진료는 꼼꼼하고 만족스러웠어요.진료는 꼼꼼하고 만족스러웠어요.진료는 꼼꼼하고 만족스러웠어요.진료는 꼼꼼하고
          만족스러웠어요.진료는 꼼꼼하고 만족스러웠어요.
        </span>
        {isOpen ? (
          <>
            {" "}
            <div className={styles.categoryAndChip}>
              <h2 className={styles.reviewCategory}>사전 증상</h2>
              <div className={styles.reviewChipArea}>
                <Chip label="메롱" />
                <Chip label="메롱" />
              </div>
            </div>
            <div className={styles.categoryAndChip}>
              <h2 className={styles.reviewCategory}>진단 내용</h2>
              <div className={styles.reviewChipArea}>
                <Chip label="메롱" />
                <Chip label="메롱" />
              </div>
            </div>
            <h2 className={styles.reviewCategory}>동물 기본 정보</h2>
            <div className={styles.animalDefaultInfoBox}>
              <div className={styles.infoLineBox}>
                <span className={styles.infoLineCategory}>종</span>
                <span className={styles.infoLineContent}>고양이</span>
              </div>
              <Divider size="small" />
              <div className={styles.infoLineBox}>
                <span className={styles.infoLineCategory}>성별</span>
                <span className={styles.infoLineContent}>암컷</span>
              </div>
              <Divider size="small" />
              <div className={styles.infoLineBox}>
                <span className={styles.infoLineCategory}>종류</span>
                <span className={styles.infoLineContent}>샴</span>
              </div>
              <Divider size="small" />
              <div className={styles.infoLineBox}>
                <span className={styles.infoLineCategory}>몸무게</span>
                <span className={styles.infoLineContent}>9.7kg</span>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </article>
      <span className={`${styles.openOrClose} ${isBlurred ? styles.blurred : ""}`} onClick={handleOpenDetail}>
        {btnText}
      </span>
      <div className={`${styles.pictureArea} ${isBlurred ? styles.blurred : ""}`}>
        {reviewImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="리뷰이미지"
            className={styles.pic}
            onClick={() => handleImageClick(index)}
            style={{ cursor: !isBlurred ? "pointer" : "default" }}
          />
        ))}
      </div>
      <article className={`${styles.reviewChipBottomArea} ${isBlurred ? styles.blurred : ""}`}>
        <Chip label="시설이 좋아요" />
        <Chip label="시설이 좋아요" />
      </article>

      {/* 이미지 갤러리 모달 */}
      <ImageGalleryModal
        isOpen={isImageGalleryModalOpen}
        images={reviewImages}
        currentIndex={currentImageIndex}
        onClose={closeImageGalleryModal}
      />

      <SimpleBottomSheet
        isOpen={isDeleteReviewModalOpen}
        handleClose={closeDeleteReviewModal}
        content="리뷰를 정말 삭제할까요?"
        leftText="취소"
        rightText="삭제할게요"
        leftOnClick={() => closeDeleteReviewModal()}
        rightOnClick={() => alert("Todo")}
      />
    </section>
  );
};

export default HospitalReview;
