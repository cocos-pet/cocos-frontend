import * as styles from "./Comment.css";
import { IcEllipses, IcMessage } from "@asset/svg";
import SubCommentList from "../SubComment/SubCommentList";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import useModalStore from "@store/moreModalStore.ts";
import {
  commentGetResponseCommentType,
  deleteComment,
} from "@api/domain/community/post";
import { useDeleteComment } from "@api/domain/community/post/hook.ts";
import BottomSheet from "@common/component/BottomSheet/BottomSheet.tsx";
import { useCategoryFilterStore } from "@page/mypage/edit-pet/store/categoryFilter.ts";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet.tsx";

interface CommentProps {
  comment: commentGetResponseCommentType;
  onReplyClick?: (id: number | undefined) => void;
}

const Comment = ({ comment, onReplyClick }: CommentProps) => {
  const handleReplyClick = () => {
    if (onReplyClick) {
      onReplyClick(comment.id);
    }
  };
  ㄴ;
  if (!comment) return;
  const { isOpen, setOpen } = useCategoryFilterStore();

  const { mutate: deleteComment } = useDeleteComment(comment.id);

  const onDeleteClick = () => {
    deleteComment();
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
              {comment.createdAt ? comment.createdAt.toLocaleString() : ""}
            </span>
          </div>
          <MoreModal
            onDelete={() => setOpen(true)}
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
          <SubCommentList subComments={comment.subComments} />
        </div>
      )}
      <SimpleBottomSheet
        isOpen={isOpen}
        content={"댓글을 정말 삭제할까요?"}
        handleClose={() => setOpen(false)}
        leftOnClick={() => setOpen(false)}
        leftText={"취소"}
        rightOnClick={onDeleteClick}
        rightText={"삭제할게요"}
      />
    </div>
  );
};

export default Comment;
