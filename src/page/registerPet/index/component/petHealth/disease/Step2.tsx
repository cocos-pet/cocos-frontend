import { useState } from "react";
import Chip from "@common/component/Chip/Chip";
import { GOGO, BodyPart } from "./Step1Constant";
import { Button } from "@common/component/Button";
import Docs from "@page/onboarding/index/common/docs/Docs";
import Title from "@page/onboarding/index/common/title/Title";
import * as styles from "./Step2.css";

const Step2 = () => {
  const [selectedDiseases, setSelectedDiseases] = useState<number[]>([]);
  console.log(selectedDiseases);

  const handleChipClick = (diseaseId: number) => {
    setSelectedDiseases((prevSelected) => {
      // 질병이 이미 선택된 경우 제거
      if (prevSelected.includes(diseaseId)) {
        return prevSelected.filter((id) => id !== diseaseId);
      }
      // 7개 미만일 때만 선택 가능
      if (prevSelected.length <= 7) {
        return [...prevSelected, diseaseId];
      }
      // 7개 이상 선택되면 변경하지 않음
      return prevSelected;
    });
  };

  return (
    <>
      <div className={styles.title}>
        <Title text="궁금한 질병을 모두 선택해주세요" />
        <Docs text="최대 7개까지 선택할 수 있어요" />
      </div>

      <div className={styles.contentLayout}>
        {GOGO.data.bodies.map((body: BodyPart) => (
          <div key={body.id} className={styles.selectedBody}>
            <span>{body.name}</span>
            <div className={styles.chipLayout}>
              {body.diseases.map((disease) => (
                <Chip
                  key={disease.id}
                  label={disease.name}
                  isSelected={selectedDiseases.includes(disease.id)}
                  onClick={() => handleChipClick(disease.id)}
                  disabled={selectedDiseases.length >= 7 && !selectedDiseases.includes(disease.id)} // 7개 선택 시 비활성화
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.btnWrapper}>
        <Button label="돌아가기" size="large" variant="solidNeutral" onClick={() => {}} />
        <Button
          label="다음"
          size="large"
          variant="solidPrimary"
          disabled={selectedDiseases.length === 0}
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default Step2;
