import Comment, { CommentType } from "./Comment";

interface CommentListProps {
  comments: CommentType[];
}

const CommentList = ({ comments }: CommentListProps) => {
  const onDelete = (id: number) => {
    // TODO :  댓글 삭제
  };

  const onReplyClick = (id: number) => {
    // TODO : 대댓글 작성
  };

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={() => onDelete(comment.id)}
          onReplyClick={onReplyClick}
        />
      ))}
    </div>
  );
};

export default CommentList;
