'use client';

import { useSearchParams as useNextSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useGetBodyParts } from "@api/domain/main/hook";
import * as styles from "./Symptom.css";
import { components } from "@type/schema";
import { useCallback, useEffect, useState } from "react";
import { usePostPostFilters } from "@api/domain/community/search/hook";

const Symptom = () => {
  const searchParams = useNextSearchParams();
  const type = searchParams.get("type");
  const typeId = searchParams.get("id");
  const [posts, setPosts] = useState<components["schemas"]["PostResponse"][]>([]);
  const { data: bodyParts } = useGetBodyParts("SYMPTOM");
  const router = useRouter();

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
            onClick={() => router.push(`/community/detail?type=symptom&id=${bodyPart.id}`)}
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
