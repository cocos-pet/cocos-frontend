import React, { useEffect, useState } from "react";
import HeaderNav from "@common/component/HeaderNav/HeaderNav.tsx";
import { IcLeftarrow, IcLikeActive, IcLikeDisabled, IcTest } from "@asset/svg";
import { styles } from "@page/community/[postId]/PostDetail.css";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
import CommentList from "@common/component/Comment/CommentList.tsx";
import { TextField } from "@common/component/TextField";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import { formatTime } from "@shared/util/formatTime.ts";
import useModalStore from "@store/moreModalStore.ts";
import { useCommentsGet, useDeleteLike, useLikePost, usePostDelete, usePostGet } from "@api/domain/community/post/hook";

import { useNavigate, useParams } from "react-router-dom";
import { PATH } from "@route/path.ts";
import { getAccessToken } from "@api/index.ts";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet.tsx";

const PostDetail = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { openModalId, setOpenModalId } = useModalStore();
  const { data: postData, isLoading } = usePostGet(Number(postId));
  if (!postId) return <>loading</>;
  const { mutate: likePost } = useLikePost(postId);
  const { mutate: likeDelete } = useDeleteLike(postId);
  const { data: commentsData } = useCommentsGet(Number(postId));

  const user = {
    accessToken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3Mzc0ODQwNDAsImV4cCI6MTczODA4ODg0MCwibWVtYmVySWQiOjF9.NLB2jdV8n1pUCBoFxtLrTUKw8Lqi0CLyduNt5w4JEyJ0UL6tBuyahredqvfuB31D5E_saVb9OOVqe6WtClwufw",
  };
  localStorage.setItem("user", JSON.stringify(user));

  const [isOpen, setOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(postData?.isLiked);
  const [likeCount, setLikeCount] = useState(postData?.likeCounts);
  const [comment, setComment] = useState("");
  const { mutate: deletePost } = usePostDelete(Number(postId));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onClearClick = () => {
    setComment("");
  };

  const onSubmitComment = () => {
    // TODO : 댓글 등록 API 호출
  };

  const onBackClick = () => {
    //navigate(PATH.COMMUNITY.ROOT);
    navigate(-1);
  };

  const onDelete = () => {
    deletePost(Number(postId));
    setOpen(false);
  };

  useEffect(() => {
    // 초기 데이터 세팅
    if (postData) {
      setIsLiked(postData.isLiked);
      setLikeCount(postData.likeCounts);
    }
  }, [postData]);

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

  if (isLoading || !postData || !postId || !commentsData) return <>loading</>;

  return (
    <>
      <HeaderNav
        leftIcon={<IcLeftarrow />}
        onLeftClick={onBackClick}
        type={"noTitle"}
        rightBtn={
          <MoreModal
            onDelete={() => {
              setOpen(true);
            }}
            iconSize={24}
            isOpen={openModalId === `post-${postId}`}
            onToggleModal={() => setOpenModalId(`post-${postId}`)}
          />
        }
      />
      <div className={styles.container}>
        <Button
          leftIcon={<IcTest width={20} />}
          label={postData.category}
          variant={"outlineNeutral"}
          size={"tag"}
          disabled={true}
        />
        <div className={styles.top}>
          {<img src={postData.profileImage} alt="userProfile" className={styles.profileImage} />}
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
          <img key={`postImage-${index}`} src={image} alt="postImage" className={styles.image} />
        ))}
        <div className={styles.labelWrap}>
          {postData.tags?.map((tag, index) => (
            <Chip key={`postTag-${index}`} label={tag} color={"blue"} disabled={true} />
          ))}
        </div>
        <div className={styles.subContents}>
          <div className={styles.item}>
            {isLiked ? (
              <IcLikeActive width={24} height={24} onClick={onLikePostClick} />
            ) : (
              <IcLikeDisabled width={24} height={24} onClick={onLikeDeleteClick} />
            )}
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
      <Divider size={"large"} />
      <div className={styles.container}>
        <div className={styles.commentTitle}>
          댓글 <span className={styles.commentCount}>{postData.totalCommentCounts}</span>
        </div>
        <CommentList comments={{ comments: commentsData }} />
        <div className={styles.commentContainer}>
          <TextField
            onChange={onChange}
            value={comment}
            onClearClick={onClearClick}
            placeholder={"댓글을 입력해주세요."}
          />
          {comment && (
            <button className={styles.upload} onClick={onSubmitComment}>
              올리기
            </button>
          )}
        </div>
      </div>
      <SimpleBottomSheet
        isOpen={isOpen}
        content={"댓글을 정말 삭제할까요?"}
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
