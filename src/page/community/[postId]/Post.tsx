import React, { useState } from "react";
import HeaderNav from "@common/component/HeaderNav/HeaderNav.tsx";
import {
  IcEllipses,
  IcLeftarrow,
  IcoSkeleton,
  IcPostImageSkeleton,
  IcTest,
} from "@asset/svg";
import { styles } from "@page/community/[postId]/Post.css.ts";
import { Button } from "@common/component/Button";
import Chip from "@common/component/Chip/Chip.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
import CommentList from "@common/component/Comment/CommentList.tsx";
import { TextField } from "@common/component/TextField";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";

const PostDetail = () => {
  const postData = {
    nickname: "리트리버 사랑해",
    userProfile: "userProfile",
    breed: "골든리트리버",
    petAge: 12,
    likeCounts: 0,
    totalCommentCounts: 0,
    title: "강아지 헥헥 거림 증상",
    content: "강아지가 2주전부터 헥헤걱림 증상이 심한데 원인을 알 수 있을까요?",
    images: [],
    category: "category",
    tags: ["tag1", "tag2"],
    createdAt: "2025-01-13T10:00:00Z",
    updatedAt: "2025-01-13T12:00:00Z",
  };

  const commentsData = [
    {
      id: 1,
      profileImage: "https://example.com/profile1.jpg",
      nickname: "GoldenRetrieverLover",
      breed: "골든리트리버",
      petAge: 5,
      content:
        "우리 강아지도 비슷한 증상이 있었어요. 병원에 가보니 괜찮다고 하더라고요.",
      createdAt: new Date(2025, 0, 13), // 2025년 1월 13일
      isWriter: false,
      subComments: [
        {
          id: 101,
          profileImage: "https://example.com/profile2.jpg",
          nickname: "DogExpert",
          breed: "포메라니안",
          petAge: 2,
          content: "정확한 진단을 받으려면 병원 방문이 필수입니다!",
          createdAt: new Date(2025, 0, 13, 15, 30), // 2025년 1월 13일 오후 3시 30분
          isWriter: true,
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
      createdAt: new Date(2025, 0, 12), // 2025년 1월 12일
      isWriter: true,
      subComments: [
        {
          id: 102,
          profileImage: "https://example.com/profile4.jpg",
          nickname: "VetConsultant",
          breed: "시츄",
          petAge: 4,
          content: "스트레스나 특정 음식을 먹었을 때 헥헥거릴 수 있습니다.",
          createdAt: new Date(2025, 0, 12, 10, 0), // 2025년 1월 12일 오전 10시
          isWriter: false,
        },
        {
          id: 103,
          profileImage: "https://example.com/profile5.jpg",
          nickname: "PuppyLover",
          breed: "푸들",
          petAge: 1,
          content: "저희 강아지도 이런 경우가 있었는데 산책 후 회복됐어요!",
          createdAt: new Date(2025, 0, 12, 12, 15), // 2025년 1월 12일 오후 12시 15분
          isWriter: false,
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
      createdAt: new Date(2025, 0, 11), // 2025년 1월 11일
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
    // TODO : 뒤로가기 버튼 클릭 시 이벤트
  };

  const onDelete = () => {
    // TODO : 게시물 삭제하기 버튼 클릭 시 이벤트
  };

  return (
    <>
      <HeaderNav
        leftIcon={<IcLeftarrow />}
        onLeftClick={onBackClick}
        type={"noTitle"}
        rightBtn={<MoreModal iconSize={24} onDelete={onDelete} />}
      />
      <div className={styles.container}>
        <Button
          leftIcon={<IcTest width={20} />}
          label={"병원고민"}
          variant={"outlineNeutral"}
          size={"tag"}
          disabled={true}
        />
        <div className={styles.top}>
          {
            // <img src={postData.userProfile} alt="userProfile"/>
            <IcoSkeleton className={styles.userProfile} /> // TODO : 프로필 이미지로 수정
          }
          <div className={styles.info}>
            <div className={styles.infoName}>{postData.nickname}</div>
            <div className={styles.infoDetail}>
              {postData.breed}·{postData.petAge}개 · {postData.createdAt}
            </div>
          </div>
        </div>
        <div>
          <div className={styles.title}>{postData.title}</div>
          <div className={styles.content}>{postData.content}</div>
        </div>
        {/* TODO : 서버에서 받아온 이미지로 수정*/}
        <IcPostImageSkeleton className={styles.image} />
        <IcPostImageSkeleton className={styles.image} />
        <div className={styles.labelWrap}>
          {postData.tags.map((tag, index) => (
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
