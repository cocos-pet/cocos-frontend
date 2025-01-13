import * as styles from "./Comment.css";
import { IcEllipse57, IcMessage, IcEllipses } from "@asset/svg";
import mockComments from "@common/component/Comment/mock/mockComments";

const Comment = () => {
  const { comments } = mockComments;

  return (
    <div className={styles.commentContainer}>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentItem}>
          <div className={styles.contentContainer}>
            <div className={styles.header}>
              <IcEllipse57 />
              <div className={styles.headerInfo}>
                <IcEllipses className={styles.containerOptionsIcon} />
                <span className={styles.nickname}>{comment.nickname}</span>
                <span className={styles.meta}>
                  {comment.breed}·{comment.petAge}살 · {comment.createdAt}
                </span>
              </div>
            </div>
            <p className={styles.text}>{comment.content}</p>

            <div className={styles.replyContainer}>
              <IcMessage className={styles.icon} />
              <p className={styles.replyText}>답글쓰기</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
