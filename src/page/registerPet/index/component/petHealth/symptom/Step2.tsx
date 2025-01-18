import { useState } from "react"; // useState import
import * as styles from "./Step2.css";

import Docs from "@page/onboarding/index/common/docs/Docs";
import Title from "@page/onboarding/index/common/title/Title";
import { GOGO, BodyPart } from "./constant";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip";

const Step2 = () => {
  const [selectedDiseases, setSelectedDiseases] = useState<number[]>([]); // 선택된 disease.id를 관리

  const handleChipClick = (diseaseId: number) => {
    setSelectedDiseases((prevSelected) => {
      // 질병이 이미 선택된 경우 제거
      if (prevSelected.includes(diseaseId)) {
        return prevSelected.filter((id) => id !== diseaseId);
      }

      // 7개 미만일 때만 선택 가능
      return prevSelected.length < 7 ? [...prevSelected, diseaseId] : prevSelected;
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
                <Chip key={disease.id} label={disease.name} onClick={() => handleChipClick(disease.id)} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 하단 영역 */}
      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button
          label="다음"
          size="large"
          variant="solidPrimary"
          disabled={selectedDiseases.length === 0 || selectedDiseases.length > 7} // 0개 또는 7개 이상일 때 비활성화
          onClick={handleNext}
        />
      </div>
    </>
  );
};

export default Step2;
