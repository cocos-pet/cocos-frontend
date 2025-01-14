import { Button } from "@common/component/Button";
import { IcoSkeleton, IcPostImageSkeleton, IcTest } from "@asset/svg";
import { styles } from "@page/community/[postId]/Post.css.ts";
import Chip from "@common/component/Chip/Chip.tsx";

const PostDetail = () => {
  const postData = {
    nickname: "리트리버 사랑해",
    userProfile: "userProfile",
    breed: "골든리트리버",
    petAge: 12,
    likeCounts: 0,
    totalCommentCounts: 0,
    title: "강아지 헥헥 거림 증상",
    content: "강아지가 2주전부터 헥헤걱림 증상이 심한데 원인을 알 수 있을까요?",
    images: [],
    category: "category",
    tags: ["tag1", "tag2"],
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
      <div>
        <div className={styles.title}>{postData.title}</div>
        <div className={styles.content}>{postData.content}</div>
      </div>
      <IcPostImageSkeleton className={styles.image} />
      <IcPostImageSkeleton className={styles.image} />
      <div className={styles.labelwrap}>
        {postData.tags.map((tag, index) => (
          <Chip label={tag} color={"blue"} />
        ))}
      </div>
      <div className={styles.countwrap}></div>
    </div>
  );
};

export default PostDetail;
