"use client";

import { IcCurious, IcLikeDisabled, IcoMessage } from "@asset/svg";
import { styles } from "@common/component/Content/Content.css.ts";
import Image from "next/image";

interface ContentPropTypes {
  breed?: string;
  petAge?: number;
  postTitle?: string;
  postContent?: string;
  likeIconType?: "curious" | "support";
  likeCnt?: number;
  commentCnt?: number;
  timeAgo?: string;
  postImage?: string;
  category?: string;
  onClick?: () => void;
}

/**
 * 게시물 컴포넌트
 * @param breed 강아지 종
 * @param petAge 나이
 * @param postTitle 게시물 제목
 * @param postContent 게시물 내용
 * @param likeIconType 좋아요 아이콘 타입 ( 궁금해요, 응원해요 )
 * @param likeCnt 좋아요 수
 * @param commentCnt 댓글 수
 * @param timeAgo 게시물 작성 시간
 * @param postImage 게시물 이미지
 * @param onClick 클릭 이벤트
 * @constructor minjeoong
 */

const Content = ({
  breed,
  petAge,
  postTitle,
  postContent,
  likeIconType,
  likeCnt,
  commentCnt,
  timeAgo,
  postImage,
  onClick,
}: ContentPropTypes) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.left}>
        <div className={styles.category}>
          {breed}
          {petAge && <span> · {petAge}살</span>}
        </div>
        <div className={styles.title}>{postTitle}</div>
        <div className={styles.contents}>{postContent}</div>
        <div className={styles.subContents}>
          <div className={styles.item}>
            {/* 궁금해요/응원해요 아아콘 결정되면 수정 */}
            {likeIconType === "curious" ? (
              <IcCurious width={20} height={20} />
            ) : (
              <IcLikeDisabled width={20} height={20} />
            )}
            <span>{likeCnt}</span>
          </div>
          <div className={styles.item}>
            <IcoMessage width={20} height={20} />
            <span>{commentCnt}</span>
          </div>
          <div className={styles.item}>·</div>
          <div className={styles.item}>{timeAgo}</div>
        </div>
      </div>
      {postImage && (
        <div className={styles.postImage}>
          <Image 
            className={styles.postImage}
            src={postImage} 
            alt="Post image" 
            width={0}
            height={0}
          />
        </div>
      )}
    </div>
  );
};

export default Content;
