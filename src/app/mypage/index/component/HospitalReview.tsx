import React, { useState } from "react";
import * as styles from "./HospitalReview.css";
import Chip from "@common/component/Chip/Chip";
import Divider from "@common/component/Divider/Divider";
import { IcEllipses } from "@asset/svg";
import Image from "next/image";
import nocategory from "@asset/image/nocategory.png";

const HospitalReview = () => {
  const [isOpen, setIsOpen] = useState(false);
  //todo: blur 처리 구현 필요
  //todo: 사진 크게 키우기 기능
  //todo: 인터랙션 연결, 나중에 데이터 받아와서 넘기기
  //todo: 후기 존재하지 않을 때 처리
  const [isBlurred, setIsBlurred] = useState(false);
  const btnText = isOpen ? "접기" : "상세보기";

  const handleOpenDetail = () => {
    setIsOpen((prev) => !prev);
  };

  const testDataLength = 1;
  if (!testDataLength) return <div className={styles.nothingContent}>{"아직 작성한 후기가 없어요."}</div>;

  return (
    //{"아직 작성한 후기가 없어요."}
    <section className={styles.container}>
      <div className={styles.visitWrapper}>
        <span className={styles.visitDate}>2025.01.01 방문</span>
        <IcEllipses width={20} height={20} onClick={() => alert("Todo")} />
      </div>

      <article className={styles.hospitalNameBox} onClick={() => alert("Todo")}>
        <h1 className={styles.hospitalName}>코코스동물병원</h1>
        <span className={styles.address}>서울시 강남구 테헤란로</span>
      </article>

      <article className={styles.ReviewArea}>
        <span className={styles.content}>
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
      <span className={styles.openOrClose} onClick={handleOpenDetail}>
        {btnText}
      </span>
      <div className={styles.pictureArea}>
        <Image src={nocategory} alt="리뷰이미지" className={styles.pic} />
        <Image src={nocategory} alt="리뷰이미지" className={styles.pic} />
        <Image src={nocategory} alt="리뷰이미지" className={styles.pic} />
        <Image src={nocategory} alt="리뷰이미지" className={styles.pic} />
        <Image src={nocategory} alt="리뷰이미지" className={styles.pic} />
        <Image src={nocategory} alt="리뷰이미지" className={styles.pic} />
      </div>
      <article className={styles.ReviewChipBottomArea}>
        <Chip label="시설이 좋아요" />
        <Chip label="시설이 좋아요" />
      </article>
    </section>
  );
};

export default HospitalReview;
