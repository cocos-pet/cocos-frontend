import * as styles from "./MyPageComment.css";

interface MyPageCommentPropTypes {
  content: string;
  timeAgo: string;
  postTitle: string;
  onClick?: () => void;
  mentionedNickname?: string;
}

const MyPageComment = ({ content, timeAgo, postTitle, onClick, mentionedNickname }: MyPageCommentPropTypes) => {
  //todo: '1시간 전' 과 같이 변환하도록 유틸 함수 적용 필요(민정 작성 예정)
  return (
    <div className={styles.commentWrapper} onClick={onClick}>
      <span className={styles.timeText}>{timeAgo}</span>

      <span className={styles.contentText}>
        <span>
          {mentionedNickname && <span className={styles.mentionedNickname}>{`@${mentionedNickname}`}</span>} {content}
        </span>
      </span>

      <span className={styles.wherePostText}>
        <span className={styles.whereText}>{postTitle}</span>
        {" 에 남긴 댓글"}
      </span>
    </div>
  );
};

export default MyPageComment;
