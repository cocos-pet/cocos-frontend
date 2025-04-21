import * as styles from "./ReviewDate.style.css";

const ReviewDate = () => {
  return (
    <>
      <span className={styles.questionStyle}>방문한 날짜가 언젠가요?</span>
      <span className={styles.starStyle}>*</span>
    </>
  );
};

export default ReviewDate;
