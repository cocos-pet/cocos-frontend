import { Button } from "@common/component/Button";
import { IcoSkeleton, IcTest } from "@asset/svg";
import { styles } from "@page/community/[postId]/Post.css.ts";

const PostDetail = () => {
  const postData = {
    nickname: "리트리버 사랑해",
    userProfile: "userProfile",
    breed: "골든리트리버",
    petAge: 12,
    likeCounts: 0,
    totalCommentCounts: 0,
    title: "title",
    content: "content",
    images: [],
    category: "category",
    tags: [],
    createdAt: "2025-01-13T10:00:00Z",
    updatedAt: "2025-01-13T12:00:00Z",
  };

  return (
    <div className={styles.container}>
      <Button
        leftIcon={<IcTest />}
        label={"병원고민"}
        variant={"outlineNeutral"}
        size={"tag"}
        disabled={true}
      />
      <div className={styles.top}>
        {
          // <img src={postData.userProfile} alt="userProfile"/>
          <IcoSkeleton className={styles.userProfile} />
        }
        <div className={styles.info}>
          <div className={styles.infoName}>{postData.nickname}</div>
          <div className={styles.infoDetail}>
            {postData.breed}·{postData.petAge}개 · {postData.createdAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
