import Content from "@common/component/Content/Content";
import { ActiveTabType } from "../../Mypage";
import * as styles from "./MyPageContent.css";
import MyPageComment from "../MyPageComment/MyPageComment";
import { isSubComment, renderAllComments } from "@shared/util/renderAllComents";
import { useGetMyComment, useGetMyPost } from "@api/domain/mypage/hook";
import { formatTime } from "@shared/util/formatTime";
import { PATH } from "@route/path";
import { useNavigate } from "react-router-dom";

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

const MyPageContent = ({ tab }: MyPageContentPropTypes) => {
  const navigate = useNavigate();
  const { data: myPosts } = useGetMyPost();
  const { data: myComments } = useGetMyComment();

  if ((tab === "post" && !myPosts) || (tab === "comment" && !myComments)) return;

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
        if (!myPosts?.length) {
          return <div className={styles.nothingContent}>{"아직 작성한 게시글이 없어요."}</div>;
        }
        return myPosts?.map((data) => (
          <div className={styles.mypagecontent} key={`post-${data.id}`}>
            <Content
              breed={data.breed}
              petAge={data.age}
              postTitle={data.title}
              postContent={data.content}
              likeCnt={data.likeCount}
              commentCnt={data.commentCount}
              timeAgo={formatTime(data.createdAt as string)}
              onClick={() => navigate(`${PATH.COMMUNITY.ROOT}/${data.id}`)}
            />
          </div>
        ));
      case "comment":
        if (!myComments?.comments?.length && !myComments?.subComments?.length) {
          return <div className={styles.nothingContent}>{"아직 작성한 댓글이 없어요."}</div>;
        }
        return renderAllComments(myComments?.comments, myComments?.subComments).map((data) => (
          <div className={styles.mypagecontent} key={`comment-${isSubComment(data) ? "sub" : ""}-${data.id}`}>
            <MyPageComment
              postTitle={data.postTitle as string}
              content={data.content as string}
              timeAgo={data.createdAt as string}
              mentionedNickname={isSubComment(data) ? data.mentionedNickname : undefined}
              onClick={() => navigate(`${PATH.COMMUNITY.ROOT}/${data.postId}`)}
            />
          </div>
        ));
      default:
        return <></>;
    }
  };

  return <div className={styles.contentWrapper}>{renderContent(tab)}</div>;
};

export default MyPageContent;
