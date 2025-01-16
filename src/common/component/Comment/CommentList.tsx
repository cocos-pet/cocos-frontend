import Comment, { CommentType } from "./Comment";

interface CommentListProps {
  comments: CommentType[];
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
