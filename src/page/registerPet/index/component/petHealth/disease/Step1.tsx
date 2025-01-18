import * as styles from "./Step1.css";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { Button } from "@common/component/Button";

const Step1 = () => {
  const handleGoBack = () => {
    console.log("다음 pr에서 구현할래욥.");
  };

  // 다음 버튼
  const handleNext = () => {
    console.log("다음 pr에서 구현할래욥.");
  };
  return (
    <>
      <div className={styles.title}>
        <div>
          <Title text="질병 부위를 선택하면" />
          <Title text="맞춤형 정보를 추천해드려요 " />
        </div>
        <Docs text="최대 2개까지 선택할 수 있어요" />
      </div>
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={false} onClick={handleNext} />
      </div>
    </>
  );
};

export default Step1;
