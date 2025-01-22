import Chip from "@common/component/Chip/Chip";
import Docs from "@page/onboarding/index/common/docs/Docs";
import Title from "@page/onboarding/index/common/title/Title";
import * as styles from "./Step2.css";
import { diseaseGetResponse } from "@api/domain/registerPet/disease";

const Step2 = ({
  data,
  selectedDiseases,
  onDiseaseSelection,
}: {
  data: diseaseGetResponse["data"];
  selectedDiseases: number[];
  onDiseaseSelection: (diseaseId: number) => void;
}) => {
  if (!data || !data.bodies) {
    return null;
  }

  return (
    <>
      <div className={styles.title}>
        <Title text="궁금한 질병을 모두 선택해주세요" />
        <Docs text="최대 7개까지 선택할 수 있어요" />
      </div>

      <div className={styles.contentLayout}>
        {data?.bodies.map((body) => (
          <div key={body.id} className={styles.selectedBody}>
            <span>{body.name}</span>
            <div className={styles.chipLayout}>
              {/* diseases가 존재하는 경우에만 렌더링 */}
              {body.diseases?.map((disease) => {
                if (!disease?.id || !disease?.name) return null;
                return (
                  <Chip
                    key={disease.id}
                    label={disease.name}
                    isSelected={selectedDiseases.includes(disease.id)}
                    onClick={() => {
                      // 추가 조건으로 id 확인
                      if (disease.id) {
                        onDiseaseSelection(disease.id);
                      }
                    }}
                    disabled={selectedDiseases.length >= 7 && !selectedDiseases.includes(disease.id)} // 7개 선택 시 비활성화
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

export default Step2;
