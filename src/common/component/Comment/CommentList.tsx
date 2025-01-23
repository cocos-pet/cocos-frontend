import Comment from "./Comment";
import { commentGetResponse } from "@api/domain/community/post";

interface CommentListProps {
  comments?: commentGetResponse["data"];
  onCommentReplyClick?: (
    nickname: string | undefined,
    commentId: number | undefined
  ) => void;
}

const CommentList = ({ comments, onCommentReplyClick }: CommentListProps) => {
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
        />
      ))}
    </div>
  );
};

export default CommentList;
