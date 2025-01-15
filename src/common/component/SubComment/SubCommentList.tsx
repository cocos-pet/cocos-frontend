import SubComment, { SubCommentData } from "./SubComment";

interface SubCommentListProps {
  subComments: SubCommentData[];
}

const SubCommentList = ({ subComments }: SubCommentListProps) => {
  return (
    <div style={{ margin: "2.4rem" }}>
      {subComments.map((subComment) => (
        <SubComment key={subComment.id} subComment={subComment} />
      ))}
    </div>
  );
};

export default SubCommentList;
