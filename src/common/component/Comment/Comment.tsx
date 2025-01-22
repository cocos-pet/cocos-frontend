import * as styles from "./Comment.css";
import { IcMessage } from "@asset/svg";
import SubCommentList from "../SubComment/SubCommentList";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import useModalStore from "@store/moreModalStore.ts";
import { commentGetResponseCommentType } from "@api/domain/community/post";
import { formatTime } from "@shared/util/formatTime.ts";

interface CommentProps {
  comment: commentGetResponseCommentType;
  onCommentReplyClick?: (
    nickname: string | undefined,
    commentId: number | undefined
  ) => void;

  onDelete: () => void;
}

const Comment = ({ comment, onCommentReplyClick, onDelete }: CommentProps) => {
  const handleReplyClick = () => {
    if (onCommentReplyClick) {
      onCommentReplyClick(comment.nickname, comment.id);
    }
  };

  const { openModalId, setOpenModalId } = useModalStore();

  return (
    <div className={styles.commentItem}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <img
            src={comment.profileImage}
            className={styles.profileImage}
            alt="프로필 이미지"
          />
          <div className={styles.headerInfo}>
            <span className={styles.nickname}>{comment.nickname}</span>
            <span className={styles.meta}>
              {comment.breed} · {comment.petAge}살 ·{" "}
              {comment.createdAt
                ? formatTime(comment.createdAt).toLocaleString()
                : ""}
            </span>
          </div>
          <MoreModal
            onDelete={onDelete}
            iconSize={24}
            isOpen={openModalId === `comment-${comment.id}`}
            onToggleModal={() => setOpenModalId(`comment-${comment.id}`)}
          />
        </div>

        <p className={styles.text}>{comment.content}</p>

        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div className={styles.replyContainer} onClick={handleReplyClick}>
          <IcMessage style={{ width: "1.8rem" }} />
          <p>답글쓰기</p>
        </div>
      </div>

      {/* 대댓글 리스트 */}
      {comment.subComments && (
        <div>
          <SubCommentList
            commentId={comment.id}
            subComments={comment.subComments}
            onSubCommentReplyClick={onCommentReplyClick}
          />
        </div>
      )}
    </div>
  );
};

export default Comment;
