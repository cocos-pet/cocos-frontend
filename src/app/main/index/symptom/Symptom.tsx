import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetBodyParts } from "@api/domain/main/hook";
import * as styles from "./Symptom.css";
import { PATH } from "@route/path";
import { components } from "@type/schema";
import { useCallback, useEffect, useState } from "react";
import { usePostPostFilters } from "@api/domain/community/search/hook";

const Symptom = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const typeId = searchParams.get("id");
  const [posts, setPosts] = useState<components["schemas"]["PostResponse"][]>([]);
  const { data: bodyParts } = useGetBodyParts("SYMPTOM");
  const navigate = useNavigate();

  const { mutate: fetchPosts } = usePostPostFilters();

  const fetchPostData = useCallback(() => {
    if (!typeId) return;
    fetchPosts(
      { categoryId: Number(typeId) },
      {
        onSuccess: (data) => {
          setPosts(data);
        },
        onError: (error) => {
          console.error("데이터 가져오기 실패:", error);
        },
      },
    );
  }, [fetchPosts, typeId]);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);

  const body = bodyParts?.data?.bodies || [];

  return (
    <div className={styles.symptomContainer}>
      <p className={styles.symptomTitle}>증상이 나타나는 부위가 어딘가요?</p>
      <div className={styles.symptomGrid}>
        {body.slice(0, -2).map((bodyPart) => (
          <button
            key={bodyPart.id}
            className={styles.symptomItem}
            onClick={() => navigate(`${PATH.COMMUNITY.DETAIL}?type=symptom&id=${bodyPart.id}`)} // 수정된 경로
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
