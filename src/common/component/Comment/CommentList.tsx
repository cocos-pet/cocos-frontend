import Comment, { CommentType } from "./Comment";

type CommentsData = CommentType[];

interface CommentListProps {
  comments: CommentsData;
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
