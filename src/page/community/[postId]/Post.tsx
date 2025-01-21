import React, { useEffect, useState } from "react";
import HeaderNav from "@common/component/HeaderNav/HeaderNav.tsx";
import { IcLeftarrow, IcLikeActive, IcLikeDisabled, IcTest } from "@asset/svg";
import { styles } from "@page/community/[postId]/Post.css.ts";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
import CommentList from "@common/component/Comment/CommentList.tsx";
import { TextField } from "@common/component/TextField";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import { formatTime } from "@shared/util/formatTime.ts";
import useModalStore from "@store/moreModalStore.ts";
import { useCommentsGet, useDeleteLike, useLikePost, usePostGet } from "@api/domain/community/post/hook";

import { useNavigate, useParams } from "react-router-dom";
import { PATH } from "@route/path.ts";
import { getAccessToken } from "@api/index.ts";

const PostDetail = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { openModalId, setOpenModalId } = useModalStore();
  const { data: postData, isLoading } = usePostGet(Number(postId));
  if (!postId) return <>loading</>;
  const { mutate: likePost } = useLikePost(postId);
  const { mutate: likeDelete } = useDeleteLike(postId);
  const { data: commentsData } = useCommentsGet(Number(postId));
  console.log(commentsData);

  const user = {
    accessToken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MzcyMTAxMzgsImV4cCI6MTczNzgxNDkzOCwibWVtYmVySWQiOjF9.f6sCaL3PFg7yMb6J4PM1h30ADsiq_fbON31IXPguJ_Pb4otyJ_Qh-Z_JYRxC8a2SMzaa6jr68uLc6w0_tuag3A",
  };
  localStorage.setItem("user", JSON.stringify(user));

  const [isLiked, setIsLiked] = useState(postData?.isLiked);
  const [likeCount, setLikeCount] = useState(postData?.likeCounts);
  const [comment, setComment] = useState("");

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
    navigate(PATH.COMMUNITY.ROOT);
  };

  const onDelete = () => {
    // TODO : 게시물 삭제하기 버튼 클릭 시 이벤트
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
            iconSize={24}
            onDelete={onDelete}
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
            <Chip key={`postTag-${index}`} label={tag} color={"blue"} />
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
    </>
  );
};

export default PostDetail;
