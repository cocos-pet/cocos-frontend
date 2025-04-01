import Content from "@common/component/Content/Content";
import {ActiveTabType} from "../../Profile";
import * as styles from "./ProfileContent.css";
import MyPageComment from "../ProfileComment/ProfileComment";
import {isSubComment, renderAllComments} from "@shared/util/renderAllComents";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useGetMyComment, useGetMyPost} from "@api/domain/mypage/hook";
import {PATH} from "@route/path";
import {formatTime} from "@shared/util/formatTime";

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
const ProfileContent = ({ tab }: MyPageContentPropTypes) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("nickname");
  if (!query) return;

  const navigate = useNavigate();
  console.log(query);
  const { data: profilePosts } = useGetMyPost(query);
  const { data: profileComments } = useGetMyComment(query);

  if (
    (tab === "post" && !profilePosts) ||
    (tab === "comment" && !profileComments)
  )
    return;

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
        return (
          <div className={styles.nothingContent}>
            {"아직 작성한 후기가 없어요."}
          </div>
        );
      case "post":
        if (!profilePosts?.length) {
          return (
            <div className={styles.nothingContent}>
              {"아직 작성한 게시글이 없어요."}
            </div>
          );
        }
        return profilePosts?.map((data) => (
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
        if (
          !profileComments?.comments?.length &&
          !profileComments?.subComments?.length
        ) {
          return (
            <div className={styles.nothingContent}>
              {"아직 작성한 댓글이 없어요."}
            </div>
          );
        }
        return renderAllComments(
          profileComments?.comments,
          profileComments?.subComments
        ).map((data) => (
          <div
            className={styles.mypageCommentcontent}
            key={`comment-${isSubComment(data) ? "sub" : ""}-${data.id}`}
          >
            <MyPageComment
              postTitle={data.postTitle as string}
              content={data.content as string}
              timeAgo={data.createdAt as string}
              mentionedNickname={
                isSubComment(data) ? data.mentionedNickname : undefined
              }
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

export default ProfileContent;
