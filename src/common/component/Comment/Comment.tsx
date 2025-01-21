import * as styles from "./Comment.css";
import { IcEllipses, IcMessage } from "@asset/svg";
import SubCommentList from "../SubComment/SubCommentList";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import useModalStore from "@store/moreModalStore.ts";
import {
  commentGetResponseCommentType,
  deleteComment,
} from "@api/domain/community/post";
import {
  useDeleteComment,
  useDeleteSubComment,
} from "@api/domain/community/post/hook.ts";
import { useCategoryFilterStore } from "@page/mypage/edit-pet/store/categoryFilter.ts";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet.tsx";
import { formatTime } from "@shared/util/formatTime.ts";

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

  if (!comment) return;
  const { isOpen, setOpen, setContentsType } = useCategoryFilterStore();
  const { mutate: deleteComment } = useDeleteComment(comment.id);

  // @공준혁 : 댓글 삭제 버튼 클릭시 subcomment 로 보내줄 함수입니다.
  const onDeleteClick = () => {
    deleteComment();
    console.log("deleteComment");
    setOpen(false);
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
              {comment.createdAt ? formatTime(comment.createdAt) : ""}
            </span>
          </div>
          <MoreModal
            onDelete={() => {
              setOpen(true);
              // setContentsType("comment");
            }}
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
            subComments={comment.subComments}
            onCommentDelete={() => onDeleteClick()}
          />
        </div>
      )}
      {/*<SimpleBottomSheet*/}
      {/*  isOpen={isOpen}*/}
      {/*  content={"댓글을 정말 삭제할까요?"}*/}
      {/*  handleClose={() => setOpen(false)}*/}
      {/*  leftOnClick={() => setOpen(false)}*/}
      {/*  leftText={"취소"}*/}
      {/*  rightOnClick={() => {*/}
      {/*    onDeleteClick();*/}
      {/*    console.log("deleteSubComment");*/}
      {/*  }}*/}
      {/*  rightText={"삭제할게요"}*/}
      {/*/>*/}
    </div>
  );
};

export default Comment;
