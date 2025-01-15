import * as styles from "./Comment.css";
import { IcEllipses, IcMessage } from "@asset/svg";

export interface CommentData {
  id: number;
  nickname: string;
  breed: string;
  petAge: number;
  content: string;
  createdAt: string;
  isWriter: string;
  profileImage: string;
}

interface CommentProps {
  comment: CommentData;
  onReplyClick? :(id:number) =>void;
}

const Comment = ({ comment, onReplyClick }: CommentProps) => {
  const handleReplyClick = () =>{
    if(onReplyClick){
      onReplyClick(comment.id);
    }
  }
  return (
    <div className={styles.commentItem}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <img src={comment.profileImage} className={styles.profileImage} alt="프로필 이미지" />
          <div className={styles.headerInfo}>
            <IcEllipses className={styles.containerOptionsIcon} />
            <span className={styles.nickname}>{comment.nickname}</span>
            <span className={styles.meta}>
              {comment.breed}·{comment.petAge}살 · {comment.createdAt}
            </span>
          </div>
        </div>

        <p className={styles.text}>{comment.content}</p>

        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<div className={styles.replyContainer} onClick= {handleReplyClick}>
          <IcMessage style={{ width: "1.8rem" }} />
          <p>답글쓰기</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
