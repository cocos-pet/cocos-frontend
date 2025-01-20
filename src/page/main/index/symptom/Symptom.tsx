import { useGetBodyParts } from "@api/domain/main/hook";
import * as styles from "./Symptom.css";

interface GetBodyProps {
  petProblem: string;
}

const Symptom = ({ petProblem }: GetBodyProps) => {
  const { data: bodyParts } = useGetBodyParts(petProblem);

  const handleClick = (name: string) => {
    console.log(`${name} 버튼이 클릭되었습니다.`);
  };
  const body = bodyParts?.data?.bodies || [];
  return (
    <div className={styles.symptomContainer}>
      <p className={styles.symptomTitle}>증상이 나타나는 부위가 어딘가요?</p>
      <div className={styles.symptomGrid}>
        {body.map((body) => {
          console.log(body.image);
          if (!body.image) {
            console.log(`Image not found for ${body.name}`);
          }
          return (
            <button
              key={body.id}
              className={styles.symptomItem}
              onClick={() => handleClick(body.name as string)}
              aria-label={`증상 부위: ${body.name}`}
              type="button"
            >
              <img src={body.image} alt={`${body.name} 아이콘`} />
              <p className={styles.symptomName}>{body.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Symptom;
