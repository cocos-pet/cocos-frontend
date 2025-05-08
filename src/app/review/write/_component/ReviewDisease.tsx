import * as styles from "./ReviewDisease.style.css";
import { IcRightArror } from "@asset/svg/index";
import BtnToChip from "@app/review/write/_component/BtnToChip";

const ReviewDisease = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.questionStyle}>진단받은 내용이 있나요?</span>
      <BtnToChip label="진단 내용 추가하기" rightIcon={<IcRightArror />} />
    </div>
  );
};

export default ReviewDisease;
