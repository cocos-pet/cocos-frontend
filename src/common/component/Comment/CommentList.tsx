import Comment, { CommentType } from "./Comment";
import { commentGetResponse } from "@api/domain/community/post";

interface CommentListProps {
  comments: commentGetResponse["data"];
}

const CommentList = ({ comments }: CommentListProps) => {
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
          onReplyClick={() => onReplyClick(comment.id)}
        />
      ))}
    </div>
  );
};

export default CommentList;
