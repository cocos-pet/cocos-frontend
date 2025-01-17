import { useSearchParams } from "react-router-dom";
import * as styles from "./Category.css";

const validTypes = ["symptom", "hospital", "healing", "magazine"]; // 유효한 타입 리스트

const Category = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type"); // 쿼리 파라미터에서 `type` 값 가져오기

  if (!type || !validTypes.includes(type)) {
    // 유효하지 않은 타입 처리
    return (
      <div className={styles.invalidType}>
        <h1>해당 타입은 존재하지 않습니다.</h1>
        <p>올바른 카테고리를 선택해주세요.</p>
      </div>
    );
  }

  // 유효한 타입 처리 -> 대분류 눌렀을 때
  return (
    <div className={styles.categoryContainer}>
      <h1>{type} 카테고리</h1>
      <p>이곳에 {type} 카테고리에 대한 내용을 추가하세요.</p>
    </div>
  );
};

export default Category;
