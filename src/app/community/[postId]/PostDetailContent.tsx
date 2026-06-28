"use client";

import React, { useEffect, useState } from "react";
import * as Sentry from "@sentry/nextjs";
import HeaderNav from "@common/component/HeaderNav/HeaderNav.tsx";
import {
  IcCuriousActive,
  IcCuriousUnactive,
  IcLeftarrow,
  IcLikeActive,
  IcLikeDisabled,
} from "@asset/svg";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
import CommentList from "@common/component/Comment/CommentList.tsx";
import { TextField } from "@common/component/TextField";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import useModalStore from "@store/moreModalStore.ts";
import {
  useCommentPost,
  useCommentsGet,
  useDeleteLike,
  useLikePost,
  usePostDelete,
  usePostGet,
  useSubCommentPost,
} from "@api/domain/community/post/hook";
import { PATH } from "@route/path.ts";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet.tsx";
import nocategory from "@asset/image/nocategory.png";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { styles } from "./PostDetail.css.ts";
import { getCategoryResponse } from "../_utills/getPostCategoryLike.ts";
import {
  getCategorytoEnglish,
  getCategorytoId,
  getDropdownValuetoIcon,
} from "../_utills/handleCategoryItem.tsx";
import Profile from "@app/community/_component/Profile/Profile.tsx";
import { useAuth } from "@providers/AuthProvider";
import { useIsPetRegistered } from "@common/hook/useIsPetRegistered";
import LazyImage from "@common/component/LazyImage.tsx";
import LoginModal from "@common/component/LoginModal/LoginModal.tsx";
import { components } from "@type/schema";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), {
  ssr: false,
});

type PostDetail = components["schemas"]["PostDetailResponse"];

interface PostDetailContentProps {
  postId: string;
  initialPost: PostDetail | null;
}

