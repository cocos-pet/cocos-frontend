import * as styles from "./Comment.css";
import { IcEllipse57, IcMessage, IcEllipses } from "@asset/svg";

interface CommentData {
  id: number;
  nickname: string;
  breed: string;
  petAge: number;
  createdAt: string;
  content: string;
  profileImage: string;
}

interface CommentProps {
  comments: CommentData[];
}

const Comment = ({ comments }: CommentProps) => {
  return (
    <div className={styles.commentContainer}>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentItem}>
          <div className={styles.contentContainer}>
            <div className={styles.header}>
              <img src={comment.profileImage} className={styles.profileImage} />
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
              <IcMessage />
              <p>답글쓰기</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
``;

export default Comment;
