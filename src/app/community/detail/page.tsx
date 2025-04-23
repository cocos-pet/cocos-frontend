"use client";

import * as styles from "./SymptomDetail.css.ts";
import Content from "@common/component/Content/Content.tsx";
import HeaderNav from "@common/component/HeaderNav/HeaderNav.tsx";
import { IcLeftarrow, IcUnderline } from "@asset/svg";
import { PATH } from "@route/path.ts";
import { formatTime } from "@shared/util/formatTime.ts";
import { usePostPostFilters } from "@api/domain/community/search/hook.ts";
import { Suspense, useCallback, useEffect, useState } from "react";
import { components } from "@type/schema";
import nocategory from "@asset/image/nocategory.png";
import { useFilterStore } from "@store/filter.ts";
import { postPostFiltersRequestType } from "@api/domain/community/search";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import HospitalReviewItem, { HospitalReviewItemProps } from "@common/component/HospitalReview/HospitalReviewItem.tsx";

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

const sampleReviews: HospitalReviewItemProps[] = [
  {
    memberId: 1,
    nickname: "우리멍멍이",
    profileImage: "https://example.com/profile1.jpg",
    breedName: "포메라니안",
    petDisease: "피부염",
    visitedAt: "2023-05-15",
    hospitalId: 1,
    hospitalName: "코코스 동물병원",
    hospitalAddress: "강남구 테헤란로 123",
    content: "우리 강아지 피부염 치료를 잘 해주셨어요. 선생님이 친절하고 설명도 자세히 해주셔서 만족스러웠습니다.",
    goodReviews: [
      { id: 1, name: "친절한 설명" },
      { id: 2, name: "정확한 진단" },
      { id: 3, name: "합리적인 가격" },
    ],
    badReviews: [],
    symptoms: [
      { id: 1, name: "가려움" },
      { id: 2, name: "탈모" },
    ],
    diseases: [{ id: 1, name: "아토피성 피부염" }],
    animal: "강아지",
    gender: "수컷",
    breed: "포메라니안",
    weight: 3.5,
  },
  {
    memberId: 2,
    nickname: "냥이엄마",
    profileImage: "https://example.com/profile2.jpg",
    breedName: "코리안 숏헤어",
    petDisease: "요로결석",
    visitedAt: "2023-06-20",
    hospitalId: 1,
    hospitalName: "코코스 동물병원",
    hospitalAddress: "강남구 테헤란로 123",
    content: "고양이 요로결석 치료받았습니다. 비용이 예상보다 많이 나와서 놀랐지만 치료는 잘 됐습니다.",
    goodReviews: [
      { id: 4, name: "전문적인 치료" },
      { id: 5, name: "깨끗한 시설" },
    ],
    badReviews: [{ id: 1, name: "높은 가격" }],
    symptoms: [
      { id: 3, name: "혈뇨" },
      { id: 4, name: "배뇨곤란" },
    ],
    diseases: [{ id: 2, name: "요로결석" }],
    animal: "고양이",
    gender: "암컷",
    breed: "코리안 숏헤어",
    weight: 4.2,
  },
];

// 로딩 컴포넌트
const LoadingFallback = () => <Loading height={80} />;

// 빈 상태 컴포넌트
const EmptyState = () => (
  <div className={styles.emptyContainer}>
    <Image src={nocategory} alt="게시글 없음." style={{ objectFit: "cover" }} width={276} height={155} />
    <h1> 아직 등록된 게시글이 없어요 </h1>
  </div>
);

const SymptomDetailContent = () => {
  const [isRecentPost, setIsRecentPost] = useState(true);
  const searchParams = useSearchParams();
  const typeId = searchParams?.get("id");

  const [posts, setPosts] = useState<components["schemas"]["PostResponse"][]>([]);
  const { mutate: fetchPosts, isPending } = usePostPostFilters();
  const router = useRouter();
  const { selectedChips } = useFilterStore();

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
  }, [fetchPosts, typeId, selectedChips]);

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
      <div className={styles.tabContainer}>
        <button
          type="button"
          className={styles.tabButton({ isActive: isRecentPost })}
          onClick={() => setIsRecentPost(true)}
        >
          커뮤니티
          {isRecentPost && <IcUnderline className={styles.underline} />}
        </button>
      </div>
      {sampleReviews.map((review, index) => (
        <HospitalReviewItem key={`review-${index}`} {...review} />
      ))}

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
  const typeId = searchParams.get("id");
  const router = useRouter();

  // 항상 헤더를 렌더링하여 hydration 문제 방지
  const symptomName = typeId ? symptomMapping[typeId] || "증상" : "증상";

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.headerContainer}>
        <HeaderNav leftIcon={<IcLeftarrow />} centerContent={symptomName} onLeftClick={() => router.push(PATH.MAIN)} />
      </div>
      <SymptomDetailContent />
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
