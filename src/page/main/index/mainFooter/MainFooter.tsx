import * as styles from "./MainFooter.css";

const MainFooter = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerName}>코코스</p>
      <div className={styles.footerDetail}>
        <div>
          <a href="https://example.com/terms" target="_blank" rel="noopener noreferrer" className={styles.footerDetail}>
            이용약관 및 개인정보 취급방침
          </a>
        </div>
        <div>
          <a
            href="https://example.com/review-policy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerDetail}
          >
            리뷰운영정책
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
