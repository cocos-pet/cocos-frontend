import Chip from "@common/component/Chip/Chip";
import { TOTO, BodyPart } from "@page/register-pet/index/component/petHealth/symptom/SymStep2Constant";
import Docs from "@page/onboarding/index/common/docs/Docs";
import Title from "@page/onboarding/index/common/title/Title";
import * as styles from "@page/register-pet/index/component/petHealth/disease/Step2.css";

const SymStep2 = ({
  selectedSymptom,
  onSymptomSelection,
}: {
  selectedSymptom: number[];
  onSymptomSelection: (diseaseId: number) => void;
}) => {
  return (
    <>
      <div className={styles.title}>
        <Title text="궁금한 증상을 모두 선택해주세요" />
        <Docs text="최대 7개까지 선택할 수 있어요" />
      </div>

      <div className={styles.contentLayout}>
        {TOTO.data.bodies.map((body: BodyPart) => (
          <div key={body.id} className={styles.selectedBody}>
            <span>{body.name}</span>
            <div className={styles.chipLayout}>
              {body.symptom.map((symptom) => (
                <Chip
                  key={symptom.id}
                  label={symptom.name}
                  isSelected={selectedSymptom.includes(symptom.id)}
                  onClick={() => onSymptomSelection(symptom.id)}
                  disabled={selectedSymptom.length >= 7 && !selectedSymptom.includes(symptom.id)} // 7개 선택 시 비활성화
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SymStep2;
