import React, { useState } from "react";
import HeaderNav from "@common/component/HeaderNav/HeaderNav.tsx";
import { IcLeftarrow, IcTest } from "@asset/svg";
import { styles } from "@page/community/[postId]/Post.css.ts";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
import CommentList from "@common/component/Comment/CommentList.tsx";
import { TextField } from "@common/component/TextField";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import { formatTime } from "@shared/util/formatTime.ts";
import useModalStore from "@store/moreModalStore.ts";
import { usePostGet } from "@api/domain/community/post/hook";
import { useNavigate, useParams } from "react-router-dom";
import { PATH } from "@route/path.ts";

const PostDetail = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { data: postData, isLoading } = usePostGet(Number(postId));
  if (!postId) return <>loading</>;
  const commentsData = [
    {
      id: 1,
      profileImage: "https://example.com/profile1.jpg",
      nickname: "GoldenRetrieverLover",
      breed: "골든리트리버",
      petAge: 5,
      content:
        "우리 강아지도 비슷한 증상이 있었어요. 병원에 가보니 괜찮다고 하더라고요.",
      createdAt: "2025-01-13T10:00:00Z",
      isWriter: false,
      subComments: [
        {
          id: 101,
          profileImage: "https://example.com/profile2.jpg",
          nickname: "DogExpert",
          breed: "포메라니안",
          petAge: 2,
          content: "정확한 진단을 받으려면 병원 방문이 필수입니다!",
          createdAt: "2025-01-13T10:00:00Z",
          isWriter: true,
          mentionedNickname: "GoldenRetrieverLover",
        },
      ],
    },
    {
      id: 2,
      profileImage: "https://example.com/profile3.jpg",
      nickname: "HappyDogOwner",
      breed: "비숑프리제",
      petAge: 3,
      content: "우리 집 강아지도 이런 증상이 있어서 동물 병원에 가봤어요.",
      createdAt: "2025-01-13T10:00:00Z",
      isWriter: true,
      subComments: [
        {
          id: 102,
          profileImage: "https://example.com/profile4.jpg",
          nickname: "VetConsultant",
          breed: "시츄",
          petAge: 4,
          content: "스트레스나 특정 음식을 먹었을 때 헥헥거릴 수 있습니다.",
          createdAt: "2025-01-13T10:00:00Z",
          isWriter: false,
          mentionedNickname: "GoldenRetrieverLover",
        },
        {
          id: 103,
          profileImage: "https://example.com/profile5.jpg",
          nickname: "PuppyLover",
          breed: "푸들",
          petAge: 1,
          content: "저희 강아지도 이런 경우가 있었는데 산책 후 회복됐어요!",
          createdAt: "2025-01-13T10:00:00Z",
          isWriter: false,
          mentionedNickname: "GoldenRetrieverLover",
        },
      ],
    },
    {
      id: 3,
      profileImage: "https://example.com/profile6.jpg",
      nickname: "SmallDogFan",
      breed: "치와와",
      petAge: 2,
      content: "강아지가 헥헥거리는 이유는 여러 가지가 있을 수 있어요.",
      createdAt: "2025-01-13T10:00:00Z",
      isWriter: false,
      subComments: [],
    },
  ];

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

  const { openModalId, setOpenModalId } = useModalStore();

  if (isLoading || !postData || !postId) return <>loading</>;

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
            isOpen={Number(postId) === openModalId}
            onToggleModal={() => setOpenModalId(Number(postId))}
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
          {
            <img
              src={postData.profileImage}
              alt="userProfile"
              className={styles.profileImage}
            />
          }
          <div className={styles.info}>
            <div className={styles.infoName}>{postData.nickname}</div>
            <div className={styles.infoDetail}>
              {postData.breed}·{postData.petAge}살 ·{" "}
              {formatTime(postData.createdAt ?? "")}
            </div>
          </div>
        </div>
        <div>
          <div className={styles.title}>{postData.title}</div>
          <div className={styles.content}>{postData.content}</div>
        </div>
        {/* TODO : 서버에서 받아온 이미지로 수정*/}
        {postData.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="postImage"
            className={styles.image}
          />
        ))}
        <div className={styles.labelWrap}>
          {postData.tags?.map((tag, index) => (
            <Chip label={tag} color={"blue"} />
          ))}
        </div>
        <div className={styles.subContents}>
          <div className={styles.item}>
            {/* TODO : 궁금해요/응원해요 아아콘 결정되면 수정 */}
            <IcTest width={24} height={24} />
            <span>{postData.likeCounts}</span>
          </div>
        </div>
      </div>
      <Divider size={"large"} />
      <div className={styles.container}>
        <div className={styles.commentTitle}>
          댓글{" "}
          <span className={styles.commentCount}>
            {postData.totalCommentCounts}
          </span>
        </div>
        <CommentList comments={commentsData} />
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
