import Comment from "./Comment";
import { commentGetResponse } from "@api/domain/community/post";
import React from "react";

interface CommentListProps {
  comments?: commentGetResponse["data"];
  onCommentReplyClick?: (nickname: string | undefined, commentId: number | undefined) => void;
  onModalClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const CommentList = ({ comments, onCommentReplyClick, onModalClose }: CommentListProps) => {
  const onDelete = (id?: number) => {
    // TODO :  댓글 삭제
  };

  return (
    <div>
      {comments?.comments?.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={() => onDelete(comment.id)}
          onCommentReplyClick={onCommentReplyClick}
          onModalClose={onModalClose}
        />
      ))}
    </div>
  );
};

export default CommentList;
