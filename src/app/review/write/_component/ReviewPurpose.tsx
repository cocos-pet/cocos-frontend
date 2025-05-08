import Chip from "@common/component/Chip/Chip";
import * as styles from "./ReviewPurpose.style.css";
import { PURPOSE_LABELS } from "@app/review/write/constant";

const ReviewPurpose = () => {
  return (
    <div>
      <section className={styles.wrapper}>
        <div>
          <span className={styles.questionStyle}>어떤 목적으로 방문했나요?</span>
          <span className={styles.starStyle}>*</span>
        </div>
        <div className={styles.chipLayout}>
          {PURPOSE_LABELS.map((label) => (
            <Chip key={label} label={label} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReviewPurpose;
