import Content from "@common/component/Content/Content";
import { ActiveTabType } from "../../_hooks/useProfileState";
import * as styles from "../../_style/profile.css";
import MyPageComment from "../ProfileComment/ProfileComment";
import { isSubComment, renderAllComments } from "@shared/util/renderAllComents";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetMyComment, useGetMyPost } from "@api/domain/mypage/hook";
import { PATH } from "@route/path";
import { formatTime } from "@shared/util/formatTime";
import HospitalReviewWrapper from "@shared/component/HospitalReviewWrapper";

interface ProfileContentPropTypes {
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
const ProfileContent = ({ tab }: ProfileContentPropTypes) => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("nickname");
  if (!query) return null;

  const router = useRouter();
  const { data: profilePosts } = useGetMyPost(query);
  const { data: profileComments } = useGetMyComment(query);

  if ((tab === "post" && !profilePosts) || (tab === "comment" && !profileComments)) return null;

  const renderContent = (tab: ActiveTabType) => {
    switch (tab) {
      case "review":
        return <HospitalReviewWrapper nickname={query} />;
      case "post":
        if (!profilePosts?.length) {
          return <div className={styles.nothingContent}>{"아직 작성한 게시글이 없어요."}</div>;
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
              onClick={() => router.push(`${PATH.COMMUNITY.ROOT}/${data.id}`)}
            />
          </div>
        ));
      case "comment":
        if (!profileComments?.comments?.length && !profileComments?.subComments?.length) {
          return <div className={styles.nothingContent}>{"아직 작성한 댓글이 없어요."}</div>;
        }
        return renderAllComments(profileComments?.comments, profileComments?.subComments).map((data) => (
          <div className={styles.mypageCommentcontent} key={`comment-${isSubComment(data) ? "sub" : ""}-${data.id}`}>
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

export default ProfileContent;
