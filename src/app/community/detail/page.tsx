"use client";

import * as styles from "./SymptomDetail.css.ts";
import Content from "@common/component/Content/Content.tsx";
import HeaderNav from "@common/component/HeaderNav/HeaderNav.tsx";
import { IcDownArrow, IcFilterBlack, IcFilterBlue, IcLeftarrow, IcTarget } from "@asset/svg";
import { PATH } from "@route/path.ts";
import { formatTime } from "@shared/util/formatTime.ts";
import { usePostPostFilters } from "@api/domain/community/search/hook.ts";
import { Suspense, useCallback, useEffect, useState } from "react";
import { components } from "@type/schema";
import nocategory from "@asset/image/nocategory.png";
import { postPostFiltersRequestType } from "@api/domain/community/search";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Tab from "@common/component/Tab/Tab.tsx";
import ReviewItem from "@shared/component/ReviewItem/ReviewItem.tsx";
import { Button } from "@common/component/Button";
import { motion } from "framer-motion";
import BottomSheet from "@common/component/BottomSheet/BottomSheet.tsx";
import Chip from "@common/component/Chip/Chip.tsx";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), {
  ssr: false,
});

const symptomMapping: { [key: string]: string } = {
  1: "피부/털",
  2: "배/소화기",
  3: "소변/신장",
  4: "눈",
  5: "귀",
  6: "입",
  7: "배설",
  8: "폐/호흡기",
  9: "뼈/관절/근육",
  10: "뇌/신경계",
  11: "체중/몸",
  12: "행동/소리",
};

const sampleReviewData = {
  reviewCount: 2,
  cursorId: 102,
  reviews: [
    {
      id: 101,
      memberId: 2001,
      nickname: "멍멍이사랑해",
      breedName: "푸들",
      petDisease: "피부병",
      petAge: 3, // notion 명세에 없음
      vistitedAt: "2025-04-01",
      hospitalId: 10,
      hospitalName: "행복한동물병원",
      hospitalAddress: "서울특별시 강남구 도곡로 123",
      content:
        "친절하고 꼼꼼하게 진료해주셨어요. 재방문의사 100%친절하고 꼼꼼하게 진료해주셨어요. 재방문의사 100%친절하고 꼼꼼하게 진료해주셨어요. 재방문의사 100%친절하고 꼼꼼하게 진료해주셨어요. 재방문의사 100%친절하고 꼼꼼하게 진료해주셨어요. 재방문의사 100%친절하고 꼼꼼하게 진료해주셨어요. 재방문의사 100%",
      goodReviews: [
        { id: 1, name: "친절해요" },
        { id: 2, name: "설명이 자세해요" },
      ],
      badReviews: [{ id: 3, name: "기다림이 길어요" }],
      images: [
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
      ],
      symptoms: [
        { id: 101, name: "기침" },
        { id: 102, name: "호흡곤란" },
      ],
      diseases: [{ id: 201, name: "심장병" }],
      animal: "강아지",
      gender: "여아",
      breed: "푸들",
      weight: 4.2,
    },
    {
      id: 102,
      memberId: 2002,
      nickname: "고양이집사",
      breedName: "페르시안",
      petDisease: "요로결석",
      petAge: 3, // notion 명세에 없음
      vistitedAt: "2025-03-15",
      hospitalId: 11,
      hospitalName: "사랑동물병원",
      hospitalAddress: "서울특별시 서초구 서초대로 456",
      content: "24시간 운영이라 긴급한 상황에 도움이 되었어요.",
      goodReviews: [
        { id: 4, name: "24시간 운영" },
        { id: 5, name: "응급처치가 빨라요" },
      ],
      badReviews: [{ id: 6, name: "비용이 비싸요" }],
      images: [
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
      ],
      symptoms: [
        { id: 103, name: "소변보기 힘들어함" },
        { id: 104, name: "배가 아파보임" },
      ],
      diseases: [{ id: 202, name: "요로결석" }],
      animal: "고양이",
      gender: "남아",
      breed: "페르시안",
      weight: 3.8,
    },
  ],
} as const;

const reviewFilterConfig = {
  goodReviews: [
    { id: 1, name: "치료과정 설명이 상세해요" },
    { id: 2, name: "반려동물이 덜 스트레스 받아요" },
    { id: 3, name: "꼭 필요한 진료만 추천받았어요" },
    { id: 4, name: "의료진이 믿을만했어요" },
    { id: 5, name: "진료비용을 사전에 안내받았어요" },
    { id: 6, name: "처방전을 제공받았어요" },
  ],
  badReviews: [
    { id: 1, name: "설명이 부족했어요" },
    { id: 2, name: "반려동물이 진료 중 불안해했어요" },
    { id: 3, name: "진료비용 안내가 부족했어요" },
    { id: 4, name: "대기시간이 길었어요" },
  ],
};

// 로딩 컴포넌트
const LoadingFallback = () => <Loading height={80} />;
type ActiveTabType = "review" | "community";

// 빈 상태 컴포넌트
const EmptyState = () => (
  <div className={styles.emptyContainer}>
    <Image src={nocategory} alt="게시글 없음." style={{ objectFit: "cover" }} width={276} height={155} />
    <h1> 아직 등록된 게시글이 없어요 </h1>
  </div>
);

