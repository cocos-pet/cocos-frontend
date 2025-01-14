import * as styles from "./MainFooter.css";

const MainFooter = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerName}>코코스</p>
      <p className={styles.footerDetail}>
        이용약관 및 개인정보 취급방침
        <p>리뷰운영정책</p>
      </p>
    </div>
  );
};

export default MainFooter;
