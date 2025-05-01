import React, { useState } from "react";
import * as styles from "../../app/mypage/_style/mypage.css";
import Chip from "@common/component/Chip/Chip";
import Divider from "@common/component/Divider/Divider";
import { IcEllipses } from "@asset/svg";
import Image from "next/image";
import nocategory from "@asset/image/nocategory.png";

interface HospitalReviewProps {
  isMypage?: boolean;
}

const HospitalReview = ({ isMypage = false }: HospitalReviewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true);
  const btnText = isOpen ? "접기" : "상세보기";

  const handleOpenDetail = () => {
    if (!isBlurred) setIsOpen((prev) => !prev);
  };

  const testDataLength = 1;
  if (!testDataLength) return <div className={styles.nothingContent}>{"아직 작성한 후기가 없어요."}</div>;

  return (
    <section className={styles.reviewContainer}>
      <div className={styles.visitWrapper}>
        <span className={styles.visitDate}>2025.01.01 방문</span>
        {isMypage && <IcEllipses width={20} height={20} onClick={() => alert("Todo")} />}
      </div>

      <article
        className={`${styles.hospitalNameBox}  ${isBlurred ? styles.blurred : ""}`}
        onClick={() => alert("Todo")}
      >
        <h1 className={styles.hospitalName}>코코스동물병원</h1>
        <span className={styles.address}>서울시 강남구 테헤란로</span>
      </article>

      <article className={`${styles.reviewArea} ${isBlurred ? styles.blurred : ""}`}>
        <span className={styles.reviewContent}>
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
        <Image src={nocategory} alt="리뷰이미지" className={styles.pic} />
        <Image src={nocategory} alt="리뷰이미지" className={styles.pic} />
        <Image src={nocategory} alt="리뷰이미지" className={styles.pic} />
        <Image src={nocategory} alt="리뷰이미지" className={styles.pic} />
        <Image src={nocategory} alt="리뷰이미지" className={styles.pic} />
        <Image src={nocategory} alt="리뷰이미지" className={styles.pic} />
      </div>
      <article className={`${styles.reviewChipBottomArea} ${isBlurred ? styles.blurred : ""}`}>
        <Chip label="시설이 좋아요" />
        <Chip label="시설이 좋아요" />
      </article>
    </section>
  );
};

export default HospitalReview;
