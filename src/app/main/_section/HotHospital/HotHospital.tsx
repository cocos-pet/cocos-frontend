"use client";

import * as styles from "./HotHospital.css.ts";

interface HotPostProps {
  nickname?: string;
}

const HotHospital = () => {
  return (
    <div className={styles.hotHospitalContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.subTitle}>반려인들의 PICK</p>
        <div className={styles.title}>
          가장 많이 찾는 <span className={styles.blue}>병원</span>이에요
        </div>
      </div>

      {/*<div className={styles.hotPostListContainer}>*/}
      {/*    <div className={styles.postlist}>*/}
      {/*        <div className={styles.postContent} onClick={() => router.push("/hospital")}>*/}
      {/*            <div className={styles.contentId}>1</div>*/}
      {/*            <div className={styles.contentTitle}>서울대학교병원</div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default HotHospital;
