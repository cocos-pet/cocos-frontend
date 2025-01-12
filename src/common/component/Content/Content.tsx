import { IcoIcontest, IcoSkeleton } from "@asset/svg";
import React from "react";
import { styles } from "@common/component/Content/Content.css.ts";

interface ContentPropTypes {
  breed: string;
  age: string;
  postTitle: string;
  postContent: string;
  likes: number;
  comments: number;
  timeAgo: string;
  postImage?: React.ReactNode;
}

/**
 * 게시물 컴포넌트
 * @param breed 강아지 종
 * @param age 나이
 * @param postTitle 게시물 제목
 * @param postContent 게시물 내용
 * @param likes 좋아요 수
 * @param comments 댓글 수
 * @param timeAgo 게시물 작성 시간
 * @constructor minjeoong
 */

const Content: React.FC<ContentPropTypes> = ({
  breed,
  age,
  postTitle,
  postContent,
  likes,
  comments,
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
            <IcoIcontest />
            <span>{likes}</span>
          </div>
          <div className={styles.item}>
            <IcoIcontest />
            <span>{comments}</span>
          </div>
          <div className={styles.item}>
            <IcoIcontest />
            <span>{comments}</span>
          </div>
          <div className={styles.item}>·</div>
          <div className={styles.item}>{timeAgo}</div>
        </div>
      </div>
      {postImage ? postImage : <IcoSkeleton />}
    </div>
  );
};

export default Content;
