import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcDeleteBlack } from "@asset/svg/index";
import { Button } from "@common/component/Button";

import * as styles from "./Step4.style.css";
import ReviewContent from "@app/review/write/_component/ReviewContent";

const Step4 = () => {
  const handleGoBack = () => console.log("뒤로가기 구현 예정");
  const handleNext = () => console.log("다음 구현 예정");

  return (
    <div className={styles.wrapper}>
      {/* 상단 리뷰 영역 */}
      <HeaderNav centerContent="리뷰작성(3/4)" leftIcon={<IcDeleteBlack style={{ width: 24, height: 24 }} />} />
      <section className={styles.contentLayout}>
        {/* 4-1. 후기 작성 */}
        <ReviewContent />

        {/* 4-2. 사진 첨부 */}
        <h2>사진 첨부</h2>
      </section>
      {/* 하단 버튼 영역 */}
      <section className={styles.btnLayout}>
        <Button label="이전으로" size="large" variant="solidNeutral" onClick={handleGoBack} />
        <Button label="다음으로" size="large" variant="solidPrimary" onClick={handleNext} />
      </section>
    </div>
  );
};

export default Step4;
