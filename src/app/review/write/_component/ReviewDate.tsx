import * as styles from "./ReviewDate.style.css";

const ReviewDate = () => {
  return (
    <div>
      <span className={styles.questionStyle}>방문한 날짜가 언젠가요?</span>
      <span className={styles.starStyle}>*</span>
    </div>
  );
};

export default ReviewDate;
