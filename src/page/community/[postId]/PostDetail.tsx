import React, { useEffect, useState } from "react";
import HeaderNav from "@common/component/HeaderNav/HeaderNav.tsx";
import {
  IcBaseProfileImage,
  IcCuriousActive,
  IcCuriousUnactive,
  IcLeftarrow,
  IcLikeActive,
  IcLikeDisabled,
} from "@asset/svg";
import { styles } from "@page/community/[postId]/PostDetail.css";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
import CommentList from "@common/component/Comment/CommentList.tsx";
import { TextField } from "@common/component/TextField";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import { formatTime } from "@shared/util/formatTime.ts";
import useModalStore from "@store/moreModalStore.ts";
import {
  useCommentsGet,
  usePostDelete,
  useCommentPost,
  useDeleteLike,
  useLikePost,
  usePostGet,
  useSubCommentPost,
} from "@api/domain/community/post/hook";
import { useNavigate, useParams } from "react-router-dom";
import { PATH } from "@route/path.ts";
import { getAccessToken } from "@api/index.ts";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet.tsx";
import {
  getCategorytoEnglish,
  getCategorytoId,
  getDropdownValuetoIcon,
} from "@page/community/utills/handleCategoryItem.tsx";
import { getCategoryResponse } from "@page/community/utills/getPostCategoryLike.ts";
import Loading from "@common/component/Loading/Loading.tsx";

import nocategory from "@asset/image/nocategory.png";
import { useProtectedRoute } from "@route/useProtectedRoute";
const PostDetail = () => {
  const { isNoPet } = useProtectedRoute();
  const navigate = useNavigate();
  const { postId } = useParams();
  const { openModalId, setOpenModalId } = useModalStore();
  const { data: postData, isLoading } = usePostGet(Number(postId));
  const { data: commentsData } = useCommentsGet(Number(postId));

  if (!postId) return null;

  const { mutate: likePost } = useLikePost(postId);
  const { mutate: likeDelete } = useDeleteLike(postId);
  const { mutate: commentPost } = useCommentPost(Number(postId));
  const [isLiked, setIsLiked] = useState(postData?.isLiked);
  const [likeCount, setLikeCount] = useState(postData?.likeCounts);
  const [commentId, setCommentId] = useState<number>();
  const [isOpen, setOpen] = useState(false);
  const { mutate: deletePost } = usePostDelete(Number(postId));
  const { mutate: subCommentPost } = useSubCommentPost(Number(commentId), Number(postId));
  const [parsedComment, setParsedComment] = useState<{
    mention: string;
    text: string;
  }>({
    mention: "",
    text: "",
  });

  useEffect(() => {
    if (postData) {
      setIsLiked(postData.isLiked);
      setLikeCount(postData.likeCounts);
    }
  }, [postData]);

  if (!postData) {
    return (
      <div className={styles.emptyContainer}>
        <img
          src={nocategory}
          alt="게시글 없음."
          style={{ width: "27.6074rem", height: "15.4977rem", objectFit: "cover" }}
        />
        <h1>아직 등록된 게시글이 없어요</h1>
      </div>
    );
  }

  const onClearClick = () => {
    setParsedComment({ mention: "", text: "" });
  };

  const onSubmitComment = () => {
    if (isNoPet) {
      alert("반려동물을 등록한 사람만 댓글을 작성할 수 있습니다.");
      return;
    }
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
    navigate(-1);
  };

  const onDelete = () => {
    deletePost(Number(postId));
    setOpen(false);
  };

  const onLikePostClick = () => {
    if (getAccessToken() === null) {
      navigate(PATH.ONBOARDING.ROOT);
      return;
    }

    likeDelete(
      { postId },
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
    if (getAccessToken() === null) {
      navigate(PATH.ONBOARDING.ROOT);
      return;
    }

    likePost(
      { postId },
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

  if (isLoading || !postId || !commentsData) return <Loading height={60} />;

  const handleProfileClick = () => {
    if (postData.nickname) {
      navigate(`/profile?nickname=${postData.nickname}`);
    }
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
              isOpen={openModalId === `post-${postId}`}
              onToggleModal={() => setOpenModalId(`post-${postId}`)}
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
            navigate(
              `${PATH.COMMUNITY.CATEGORY}?type=${getCategorytoEnglish(
                postData.category,
              )}&id=${getCategorytoId(postData.category)}`,
            );
          }}
        />
        <div className={styles.top} onClick={handleProfileClick}>
          {postData.profileImage ? (
            <img src={postData.profileImage} alt="userProfile" className={styles.profileImage} />
          ) : (
            <IcBaseProfileImage width={32} height={32} />
          )}
          <div className={styles.info}>
            <div className={styles.infoName}>{postData.nickname}</div>
            <div className={styles.infoDetail}>
              {postData.breed}·{postData.petAge}살 · {formatTime(postData.createdAt ?? "")}
            </div>
          </div>
        </div>
        <div>
          <div className={styles.title}>{postData.title}</div>
          <div className={styles.content}>{postData.content}</div>
        </div>
        {postData.images?.map((image, index) => (
          <img
            key={`postImage-${
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              index
            }`}
            src={image}
            alt="postImage"
            className={styles.image}
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
    </>
  );
};

export default PostDetail;
