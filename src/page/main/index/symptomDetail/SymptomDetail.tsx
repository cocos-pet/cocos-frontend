import { useSearchParams, useNavigate } from "react-router-dom";
import * as styles from "./SymptomDetail.css";
import Content from "@common/component/Content/Content";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcLeftarrow, IcUnderline } from "@asset/svg";
import { PATH } from "@route/path";
import { formatTime } from "@shared/util/formatTime";
import { usePostPostFilters } from "@api/domain/community/search/hook";
import { useEffect, useState, useCallback } from "react";
import { components } from "@type/schema";

const symptomMapping: { [key: string]: string } = {
  1: "피부/털",
  2: "배/소화기",
  3: "소변/신장",
  4: "눈",
  5: "귀",
  6: "입",
  7: "배설",
  8: "폐/호흡기",
  9: "뼈/관절/근육",
  10: "뇌/신경계",
  11: "체중/몸",
  12: "행동/소리",
};

const SymptomDetail = () => {
  const [isRecentPost, setIsRecentPost] = useState(true);
  const [searchParams] = useSearchParams();
  const typeId = searchParams.get("id");
  const [posts, setPosts] = useState<components["schemas"]["PostResponse"][]>([]);
  const { mutate: fetchPosts } = usePostPostFilters();

  const fetchPostData = useCallback(() => {
    const sortBy = "RECENT";
    if (!typeId) return;

    fetchPosts(
      { categoryId: Number(typeId), sortBy },
      {
        onSuccess: (data) => {
          console.log("응답 데이터:", data);
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

  const navigate = useNavigate();

  if (!typeId) {
    return (
      <div>
        <h1>해당 카테고리는 존재하지 않습니다</h1>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div>
        <h1>게시글이 없습니다.</h1>
      </div>
    );
  }

  const symptomName = typeId ? symptomMapping[typeId] : "증상";

  return (
    <div className={styles.categoryContainer}>
      <HeaderNav leftIcon={<IcLeftarrow />} centerContent={symptomName} onLeftClick={() => navigate(PATH.MAIN)} />
      <div className={styles.tabContainer}>
        <button
          type="button"
          className={styles.tabButton({ isActive: isRecentPost })}
          onClick={() => setIsRecentPost(true)}
        >
          커뮤니티
          {isRecentPost && <IcUnderline className={styles.underline} />}
        </button>
      </div>

      {/* 게시글 목록 */}
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <Content
            key={post.id}
            breed={post.breed}
            petAge={post.petAge}
            postTitle={post.title}
            postContent={post.content}
            likeCnt={post.likeCount}
            commentCnt={post.commentCount}
            postImage={post.image}
            onClick={() => {
              navigate(`${PATH.COMMUNITY.ROOT}/${post.id}`);
            }}
            timeAgo={formatTime(post.updatedAt as string)}
            category={post.category}
          />
        ))}
      </div>
    </div>
  );
};

export default SymptomDetail;
