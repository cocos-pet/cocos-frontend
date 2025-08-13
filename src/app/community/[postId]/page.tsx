"use client";

import React, { useEffect, useState } from "react";
import HeaderNav from "@common/component/HeaderNav/HeaderNav.tsx";
import { IcCuriousActive, IcCuriousUnactive, IcLeftarrow, IcLikeActive, IcLikeDisabled } from "@asset/svg";
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
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import { styles } from "./PostDetail.css.ts";
import { getCategoryResponse } from "../_utills/getPostCategoryLike.ts";
import { getCategorytoEnglish, getCategorytoId, getDropdownValuetoIcon } from "../_utills/handleCategoryItem.tsx";
import Profile from "@app/community/_component/Profile/Profile.tsx";
import { useAuth } from "@providers/AuthProvider";
import { useIsPetRegistered } from "@common/hook/useIsPetRegistered";
import { Modal } from "@common/component/Modal/Modal.tsx";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), { ssr: false });

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const { postId } = params as { postId: string | string[] | undefined };
  const postIdString = typeof postId === "string" ? postId : Array.isArray(postId) ? postId[0] : "";
  const { openModalId, setOpenModalId } = useModalStore();
  const { data: postData, isLoading } = usePostGet(Number(postIdString));
  const { data: commentsData } = useCommentsGet(Number(postIdString));

  if (!postIdString) return null;

  const { mutate: likePost } = useLikePost(postIdString);
  const { mutate: likeDelete } = useDeleteLike(postIdString);
  const { mutate: commentPost } = useCommentPost(Number(postIdString));
  const [isLiked, setIsLiked] = useState(postData?.isLiked);
  const [likeCount, setLikeCount] = useState(postData?.likeCounts);
  const [commentId, setCommentId] = useState<number>();
  const [isOpen, setOpen] = useState(false);
  const { mutate: deletePost } = usePostDelete(Number(postIdString));
  const { mutate: subCommentPost } = useSubCommentPost(commentId !== undefined ? commentId : 0, Number(postIdString));
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
        <Image
          src={nocategory}
          alt="게시글 없음."
          style={{
            width: "27.6074rem",
            height: "15.4977rem",
            objectFit: "cover",
          }}
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
      // 대댓글 등록
      subCommentPost(
        {
          commentId: commentId,
          nickname: parsedComment.mention,
          content: parsedComment.text,
        },
        {
          onSuccess: (data) => {
            onClearClick();
          },
          onError: (error) => {},
        },
      );
      onClearClick();
    } else {
      // 댓글 등록
      commentPost(
        {
          content: parsedComment.text,
        },
        {
          onSuccess: (data) => {
            onClearClick();
          },
          onError: (error) => {},
        },
      );
      onClearClick();
    }
  };

  const onCommentReplyClick = (nickname: string | undefined, commentId: number | undefined) => {
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
    // 조건: 텍스트가 비어있고 Backspace 키를 누를 때 -> 멘션 제거
    if (e.key === "Backspace" && !parsedComment.text) {
      setParsedComment((prevState) => ({
        ...prevState,
        mention: "",
      }));
    }

    // 두 번 입력됨. 일단 적용 x
    // if (e.key === "Enter" && parsedComment.text.trim()) {
    //   onSubmitComment();
    // }
  };

  const onBackClick = () => {
    router.back();
  };

  const onDelete = () => {
    deletePost(Number(postIdString));
    setOpen(false);
  };

  const onLikePostClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    
    likeDelete(
      { postId: postIdString },
      {
        onSuccess: (data) => {
          setIsLiked(false);
          setLikeCount((prevState) => Number(prevState !== undefined ? prevState - 1 : 0));
        },
        onError: (error) => {},
      },
    );
  };

  const onLikeDeleteClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    if (!isPetRegistered) {
      router.push(PATH.ONBOARDING.COMPLETE);
      return;
    }

    likePost(
      { postId: postIdString },
      {
        onSuccess: (data) => {
          setIsLiked(true);
          setLikeCount((prevState) => (prevState !== undefined ? prevState + 1 : 0));
        },
        onError: (error) => {},
      },
    );
  };

  const onModalClose = () => {
    setOpenModalId(undefined);
  };

  if (isLoading || !postIdString || !commentsData) return <Loading height={60} />;

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
      <HeaderNav
        leftIcon={<IcLeftarrow />}
        onLeftClick={onBackClick}
        type={"noTitle"}
        rightBtn={
          postData.isWriter && (
            <MoreModal
              onDelete={() => setOpen(true)}
              iconSize={24}
              isOpen={openModalId === `post-${postIdString}`}
              onToggleModal={() => setOpenModalId(`post-${postIdString}`)}
            />
          )
        }
      />
      <div className={styles.container} onClick={onModalClose}>
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

        <Profile
          handleProfileClick={handleProfileClick}
          profileImageData={postData.profileImage}
          nickname={postData.nickname}
          breed={postData.breed}
          petAge={postData.petAge}
          createdAt={postData.createdAt}
        />
        <div>
          <div className={styles.title}>{postData.title}</div>
          <div className={styles.content}>{postData.content}</div>
        </div>
        {postData.images?.map((image, index) => (
          <Image
            key={`postImage-${
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              index
            }`}
            src={image}
            alt="postImage"
            className={styles.image}
            width={100}
            height={262}
          />
        ))}
        <div className={styles.labelWrap}>
          {postData.tags?.map((tag, index) => (
            <Chip
              key={`postTag-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }`}
              label={tag}
              color={"blue"}
              disabled={true}
            />
          ))}
        </div>
        <Divider size={"small"} />
        <div className={styles.subContents}>
          <div className={styles.item}>
            {getCategoryResponse(postData.category) === "curious" ? (
              isLiked ? (
                <IcCuriousActive width={24} height={24} onClick={onLikePostClick} />
              ) : (
                <IcCuriousUnactive width={24} height={24} onClick={onLikeDeleteClick} />
              )
            ) : getCategoryResponse(postData.category) === "support" ? (
              isLiked ? (
                <IcLikeActive width={24} height={24} onClick={onLikePostClick} />
              ) : (
                <IcLikeDisabled width={24} height={24} onClick={onLikeDeleteClick} />
              )
            ) : null}
            <span className={styles.categoryName}>
              {getCategoryResponse(postData.category) === "curious" ? "궁금해요 " : "응원해요 "}
              {likeCount}
            </span>
          </div>
        </div>
      </div>
      <Divider size={"large"} />
      <div className={styles.commentContainer}>
        <div className={styles.commentTitle}>
          댓글 <span className={styles.commentCount}>{postData.totalCommentCounts}</span>
        </div>
        <CommentList
          comments={{ comments: commentsData }}
          onCommentReplyClick={onCommentReplyClick}
          onModalClose={onModalClose}
        />
      </div>

      <div className={styles.textContainer}>
        <TextField
          mentionedNickname={parsedComment.mention ? `@${parsedComment.mention} ` : ""}
          onChange={onChange}
          value={parsedComment.text}
          onClearClick={onClearClick}
          placeholder={"댓글을 입력해주세요."}
          onKeyDown={onKeyDown}
          onClick={handleCheckCommentPermission}
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

      <Modal.Root open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
        <Modal.Content
          title={<Modal.Title>로그인이 필요해요.</Modal.Title>}
          bottomAffix={
            <Modal.BottomAffix>
              <Modal.Close label={"취소"} />
              <Modal.Confirm label={"로그인"} onClick={() => router.push(PATH.LOGIN)} />
            </Modal.BottomAffix>
          }
        >
          코코스를 더 잘 즐기기 위해 로그인을 해주세요.
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default Page;
