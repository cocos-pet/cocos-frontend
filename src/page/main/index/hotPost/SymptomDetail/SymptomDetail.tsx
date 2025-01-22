import { useSearchParams, useNavigate } from "react-router-dom";
import * as styles from "./SymptomDetail.css";
import Content from "@common/component/Content/Content";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { Icfilter, Icfilteron, IcLeftarrow } from "@asset/svg";
import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet";
import { useFilterStore } from "@store/filter";
import { PATH } from "@route/path";
import { formatTime } from "@shared/util/formatTime";
import { usePostPostFilters } from "@api/domain/community/search/hook";
import { useEffect, useState, useCallback } from "react";
import { components } from "@type/schema";

const SymptomDetail = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const typeId = searchParams.get("id"); 
  const [posts, setPosts] = useState<components["schemas"]["PostResponse"][]>([]);

  const { mutate: fetchPosts } = usePostPostFilters();

  const fetchPostData = useCallback(() => {
    if (!typeId) return;
    fetchPosts({ categoryId: Number(typeId) }, { onSuccess: (data) => setPosts(data) });
  }, [fetchPosts, typeId]);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);

  const navigate = useNavigate();

  const { toggleOpen, selectedChips } = useFilterStore();
  const isFilterOn =
    !!selectedChips.breedId.length || !!selectedChips.diseaseIds.length || !!selectedChips.symptomIds.length;

  if (!type || !typeId) {
    return (
      <div>
        <h1>해당 카테고리는 존재하지 않습니다</h1>
      </div>
    );
  }

  // 게시글이 없는 경우 처리
  if (posts.length === 0) {
    return (
      <div>
        <h1>게시글이 없습니다.</h1>
      </div>
    );
  }

  return (
    <div className={styles.categoryContainer}>
      <HeaderNav
        leftIcon={<IcLeftarrow />}
        centerContent={type} 
        onLeftClick={() => navigate(PATH.COMMUNITY.ROOT)} 
      />

      {type !== "magazine" && (
        <div className={styles.filterContainer}>
          {isFilterOn ? <Icfilteron onClick={toggleOpen} width={24} /> : <Icfilter onClick={toggleOpen} width={24} />}
          <FilterBottomSheet />
        </div>
      )}

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
            onClick={() => navigate(`${PATH.COMMUNITY.ROOT}/${post.id}`)} 
            timeAgo={formatTime(post.updatedAt as string)}
            category={post.category}
          />
        ))}
      </div>
    </div>
  );
};

export default SymptomDetail;
