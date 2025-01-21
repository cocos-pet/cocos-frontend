import Comment from "./Comment";
import { commentGetResponse } from "@api/domain/community/post";

interface CommentListProps {
  comments?: commentGetResponse["data"];
  onCommentReplyClick?: (nickname: string | undefined) => void;
  onSubCommentReplyClick?: (nickname: string | undefined) => void;
}

const CommentList = ({
  comments,
  onCommentReplyClick,
  onSubCommentReplyClick,
}: CommentListProps) => {
  const onDelete = (id?: number) => {
    // TODO :  댓글 삭제
  };

  const onReplyClick = (id?: number) => {
    // TODO : 대댓글 작성
  };

  return (
    <div>
      {comments?.comments?.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={() => onDelete(comment.id)}
          onCommentReplyClick={onCommentReplyClick}
          onSubCommentReplyClick={onSubCommentReplyClick}
        />
      ))}
    </div>
  );
};

export default CommentList;
