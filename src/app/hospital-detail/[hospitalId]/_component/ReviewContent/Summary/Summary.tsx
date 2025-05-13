"use client"

import { useState } from "react"
import Divider from "@common/component/Divider/Divider"
import * as styles from "./Summary.css"
import { IcChevronDown } from "@asset/svg"

export interface ReviewSummaryItem {
  id: number
  name: string
  count: number
}

interface SummaryProps {
  goodReviews: ReviewSummaryItem[]
  badReviews: ReviewSummaryItem[]
}

const Summary = ({ goodReviews, badReviews }: SummaryProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const displayedGoodReviews = isExpanded ? goodReviews : goodReviews.slice(0, 3)
  const displayedBadReviews = isExpanded ? badReviews : badReviews.slice(0, 3)

  return (
    <div className={styles.summaryContainer}>
      <p className={styles.summaryTitle}>리뷰 요약</p>
      <p className={styles.summarySubTitle}>맞춤 리뷰를 통해 나에게 맞는 병원의 후기를 확인해요.</p>
      <div className={styles.summaryGrid}>
        <div>
          <h3 className={styles.summarySectionTitle}>좋았던 점</h3>
          {displayedGoodReviews.map((item) => (
            <div className={styles.summaryItem} key={item.id}>
              <span>{item.name}</span>
              <span className={styles.goodCount}>{item.count}</span>
            </div>
          ))}
        </div>
        <div>
          <h3 className={styles.summarySectionTitle}>아쉬운 점</h3>
          {displayedBadReviews.map((item) => (
            <div className={styles.summaryItem} key={item.id}>
              <span>{item.name}</span>
              <span className={styles.badCount}>{item.count}</span>
            </div>
          ))}
        </div>
      </div>
      {(goodReviews.length > 3 || badReviews.length > 3) && (
        <div className={styles.expandButtonWrapper}>
          <button
            className={styles.expandButton}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <IcChevronDown className={isExpanded ? styles.rotateIcon : ''} />
          </button>
        </div>
      )}
      <Divider size="large" />
    </div>
  )
}

export default Summary
