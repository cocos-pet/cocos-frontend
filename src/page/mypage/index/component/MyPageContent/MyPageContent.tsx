import Content from "@common/component/Content/Content";
import { ActiveTabType } from "../../Mypage";
import * as styles from "./MyPageContent.css";
import { dummyData } from "./costant"; //todo: 더미데이터 렌더링

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
}

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

  return (
    <div>
      {dummyData.map((data) => (
        <div style={{ paddingTop: "1.6rem" }} key={`post-${data.id}`}>
          <Content
            breed="골든 리트리버"
            age="12살"
            postTitle="강아지 헥헥거림 증상"
            postContent="강아지가 2주 전부터 헥헥거림 증상이 심한데..."
            likeCnt={10}
            commentCnt={5}
            timeAgo="1시간 전"
          />
        </div>
      ))}
    </div>
  );
};

export default MyPageContent;
