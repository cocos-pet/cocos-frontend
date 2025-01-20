import Chip from "@common/component/Chip/Chip";
import { GOGO, BodyPart } from "@page/registerPet/index/component/petHealth/disease/Step2Constant";
import Docs from "@page/onboarding/index/common/docs/Docs";
import Title from "@page/onboarding/index/common/title/Title";
import * as styles from "./Step2.css";

const Step2 = ({
  selectedDiseases,
  onDiseaseSelection
}: {
  selectedDiseases: number[];
  onDiseaseSelection: (diseaseId: number) => void;
}) => {
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
                  onClick={() => onDiseaseSelection(disease.id)}
                  disabled={selectedDiseases.length >= 7 && !selectedDiseases.includes(disease.id)} // 7개 선택 시 비활성화
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Step2;