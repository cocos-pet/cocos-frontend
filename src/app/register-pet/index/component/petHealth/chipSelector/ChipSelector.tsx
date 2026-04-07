import Chip from "@common/component/Chip/Chip";
import Docs from "@app/onboarding/index/common/docs/Docs";
import Title from "@app/onboarding/index/common/title/Title";
import * as styles from "./ChipSelector.css";

const MAX_PER_CATEGORY = 2;

interface ChipSelectorProps {
  bodyName: string;
  diseases: Array<{ id?: number; name?: string }>;
  symptoms: Array<{ id?: number; name?: string }>;
  selectedDiseaseIds: number[];
  selectedSymptomIds: number[];
  onDiseaseSelection: (id: number) => void;
  onSymptomSelection: (id: number) => void;
}

const ChipSelector = ({
  bodyName,
  diseases,
  symptoms,
  selectedDiseaseIds,
  selectedSymptomIds,
  onDiseaseSelection,
  onSymptomSelection,
}: ChipSelectorProps) => {
  return (
    <>
      <div className={styles.title}>
        <Title
          text={
            <>
              <span className={styles.bodyNameHighlight}>{bodyName}</span> 에서
            </>
          }
        />
        <Title text={"어떤 부분이 더 궁금한가요?"} />
        <Docs text="증상 질병 각각 2개씩 선택할 수 있어요" />
      </div>

      <div className={styles.contentLayout}>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>궁금한 질병</span>
          <div className={styles.chipLayout}>
            {diseases
              .filter((d) => d?.id != null && d?.name)
              .map((disease) => (
                <Chip
                  key={disease.id!}
                  label={disease.name!}
                  isSelected={selectedDiseaseIds.includes(disease.id!)}
                  onClick={() => onDiseaseSelection(disease.id!)}
                  disabled={selectedDiseaseIds.length >= MAX_PER_CATEGORY && !selectedDiseaseIds.includes(disease.id!)}
                />
              ))}
          </div>
        </div>

        <div className={styles.section}>
          <span className={styles.sectionTitle}>궁금한 증상</span>
          <div className={styles.chipLayout}>
            {symptoms
              .filter((s) => s?.id != null && s?.name)
              .map((symptom) => (
                <Chip
                  key={symptom.id!}
                  label={symptom.name!}
                  isSelected={selectedSymptomIds.includes(symptom.id!)}
                  onClick={() => onSymptomSelection(symptom.id!)}
                  disabled={selectedSymptomIds.length >= MAX_PER_CATEGORY && !selectedSymptomIds.includes(symptom.id!)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChipSelector;
