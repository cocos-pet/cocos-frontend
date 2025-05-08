import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcDeleteBlack } from "@asset/svg/index";
import ReviewSymptom from "@app/review/write/_component/ReviewSymptom";
import ReviewPurpose from "@app/review/write/_component/ReviewPurpose";
import ReviewDisease from "@app/review/write/_component/ReviewDisease";
import * as styles from "./Step2.style.css";
import { Button } from "@common/component/Button";

const handleGoBack = () => {
  console.log("뒤로가기 구현 예정");
};

const handleNext = () => {
  console.log("다음 구현 예정, 활성화도!");
};

const Step2 = () => {
  return (
    <>
      {/* 상단 헤더 */}
      <HeaderNav centerContent="리뷰작성(2/4)" leftIcon={<IcDeleteBlack style={{ width: 24, height: 24 }} />} />
      <div className={styles.wrapper}>
        {/* 2-1. 증상 */}
        <ReviewSymptom />

        {/* 2-2. 방문 목적 */}
        <ReviewPurpose />

        {/* 2-3. 진단 내용 */}
        <ReviewDisease />
      </div>
      {/* 하단 버튼 */}
      <div className={styles.btnLayout}>
        <Button label="이전으로" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음으로" size="large" variant="solidPrimary" disabled={true} onClick={handleNext} />
      </div>
    </>
  );
};

export default Step2;
