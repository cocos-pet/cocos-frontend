import Chip from "@common/component/Chip/Chip";
import Docs from "@app/onboarding/index/common/docs/Docs";
import Title from "@app/onboarding/index/common/title/Title";
import * as styles from "@app/register-pet/index/component/petHealth/disease/Step2.css";
import { symptomGetResponse } from "@api/domain/register-pet/symptom";

const SymStep2 = ({
  data,
  selectedSymptom,
  onSymptomSelection,
}: {
  data: symptomGetResponse["data"];
  selectedSymptom: number[];
  onSymptomSelection: (diseaseId: number) => void;
}) => {
  if (!data || !data.bodies) {
    return null;
  }
  return (
    <>
      <div className={styles.title}>
        <Title text="궁금한 증상을 모두 선택해주세요" />
        <Docs text="최대 7개까지 선택할 수 있어요" />
      </div>

      <div className={styles.contentLayout}>
        {data?.bodies.map((body) => (
          <div key={body.id} className={styles.selectedBody}>
            <span>{body.name}</span>
            <div className={styles.chipLayout}>
              {body.symptoms?.map((symptom) => {
                if (!symptom?.id || !symptom?.name) return null;
                return (
                  <Chip
                    key={symptom.id}
                    label={symptom.name}
                    isSelected={selectedSymptom.includes(symptom.id)}
                    onClick={() => {
                      if (symptom.id) onSymptomSelection(symptom.id);
                    }}
                    disabled={selectedSymptom.length >= 7 && !selectedSymptom.includes(symptom.id)} // 7개 선택 시 비활성화
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SymStep2;
