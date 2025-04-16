"use client";

import Content from "@common/component/Content/Content";
import { ActiveTabType } from "../../hooks/useMypageState";
import * as styles from "../../style/mypage.css";
import MyPageComment from "../MyPageComment/MyPageComment";
import { isSubComment, renderAllComments } from "@shared/util/renderAllComents";
import { useGetMyComment, useGetMyPost } from "@api/domain/mypage/hook";
import { formatTime } from "@shared/util/formatTime";
import { PATH } from "@route/path";
import { useRouter } from "next/navigation";
import HospitalReview from "../../../../../shared/component/HospitalReview";

interface MyPageContentPropTypes {
  tab: ActiveTabType;
}

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
  const router = useRouter();
  const { data: myPosts } = useGetMyPost();
  const { data: myComments } = useGetMyComment();

  const renderContent = (tab: ActiveTabType) => {
    switch (tab) {
      case "review":
        return <HospitalReview isMypage={true} />;
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
              onClick={() => router.push(`${PATH.COMMUNITY.ROOT}/${data.id}`)}
            />
          </div>
        ));
      case "comment":
        if (!myComments?.comments?.length && !myComments?.subComments?.length) {
          return <div className={styles.nothingContent}>{"아직 작성한 댓글이 없어요."}</div>;
        }
        return renderAllComments(myComments?.comments, myComments?.subComments).map((data) => (
          <div className={styles.commentcontentWrap} key={`comment-${isSubComment(data) ? "sub" : ""}-${data.id}`}>
            <MyPageComment
              postTitle={data.postTitle as string}
              content={data.content as string}
              timeAgo={data.createdAt as string}
              mentionedNickname={isSubComment(data) ? data.mentionedNickname : undefined}
              onClick={() => router.push(`${PATH.COMMUNITY.ROOT}/${data.postId}`)}
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
