import { IcoIcontest, IcoMessage, IcoSkeleton } from "@asset/svg";
import React from "react";
import { styles } from "@common/component/Content/Content.css.ts";

interface ContentPropTypes {
  breed: string;
  age: string;
  postTitle: string;
  postContent: string;
  likeIconType?: "curious" | "support";
  likeCnt?: number;
  commentCnt: number;
  timeAgo: string;
  postImage?: React.ReactNode;
}

/**
 * 게시물 컴포넌트
 * @param breed 강아지 종
 * @param age 나이
 * @param postTitle 게시물 제목
 * @param postContent 게시물 내용
 * @param likeIconType 좋아요 아이콘 타입 ( 궁금해요, 응원해요 )
 * @param likeCnt 좋아요 tn
 * @param commentCnt 댓글 수
 * @param timeAgo 게시물 작성 시간
 * @param postImage
 * @constructor minjeoong
 */

const Content: React.FC<ContentPropTypes> = ({
  breed,
  age,
  postTitle,
  postContent,
  likeIconType,
  likeCnt,
  commentCnt,
  timeAgo,
  postImage,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.category}>
          {breed} · {age}
        </div>
        <div className={styles.title}>{postTitle}</div>
        <div className={styles.contents}>{postContent}</div>
        <div className={styles.subContents}>
          <div className={styles.item}>
            {/* 궁금해요/응원해요 아아콘 결정되면 수정 */}
            {likeIconType === "curious" ? <IcoIcontest /> : <IcoIcontest />}
            <span>{likeCnt}</span>
          </div>
          <div className={styles.item}>
            <IcoMessage />
            <span>{commentCnt}</span>
          </div>
          <div className={styles.item}>·</div>
          <div className={styles.item}>{timeAgo}</div>
        </div>
      </div>
      {postImage ? postImage : <IcoSkeleton className={styles.postImage} />}
    </div>
  );
};

export default Content;