const PostDetailContent = ({ postId, initialPost }: PostDetailContentProps) => {
  const router = useRouter();
  const { openModalId, setOpenModalId } = useModalStore();
  const { data: postData, isLoading } = usePostGet(Number(postId), initialPost);
  const { data: commentsData } = useCommentsGet(Number(postId), initialPost);

  const { mutate: likePost } = useLikePost(postId);
  const { mutate: likeDelete } = useDeleteLike(postId);
  const { mutate: commentPost } = useCommentPost(Number(postId));
  const [isLiked, setIsLiked] = useState(postData?.isLiked);
  const [likeCount, setLikeCount] = useState(postData?.likeCounts);
  const [commentId, setCommentId] = useState<number>();
  const [isOpen, setOpen] = useState(false);
  const { mutate: deletePost } = usePostDelete(Number(postId));
  const { mutate: subCommentPost } = useSubCommentPost(
    commentId !== undefined ? commentId : 0,
    Number(postId),
  );
  const [parsedComment, setParsedComment] = useState<{
    mention: string;
    text: string;
  }>({
    mention: "",
    text: "",
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const isPetRegistered = useIsPetRegistered();

  useEffect(() => {
    if (postData) {
      setIsLiked(postData.isLiked);
      setLikeCount(postData.likeCounts);
    }
  }, [postData]);

  if (!postData) {
    return (
      <div className={styles.emptyContainer}>
        <LazyImage
          src={nocategory}
          alt="게시글 없음."
          width="27.6rem"
          height="15.5rem"
          style={{ objectFit: "cover" }}
        />
        <h1>아직 등록된 게시글이 없어요</h1>
      </div>
    );
  }

  const onClearClick = () => {
    setParsedComment({ mention: "", text: "" });
  };

  const onSubmitComment = () => {
    if (parsedComment.mention) {
      subCommentPost(
        {
          commentId: commentId,
          nickname: parsedComment.mention,
          content: parsedComment.text,
        },
        {
          onSuccess: () => {
            onClearClick();
          },
          onError: (error) => {
            Sentry.captureException(error);
          },
        },
      );
    } else {
      commentPost(
        {
          content: parsedComment.text,
        },
        {
          onSuccess: () => {
            onClearClick();
          },
          onError: (error) => {
            Sentry.captureException(error);
          },
        },
      );
    }
  };

  const onCommentReplyClick = (
    nickname: string | undefined,
    commentId: number | undefined,
  ) => {
    if (nickname) {
      setParsedComment({ mention: nickname, text: "" });
    }
    setCommentId(commentId);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const mentionMatch = value.match(/^@(\S+)\s/);
    setParsedComment({
      mention: parsedComment.mention,
      text: mentionMatch ? value.replace(mentionMatch[0], "") : value,
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !parsedComment.text) {
      setParsedComment((prevState) => ({
        ...prevState,
        mention: "",
      }));
    }
  };

  const onBackClick = () => {
    router.back();
  };

  const onDelete = () => {
    deletePost(Number(postId));
    setOpen(false);
  };

  const onLikePostClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }

    likeDelete(
      { postId },
      {
        onSuccess: () => {
          setIsLiked(false);
          setLikeCount((prevState) =>
            Number(prevState !== undefined ? prevState - 1 : 0),
          );
        },
        onError: () => {},
      },
    );
  };

  const onLikeDeleteClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }

    likePost(
      { postId },
      {
        onSuccess: () => {
          setIsLiked(true);
          setLikeCount((prevState) =>
            prevState !== undefined ? prevState + 1 : 0,
          );
        },
        onError: () => {},
      },
    );
  };

  const onModalClose = () => {
    setOpenModalId(undefined);
  };

  if (isLoading || !commentsData) return <Loading height={60} />;

  const handleProfileClick = () => {
    if (postData.nickname) {
      router.push(`/profile?nickname=${postData.nickname}`);
    }
  };

  const handleCheckCommentPermission = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    if (!isPetRegistered) {
      router.push(PATH.ONBOARDING.COMPLETE);
      return;
    }
    return true;
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <HeaderNav
          leftIcon={<IcLeftarrow />}
          onLeftClick={onBackClick}
          type={"noTitle"}
          rightBtn={
            postData.isWriter && (
              <MoreModal
                onEdit={() =>
                  router.push(
                    `${PATH.COMMUNITY.WRITE.replace(":postId", postId)}`,
                  )
                }
                onDelete={() => setOpen(true)}
                iconSize={24}
                isOpen={openModalId === `post-${postId}`}
                onToggleModal={() => setOpenModalId(`post-${postId}`)}
              />
            )
          }
        />
      </div>
      <div className={styles.container} onClick={onModalClose}>
        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <div className={styles.subtitle}>
              <Button
                leftIcon={getDropdownValuetoIcon(postData.category)}
                label={postData.category}
                variant={"outlineNeutral"}
                size={"tag"}
                onClick={() => {
                  router.push(
                    `${PATH.COMMUNITY.CATEGORY}?type=${getCategorytoEnglish(
                      postData.category,
                    )}&id=${getCategorytoId(postData.category)}`,
                  );
                }}
              />
            </div>
            <address className={styles.author}>
              <Profile
                handleProfileClick={handleProfileClick}
                profileImageData={postData.profileImage}
                nickname={postData.nickname}
                breed={postData.breed}
                petAge={postData.petAge}
                createdAt={postData.createdAt}
              />
            </address>
          </header>
          <h1 className={styles.title}>{postData.title}</h1>

          <div className={styles.articleBody}>
            <p className={styles.content}>{postData.content}</p>
          </div>

          {postData.images?.map((image, index) => (
            <figure key={`postImage-${index}`}>
              <LazyImage
                src={image}
                alt={`${postData.title ?? "게시글"} 이미지 ${index + 1}`}
                className={styles.image}
                width="100%"
                height="26.2rem"
              />
            </figure>
          ))}

          {!!postData.tags?.length && (
            <footer className={styles.labelWrap}>
              {postData.tags.map((tag, index) => (
                <Chip
                  key={`postTag-${index}`}
                  label={tag}
                  color={"blue"}
                  disabled={true}
                />
              ))}
            </footer>
          )}
        </article>

        <Divider size={"small"} />
        <div className={styles.subContents}>
          <div className={styles.item}>
            {getCategoryResponse(postData.category) === "curious" ? (
              isLiked ? (
                <IcCuriousActive
                  width={24}
                  height={24}
                  onClick={onLikePostClick}
                />
              ) : (
                <IcCuriousUnactive
                  width={24}
                  height={24}
                  onClick={onLikeDeleteClick}
                />
              )
            ) : getCategoryResponse(postData.category) === "support" ? (
              isLiked ? (
                <IcLikeActive
                  width={24}
                  height={24}
                  onClick={onLikePostClick}
                />
              ) : (
                <IcLikeDisabled
                  width={24}
                  height={24}
                  onClick={onLikeDeleteClick}
                />
              )
            ) : null}
            <span className={styles.categoryName}>
              {getCategoryResponse(postData.category) === "curious"
                ? "궁금해요 "
                : "응원해요 "}
              {likeCount}
            </span>
          </div>
        </div>
      </div>
      <Divider size={"large"} />
      <section
        className={styles.commentContainer}
        aria-labelledby="post-comments-heading"
      >
        <h2 id="post-comments-heading" className={styles.commentTitle}>
          댓글{" "}
          <span className={styles.commentCount}>
            {postData.totalCommentCounts}
          </span>
        </h2>
        <CommentList
          comments={{ comments: commentsData }}
          onCommentReplyClick={onCommentReplyClick}
          onModalClose={onModalClose}
        />
      </section>

      <div className={styles.textContainer}>
        <TextField
          mentionedNickname={
            parsedComment.mention ? `@${parsedComment.mention} ` : ""
          }
          onChange={onChange}
          value={parsedComment.text}
          onClearClick={onClearClick}
          placeholder={"댓글을 입력해주세요."}
          onKeyDown={onKeyDown}
          onClick={handleCheckCommentPermission}
          className={parsedComment.text && styles.textField}
        />
        {parsedComment.text && (
          <button className={styles.upload} onClick={onSubmitComment}>
            올리기
          </button>
        )}
      </div>
      <SimpleBottomSheet
        isOpen={isOpen}
        content={"게시글을 정말 삭제할까요?"}
        handleClose={() => setOpen(false)}
        leftOnClick={() => setOpen(false)}
        leftText={"취소"}
        rightOnClick={() => {
          onDelete();
        }}
        rightText={"삭제할게요"}
      />

      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
    </>
  );
};

export default PostDetailContent;
