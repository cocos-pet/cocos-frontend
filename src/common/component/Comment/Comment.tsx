"use client";

import * as styles from "./Comment.css";
import { IcMessage } from "@asset/svg";
import SubCommentList from "../SubComment/SubCommentList";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import useModalStore from "@store/moreModalStore.ts";
import { commentGetResponseCommentType } from "@api/domain/community/post";
import { formatTime } from "@shared/util/formatTime.ts";
import { useDeleteComment } from "@api/domain/community/post/hook.ts";
import SimpleBottomSheet from "../../../design-system/Button/SimpleBottomSheet/SimpleBottomSheet.tsx";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCategoryFilterStore } from "../../../app/mypage/edit-pet/_store/categoryFilter.ts";
import { useAuth } from "@providers/AuthProvider";
import { useIsPetRegistered } from "@common/hook/useIsPetRegistered";
import { PATH } from "@route/path";
import { Modal } from "../Modal/Modal.tsx";

interface CommentProps {
  comment: commentGetResponseCommentType;
  onCommentReplyClick?: (
    nickname: string | undefined,
    commentId: number | undefined
  ) => void;

  onDelete?: () => void;
  onModalClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Comment = ({
  comment,
  onCommentReplyClick,
  onDelete,
  onModalClose,
}: CommentProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const isPetRegistered = useIsPetRegistered();

  const handleReplyClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    if (!isPetRegistered) {
      router.push(PATH.ONBOARDING.COMPLETE);
      return;
    }

    onCommentReplyClick?.(comment.nickname, comment.id);
  };

  if (!comment) return;
  const { setContentsType } = useCategoryFilterStore();
  const [isOpen, setOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { mutate: deleteComment } = useDeleteComment(comment.id);
  const { openModalId, setOpenModalId } = useModalStore();

  const onDeleteClick = (id: number) => {
    deleteComment(id);
    setOpen(false);
  };

  const handleProfileClick = (nickname: string) => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    if (!isPetRegistered) {
      router.push(PATH.ONBOARDING.COMPLETE);
      return;
    }
    router.push(`/profile?nickname=${nickname}`);
  };

  const onSubCommentReplyClick = (nickname: string | undefined, id: number | undefined) => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    if (!isPetRegistered) {
      router.push(PATH.ONBOARDING.COMPLETE);
      return;
    }
    onCommentReplyClick?.(nickname, id);
  };

  return (
    <div className={styles.commentItem} onClick={onModalClose}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <img
            src={comment.profileImage}
            className={styles.profileImage}
            alt="프로필 이미지"
            onClick={() => handleProfileClick(comment.nickname as string)}
          />
          <div className={styles.headerInfo}>
            <span className={styles.nickname}>
              {comment.nickname}
              <p className={styles.blue}>{comment.isPostWriter && "작성자"}</p>
            </span>
            <span className={styles.meta}>
              {comment.breed} · {comment.petAge}살 ·{" "}
              {comment.createdAt
                ? formatTime(comment.createdAt).toLocaleString()
                : ""}
            </span>
          </div>
          {comment.isWriter && (
            <MoreModal
              onDelete={() => {
                setOpen(true);
                setContentsType("comment");
              }}
              iconSize={24}
              isOpen={openModalId === `comment-${comment.id}`}
              onToggleModal={() => setOpenModalId(`comment-${comment.id}`)}
            />
          )}
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
        <div style={{ width: "100%" }}>
          <SubCommentList
            commentId={comment.id}
            subComments={comment.subComments}
            onCommentDelete={onDeleteClick}
            onSubCommentReplyClick={onSubCommentReplyClick}
            onModalClose={onModalClose}
          />
        </div>
      )}
      <SimpleBottomSheet
        isOpen={isOpen}
        content={"댓글을 정말 삭제할까요?"}
        handleClose={() => setOpen(false)}
        leftOnClick={() => setOpen(false)}
        leftText={"취소"}
        rightOnClick={() => {
          onDeleteClick(comment.id as number);
        }}
        rightText={"삭제할게요"}
      />
      <Modal.Root open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
        <Modal.Content
          title={<Modal.Title>로그인이 필요해요.</Modal.Title>}
          bottomAffix={
            <Modal.BottomAffix>
              <Modal.Close label={"취소"} />
              <Modal.Confirm
                label={"로그인"}
                onClick={() => router.push(PATH.LOGIN)}
              />
            </Modal.BottomAffix>
          }
        >
          코코스를 더 잘 즐기기 위해 로그인을 해주세요.
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

export default Comment;
