"use client";

import { useState } from "react";
import Divider from "@common/component/Divider/Divider";
import * as styles from "./Summary.css";
import { IcChevronDown } from "@asset/svg";
import { useGetHospitalSummary } from "@api/domain/review/summary/hook";
import { useParams } from "next/navigation";

export interface ReviewSummaryItem {
  id: number;
  label: string;
}

const Summary = () => {
  const [isFolded, setIsFolded] = useState(false);
  const params = useParams();
  const hospitalId = params?.hospitalId as string;
  const { data, isLoading } = useGetHospitalSummary(Number(hospitalId));

  if (isLoading || !data?.goodReviews || !data?.badReviews) return null;

  const { goodReviews, badReviews } = data;
  const displayedGoodReviews = isFolded ? goodReviews : goodReviews.slice(0, 3);
  const displayedBadReviews = isFolded ? badReviews : badReviews.slice(0, 3);

  return (
    <div className={styles.summaryContainer}>
      <p className={styles.summaryTitle}>리뷰 요약</p>
      <p className={styles.summarySubTitle}>맞춤 리뷰를 통해 나에게 맞는 병원의 후기를 확인해요.</p>
      <div className={styles.summaryGrid}>
        <div>
          <h3 className={styles.summarySectionTitle}>좋았던 점</h3>
          {displayedGoodReviews.map((item) => (
            <div className={styles.summaryItem} key={item.id}>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div>
          <h3 className={styles.summarySectionTitle}>아쉬운 점</h3>
          {displayedBadReviews.map((item) => (
            <div className={styles.summaryItem} key={item.id}>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      {(goodReviews.length > 3 || badReviews.length > 3) && (
        <div className={styles.folderButtonWrapper}>
          <button className={styles.folderButton} onClick={() => setIsFolded(!isFolded)}>
            <IcChevronDown className={isFolded ? styles.rotateIcon : ""} />
          </button>
        </div>
      )}
      <Divider size="large" />
    </div>
  );
};

export default Summary;
