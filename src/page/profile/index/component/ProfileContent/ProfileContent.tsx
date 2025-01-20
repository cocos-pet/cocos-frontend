import Content from "@common/component/Content/Content";
import { ActiveTabType } from "../../Profile";
import * as styles from "./ProfileContent.css";
import { commentDummyData, dummyData } from "./costant"; //todo: 더미데이터 렌더링
import MyPageComment from "../ProfileComment/ProfileComment";
import { isSubComment, renderAllComments } from "@shared/util/renderAllComents";

interface MyPageContentPropTypes {
  tab: ActiveTabType;
}

//todo: 민정이가 유틸 만들어주기로 함 (~ 시간전)
export interface ApiItemTypes {
  id: number;
  nickname: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
  createdAt: string; // Format: YYYY-MM-DD:HH-MM-SS
  updatedAt: string; // Format: YYYY-MM-DD:HH-MM-SS
  image: string; // URL of the image
  category: "Free" | string; // Preset or dynamic category
  breed: string;
  age: number;
}

//todo: 여기서 탭 별로 api 요청 보내서 데이터 받아와 렌더링하기
const MyPageContent = ({ tab }: MyPageContentPropTypes) => {
  const renderNothingContent = (tab: ActiveTabType) => {
    let content = "";
    switch (tab) {
      case "review":
        content = "아직 작성한 후기가 없어요.";
        break;
      case "post":
        content = "아직 작성한 게시글이 없어요.";
        break;
      case "comment":
        content = "아직 작성한 댓글이 없어요.";
        break;
      default:
        break;
    }
    return <div className={styles.nothingContent}>{content}</div>;
  };

  const renderContent = (tab: ActiveTabType) => {
    switch (tab) {
      case "review":
        return <div className={styles.nothingContent}>{"아직 작성한 후기가 없어요."}</div>;
      case "post":
        return dummyData.map((data) => (
          <div className={styles.mypagecontent} key={`post-${data.id}`}>
            <Content
              breed={data.breed}
              petAge={`${data.age}살`}
              postTitle={data.title}
              postContent={data.content}
              likeCount={data.likeCount}
              commentCount={data.commentCount}
              onClick={() => alert(`게시글 ${data.id}로 넘어가는 navigate 해야함`)} id={0} createdAt={""} updateAt={""} category={""}            />
          </div>
        ));
      //todo: 코멘트에서 렌더링하는 형식 달라짐
      case "comment":
        return renderAllComments(commentDummyData.comments, commentDummyData.subComments).map((data) => (
          <div className={styles.mypagecontent} key={`comment-${isSubComment(data) ? "sub" : ""}-${data.id}`}>
            <MyPageComment
              postTitle={data.postTitle}
              content={data.content}
              timeAgo={data.createdAt}
              mentionedNickname={isSubComment(data) ? data.mentionedNickname : undefined}
              onClick={() => alert(`게시글 ${data.id}로 넘어가는 navigate 해야함`)}
            />
          </div>
        ));
      default:
        return <></>;
    }
  };

  return (
    <div className={styles.contentWrapper}>
      {dummyData.length === 0 ? renderNothingContent(tab) : renderContent(tab)}
    </div>
  );
};

export default MyPageContent;
