import * as styles from "./Symptom.css";
import { symptomMock } from "@shared/constant/symptomMock";

const Symptom = () => {
  const handleClick = (name: string) => {
    console.log(`${name} 버튼이 클릭되었습니다.`);
  };

  return (
    <div className={styles.symptomContainer}>
      <p className={styles.symptomTitle}>증상이 나타나는 부위가 어딘가요?</p>
      <div className={styles.symptomGrid}>
        {symptomMock.map((symptom) => (
          <button
            key={symptom.id}
            className={styles.symptomItem}
            onClick={() => handleClick(symptom.name)}
            aria-label={`증상 부위: ${symptom.name}`}
            type="button"
          >
            <img src={symptom.image} alt={`${symptom.name} 아이콘`} />

            <p className={styles.symptomName}>{symptom.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Symptom;