type ReviewActiveTabType = "good" | "bad";
const ReviewDetailContent = () => {
  const searchParams = useSearchParams();
  const typeId = searchParams?.get("id");
  const router = useRouter();
  const [isReviewFilterOpen, setIsReviewFilterOpen] = useState(false);
  const [isRegionFilterOpen, setIsRegionFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ReviewActiveTabType>("good");

  const handleClick = () => {
    setIsReviewFilterOpen(!isReviewFilterOpen);
  };

  const handleProfileClick = (nickname: string) => {
    router.push(`/profile?nickname=${nickname}`);
  };

  const handleRegionFilter = () => {
    // @TODO 지역 필터링 모달 연결
    setIsRegionFilterOpen(!isRegionFilterOpen);
    console.log("지역 필터링 클릭");
  };

  const handleTabClick = (tab: ReviewActiveTabType) => {
    setActiveTab(tab);
  };

  const isActiveTab = (tab: ReviewActiveTabType) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewFilter}>
        <div className={styles.reviewRegion} onClick={handleRegionFilter}>
          <IcTarget width={20} />
          <span className={styles.reviewRegionText}> 서울시 강남구</span>
          <motion.div
            style={{ height: "20px" }}
            animate={{ rotate: isRegionFilterOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <IcDownArrow width={20} />
          </motion.div>
        </div>
        <Button
          variant={"outlinePrimary"}
          size={"small"}
          label={
            <>
              필터
              {isReviewFilterOpen ? (
                <IcFilterBlue style={{ width: "20px" }} />
              ) : (
                <IcFilterBlack style={{ width: "20px" }} />
              )}
            </>
          }
          style={{ width: "fit-content" }}
          className={isReviewFilterOpen ? styles.filterButtonActive : styles.filterButton}
          onClick={handleClick}
        />
      </div>
      <div className={styles.reviewItemContainer}>
        {sampleReviewData.reviews.map((review) => (
          <ReviewItem
            key={review.id}
            handleProfileClick={() => handleProfileClick(review.nickname)}
            reviewData={review}
            isBlurred={true}
          />
        ))}
        {sampleReviewData.reviews.map((review) => (
          <ReviewItem
            key={review.id}
            handleProfileClick={() => handleProfileClick(review.nickname)}
            reviewData={review}
          />
        ))}
      </div>
      <BottomSheet isOpen={isReviewFilterOpen} handleOpen={setIsReviewFilterOpen}>
        <div className={styles.filterContent}>
          <div className={styles.filterTitle}>리뷰 필터</div>
          <div className={styles.tabContainer}>
            <Tab active={isActiveTab("good")} width={"100%"} onClick={() => handleTabClick("good")}>
              좋았던 점
            </Tab>
            <Tab active={isActiveTab("bad")} width={"100%"} onClick={() => handleTabClick("bad")}>
              아쉬웠던 점
            </Tab>
          </div>
          <div className={styles.filterContentText}>
            {activeTab === "good" &&
              reviewFilterConfig.goodReviews.map((item) => (
                <Chip key={item.id} size={"small"} label={item.name} color={"blue"} />
              ))}
            {activeTab === "bad" &&
              reviewFilterConfig.badReviews.map((item) => (
                <Chip key={item.id} size={"small"} label={item.name} color={"red"} />
              ))}
          </div>
          <div className={styles.filterButtonContainer}>
            <Button
              variant={"solidPrimary"}
              size={"large"}
              label={"확인하기"}
              style={{ width: "100%" }}
              onClick={() => {
                setIsReviewFilterOpen(false);
                //@TODO 필터링 세팅되도록 구현
              }}
            />
          </div>
        </div>
      </BottomSheet>
    </div>
  );
};

const CommunityDetailContent = () => {
  const searchParams = useSearchParams();
  const typeId = searchParams?.get("id");
  const [posts, setPosts] = useState<components["schemas"]["PostResponse"][]>([]);
  const { mutate: fetchPosts, isPending } = usePostPostFilters();
  const router = useRouter();

  const fetchPostData = useCallback(() => {
    if (!typeId) return;

    const filterPayload: postPostFiltersRequestType = {
      sortBy: "RECENT",
      bodyId: Number(typeId),
    };

    fetchPosts(filterPayload, {
      onSuccess: (data) => {
        setPosts(data);
      },
      onError: (error) => {
        console.error("데이터 가져오기 실패:", error);
      },
    });
  }, [fetchPosts, typeId]);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);

  if (!typeId) {
    return <EmptyState />;
  }

  if (isPending || posts.length === 0) {
    return <LoadingFallback />;
  }

  return (
    <>
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <Content
            key={post.id}
            breed={post.breed}
            petAge={post.petAge}
            postTitle={post.title}
            postContent={post.content}
            likeCnt={post.likeCount}
            commentCnt={post.commentCount}
            postImage={post.image}
            onClick={() => {
              router.push(`${PATH.COMMUNITY.ROOT}/${post.id}`);
            }}
            timeAgo={formatTime(post.updatedAt as string)}
            category={post.category}
          />
        ))}
      </div>
    </>
  );
};

const PostDetail = () => {
  const searchParams = useSearchParams();
  const typeId = searchParams?.get("id");
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ActiveTabType>("community");

  // 항상 헤더를 렌더링하여 hydration 문제 방지
  const symptomName = typeId ? symptomMapping[typeId] || "증상" : "증상";
  const isActiveTab = (tab: ActiveTabType) => {
    return activeTab === tab;
  };

  const handleTabClick = (tab: ActiveTabType) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.headerContainer}>
        <HeaderNav leftIcon={<IcLeftarrow />} centerContent={symptomName} onLeftClick={() => router.push(PATH.MAIN)} />
      </div>
      <div className={styles.tabContainer}>
        <Tab active={isActiveTab("community")} width={"100%"} onClick={() => handleTabClick("community")}>
          커뮤니티
        </Tab>
        <Tab active={isActiveTab("review")} width={"100%"} onClick={() => handleTabClick("review")}>
          병원리뷰
        </Tab>
      </div>
      {activeTab === "review" && <ReviewDetailContent />}
      {activeTab === "community" && <CommunityDetailContent />}
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PostDetail />
    </Suspense>
  );
};

export default Page;
