import { useGetBodyParts } from "@api/domain/main/hook";
import * as styles from "./Symptom.css";

const Symptom = () => {
  const { data: bodyParts } = useGetBodyParts("SYMPTOM");

  const handleClick = (name: string) => {
    console.log(`${name} 버튼이 클릭되었습니다.`);
  };

  const body = bodyParts?.data?.bodies || [];

  return (
    <div className={styles.symptomContainer}>
      <p className={styles.symptomTitle}>증상이 나타나는 부위가 어딘가요?</p>
      <div className={styles.symptomGrid}>
        {body.map((bodyPart) => (
          <button
            key={bodyPart.id}
            className={styles.symptomItem}
            onClick={() => handleClick(bodyPart.name as string)}
            aria-label={`증상 부위: ${bodyPart.name}`}
            type="button"
          >
            <img src={bodyPart.image} alt={`${bodyPart.name} 아이콘`} />
            <p className={styles.symptomName}>{bodyPart.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Symptom;
