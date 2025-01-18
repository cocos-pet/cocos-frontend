import * as styles from "./Step1.css";
import Title from "@page/onboarding/index/common/title/Title";
import Docs from "@page/onboarding/index/common/docs/Docs";
import { Button } from "@common/component/Button";
import { IcIcons } from "@asset/svg";
import { DISEASE, BodyPart } from "@page/registerPet/index/component/petHealth/disease/constant";
import { useState } from "react";

const Step1 = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleBody = (id: number) => {
    setSelectedIds((prev) => {
      // 이미 선택된 아이템일 경우 해제
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }

      // 선택된 아이템이 2개 미만일 경우 추가
      if (prev.length < 2) {
        return [...prev, id];
      }

      // 선택된 아이템이 2개 이상이면 변경하지 않음
      return prev;
    });
  };

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
        <div>
          <Title text="질병 부위를 선택하면" />
          <Title text="맞춤형 정보를 추천해드려요" />
        </div>
        <Docs text="최대 2개까지 선택할 수 있어요" />
      </div>

      {/* 컨텐츠 영역 */}
      <div className={styles.contentWrapper}>
        {DISEASE.data.bodies.map((body: BodyPart) => (
          <button
            key={body.id}
            // 선택에따른 색상변화 효과가 아직 확정이 안나서 일단 아래와 같이 구현해 두었습니다
            className={`${styles.contentItem} ${selectedIds.includes(body.id) ? styles.selected : ""}`}
            onClick={() => handleBody(body.id)}
            type="button"
          >
            <IcIcons width={56} height={56} />
            <p>{body.name}</p>
          </button>
        ))}
      </div>

      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button
          label="다음"
          size="large"
          variant="solidPrimary"
          disabled={selectedIds.length === 0}
          onClick={handleNext}
        />
      </div>
    </>
  );
};

export default Step1;
