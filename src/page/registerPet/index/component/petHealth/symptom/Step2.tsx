import * as styles from "./Step2.css";

import Docs from "@page/onboarding/index/common/docs/Docs";
import Title from "@page/onboarding/index/common/title/Title";
import { GOGO, BodyPart } from "./constant";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip";
import Spacing from "@common/component/Spacing/Spacing";

const Step2 = () => {
  const handleGoBack = () => {
    console.log("다음 pr에서 구현할래욥.");
  };

  const handleNext = () => {
    console.log("다음 pr에서 구현할래욥.");
  };
  return (
    <>
      {/* 상단 영역 */}
      <div className={styles.title}>
        <Title text="궁금한 질병을 모두 선택해주세요" />
        <Docs text="최대 7개까지 선택할 수 있어요" />
      </div>

      {/* 컨텐츠 영역 */}
      <div className={styles.contentLayout}>
        {GOGO.data.bodies.map((body: BodyPart) => (
          <div key={body.id} className={styles.selectedBody}>
            <span>{body.name}</span>
            <div className={styles.chipLayout}>
              {body.diseases.map((disease) => (
                <Chip key={disease.id} label={disease.name} />
              ))}
            </div>
          </div>
        ))}
        <Spacing marginBottom="11.4" />
      </div>

      {/* 하단 영역 */}

      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음" size="large" variant="solidPrimary" disabled={false} onClick={handleNext} />
      </div>
    </>
  );
};

export default Step2;
