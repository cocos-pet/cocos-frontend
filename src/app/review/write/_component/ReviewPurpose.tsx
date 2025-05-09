import Chip from "@common/component/Chip/Chip";
import * as styles from "./ReviewPurpose.style.css";
import { usePurposeGet } from "@app/api/review/write/hook";

const ReviewPurpose = () => {
  const { data } = usePurposeGet();

  return (
    <div>
      <section className={styles.wrapper}>
        <div>
          <span className={styles.questionStyle}>어떤 목적으로 방문했나요?</span>
          <span className={styles.starStyle}>*</span>
        </div>
        <div className={styles.chipLayout}>
          {data?.purposes?.map((purpose) => (
            <Chip key={purpose.id} label={purpose.label ?? ""} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReviewPurpose;
