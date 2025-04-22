"use client";

import * as styles from "./HotHospital.css.ts";

interface HotPostProps {
  nickname?: string;
}

const HotHospital = ({ nickname }: HotPostProps) => {
  return (
    <div className={styles.hotHospitalContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.subTitle}>인기 게시물을 확인해보세요</p>
        <div className={styles.title}>"반려인들이 주목하는 글 TOP 5"</div>
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
