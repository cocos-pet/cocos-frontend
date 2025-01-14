import * as styles from "./mainHeader.css";

const mainHeader = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <p className={styles.headerText}>
            나의 반려동물을 위해 가장 알맞은 병원을 알아봐요
          </p>
          <p className={styles.textDetail}> 자세히 알아보기 </p>
        </div>
        <div className={styles.img}></div>
      </div>
    </>
  );
};

export default mainHeader;
