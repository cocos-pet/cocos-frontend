import Comment, { CommentType } from "./Comment";

interface CommentListProps {
  comments: CommentType[];
}

const CommentList = ({ comments }: CommentListProps) => {
  const onDelete = (id: number) => {
    // TODO :  댓글 삭제
  };

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={() => onDelete(comment.id)}
        />
      ))}
    </div>
  );
};

export default CommentList;
