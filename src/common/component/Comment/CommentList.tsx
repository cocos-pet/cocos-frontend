import Comment, { CommentData } from "./Comment";

interface CommentListProps {
  comments: CommentData[];
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div style={{ margin: "2.4rem" }}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
