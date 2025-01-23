import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./SelectPost.css";
import Divider from "@common/component/Divider/Divider";
import { IcUnderline } from "@asset/svg";
import Content from "@common/component/Content/Content";
import { usePostPostFilters } from "@api/domain/community/search/hook";
import { postPostFiltersResponse } from "@api/domain/community/search";
import { PATH } from "@route/path";
import { formatTime } from "@shared/util/formatTime";

const PostList = () => {
  const [isRecentPost, setIsRecentPost] = useState(true);
  const [posts, setPosts] = useState<
    NonNullable<postPostFiltersResponse["data"]>["posts"]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // 페이지 이동

  const { mutate: fetchPosts } = usePostPostFilters();

  const fetchPostData = useCallback(() => {
    setIsLoading(true);
    const sortBy = isRecentPost ? "RECENT" : "POPULAR";
    fetchPosts(
      { sortBy },
      {
        onSuccess: (data) => {
          const fetchedPosts = data;
          if (fetchedPosts) {
            setPosts(fetchedPosts);
          } else {
            console.error("API 응답에서 posts 데이터를 찾을 수 없습니다.");
          }
        },
        onError: (error) => {
          console.error(
            "게시물 데이터를 가져오는 중 오류가 발생했습니다:",
            error
          );
        },
        onSettled: () => {
          setIsLoading(false);
        },
      }
    );
  }, [isRecentPost, fetchPosts]);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <button
          type="button"
          className={styles.tabButton({ isActive: isRecentPost })}
          onClick={() => setIsRecentPost(true)}
        >
          최신글
          {isRecentPost && <IcUnderline className={styles.underline} />}
        </button>
        <button
          type="button"
          className={styles.tabButton({ isActive: !isRecentPost })}
          onClick={() => setIsRecentPost(false)}
        >
          인기글
          {!isRecentPost && <IcUnderline className={styles.underline} />}
        </button>
      </div>
      <Divider size="small" />

      {/* 게시물 리스트 */}
      <div className={styles.postList}>
        {isLoading ? (
          <p>게시물을 불러오는 중입니다...</p>
        ) : posts && posts.length > 0 ? (
          posts.map((post) => (
            <Content
              key={post.id}
              breed={post.breed}
              petAge={post.petAge}
              postTitle={post.title}
              postContent={post.content}
              likeCnt={post.likeCount}
              commentCnt={post.commentCount}
              postImage={post.image}
              likeIconType={"curious"}
              onClick={() => navigate(`${PATH.COMMUNITY.ROOT}/${post.id}`)}
              timeAgo={formatTime(post.updatedAt as string)}
              category={post.category}
            />
          ))
        ) : (
          <p>게시물 없다~</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
