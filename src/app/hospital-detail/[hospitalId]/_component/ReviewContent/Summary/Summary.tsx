"use client";

import { useState } from "react";
import Divider from "@common/component/Divider/Divider";
import * as styles from "./Summary.css";
import { IcChevronDown } from "@asset/svg";
import { useGetHospitalSummary } from "@api/domain/review/summary/hook";
import { useParams } from "next/navigation";
import { AI_REVIEW_SUMMARY_MOCK } from "./aiSummaryMock";

export interface ReviewSummaryItem {
  id: number;
  label: string;
  count: number;
}

const Summary = () => {
  const [isFolded, setIsFolded] = useState(false);
  const params = useParams();
  const hospitalId = params?.hospitalId as string;
  const { data, isLoading } = useGetHospitalSummary(Number(hospitalId));

  // TODO: 서버 AI 요약 API 제공 시 교체 (현재는 목 데이터)
  const aiSummary = AI_REVIEW_SUMMARY_MOCK;

  if (isLoading) return null;

  const goodReviews = data?.goodReviews ?? [];
  const badReviews = data?.badReviews ?? [];
  const hasGoodReviews = goodReviews.length > 0;
  const hasBadReviews = badReviews.length > 0;
  const hasAnyReviews = hasGoodReviews || hasBadReviews;

  const hasAiPositive = aiSummary.positiveKeywords.length > 0;
  const hasAiNegative = aiSummary.negativeKeywords.length > 0;
  const showAiSummary =
    aiSummary.totalReviewCount > 0 && (hasAiPositive || hasAiNegative);

  if (!hasAnyReviews && !showAiSummary) return null;

  const displayedGoodReviews = isFolded ? goodReviews : goodReviews.slice(0, 3);
  const displayedBadReviews = isFolded ? badReviews : badReviews.slice(0, 3);
  const prosConsTotal =
    goodReviews.reduce((sum, item) => sum + item.count, 0) +
    badReviews.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className={styles.summaryContainer}>
      {showAiSummary && (
        <section className={styles.aiCard}>
          <p className={styles.aiCardTitle}>리뷰 요약</p>
          <p className={styles.aiCardSubtitle}>
            코코스 AI가 {aiSummary.totalReviewCount}명의 리뷰를 요약했어요
          </p>
          {hasAiPositive && (
            <p className={styles.aiKeywordLine}>
              <span className={styles.aiEmoji} aria-label="긍정">
                👍
              </span>
              <span className={styles.aiPositiveText}>
                {aiSummary.positiveKeywords.join(", ")}
              </span>
            </p>
          )}
          {hasAiNegative && (
            <p className={styles.aiKeywordLine}>
              <span className={styles.aiEmoji} aria-label="부정">
                👎
              </span>
              <span className={styles.aiNegativeText}>
                {aiSummary.negativeKeywords.join(", ")}
              </span>
            </p>
          )}
        </section>
      )}

      {hasAnyReviews && (
        <>
          <p className={styles.summaryTitle}>장단점 평가</p>
          <p className={styles.summarySubTitle}>
            {prosConsTotal}개의 글 중에서 반려인들이 많이 언급한 내용이에요
          </p>
          <div className={styles.summaryGrid}>
            {hasGoodReviews && (
              <div className={styles.summarySection}>
                <h3 className={styles.summarySectionTitle}>좋았던 점</h3>
                {displayedGoodReviews.map((item) => (
                  <div className={styles.summaryItem} key={item.id}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.goodCount}>{item.count}</span>
                  </div>
                ))}
              </div>
            )}
            {hasBadReviews && (
              <div className={styles.summarySection}>
                <h3 className={styles.summarySectionTitle}>아쉬운 점</h3>
                {displayedBadReviews.map((item) => (
                  <div className={styles.summaryItem} key={item.id}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.badCount}>{item.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {(goodReviews.length > 3 || badReviews.length > 3) && (
            <div className={styles.folderButtonWrapper}>
              <button
                className={styles.folderButton}
                onClick={() => setIsFolded(!isFolded)}
              >
                <IcChevronDown className={isFolded ? styles.rotateIcon : ""} />
              </button>
            </div>
          )}
        </>
      )}

      <Divider size="large" />
    </div>
  );
};

export default Summary;
