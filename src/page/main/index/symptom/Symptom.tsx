import * as styles from "./Symptom.css";
import { symptomMock } from "@shared/constant/symptomMock";

const Symptom = () => {
  return (
    <div className={styles.symptomContainer}>
      <p className={styles.symptomTitle}>증상이 나타나는 부위가 어딘가요?</p>
      <div className={styles.symptomGrid}>
        {symptomMock.map((symptom) => (
          <div key={symptom.id} className={styles.symptomItem}>
            <symptom.icon />
            <p className={styles.symptomName}>{symptom.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Symptom;
