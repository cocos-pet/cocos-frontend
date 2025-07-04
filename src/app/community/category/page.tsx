"use client";

import { useRouter, useSearchParams } from "next/navigation";
import * as styles from "./Category.css";
import Content from "@common/component/Content/Content";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { Icfilter, Icfilteron, IcLeftarrow, IcSearch } from "@asset/svg";
import FloatingBtn from "@common/component/FloatingBtn/Floating";
import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet";
import { useFilterStore } from "@store/filter";
import { PATH } from "@route/path";
import { formatTime } from "@shared/util/formatTime";
import { usePostPostFilters } from "@api/domain/community/search/hook";
import { Suspense, useCallback, useEffect, useState } from "react";
import { components } from "@type/schema";
import { postPostFiltersRequest } from "@api/domain/community/search";
import { useGetBodies, useGetDisease, useGetSymptoms } from "@api/domain/mypage/edit-pet/hook";
import dynamic from "next/dynamic";
import NoData from "@shared/component/NoData/NoData.tsx";
import { useAuth } from "@providers/AuthProvider";
import { useIsPetRegistered } from "@common/hook/useIsPetRegistered";
import { Modal } from "@common/component/Modal/Modal";

const Loading = dynamic(() => import("../../../common/component/Loading/Loading.tsx"), { ssr: false });

export const validTypes = ["symptom", "hospital", "healing", "magazine"];
const categoryMapping: { [key: string]: string } = {
  symptom: "증상·질병",
  hospital: "병원고민",
  healing: "일상·치유",
  magazine: "코코스매거진",
};

// 로딩 컴포넌트
const LoadingFallback = () => <Loading height={80} />;

// 메인 컨텐츠 컴포넌트
const CategoryContent = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const type = searchParams?.get("type");
  const typeId = searchParams?.get("id");
  const [posts, setPosts] = useState<components["schemas"]["PostResponse"][]>([]);
  const { mutate: fetchPosts, isPending } = usePostPostFilters();
  const router = useRouter();

  // 필터 관련 상태와 hooks
  const { isOpen, setOpen, category, setCategory, setCategoryData, selectedChips, toggleChips, categoryData } =
    useFilterStore();
  const { clearAllChips } = useFilterStore();

  const [bodyDiseaseIds, setBodyDiseaseIds] = useState<number[]>([]);
  const [bodySymptomsIds, setBodySymptomsIds] = useState<number[]>([]);
  const { data: diseaseBodies } = useGetBodies("DISEASE");
  const { data: symptomBodies } = useGetBodies("SYMPTOM");
  const { data: symptoms } = useGetSymptoms(bodySymptomsIds);
  const { data: disease } = useGetDisease(bodyDiseaseIds);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (symptoms?.bodies) {
      setCategoryData("symptoms", symptoms.bodies);
    }
    if (disease?.bodies) {
      setCategoryData("disease", disease.bodies);
    }
  }, [symptoms, disease, setCategoryData]);

  useEffect(() => {
    if (diseaseBodies?.bodies && symptomBodies?.bodies) {
      const diseaseIdArr = diseaseBodies.bodies.map((item) => item.id as number);
      const symptomIdArr = symptomBodies.bodies.map((item) => item.id as number);
      if (diseaseIdArr.length && symptomIdArr.length) {
        setBodyDiseaseIds(diseaseIdArr);
        setBodySymptomsIds(symptomIdArr);
      }
    }
  }, [diseaseBodies, symptomBodies]);

  const isFilterOn =
    !!selectedChips.breedId.length || !!selectedChips.diseaseIds.length || !!selectedChips.symptomIds.length;

  const fetchPostData = useCallback(() => {
    if (!typeId) return;

    const filterPayload: postPostFiltersRequest = {
      categoryId: Number(typeId),
      sortBy: "RECENT",
      animalIds: selectedChips.breedId.length > 0 ? selectedChips.breedId : undefined,
      symptomIds: selectedChips.symptomIds.length > 0 ? selectedChips.symptomIds : undefined,
      diseaseIds: selectedChips.diseaseIds.length > 0 ? selectedChips.diseaseIds : undefined,
    };

    fetchPosts(filterPayload, {
      onSuccess: (data) => {
        setPosts(data);
      },
      onError: (error) => {
        console.error("필터링된 게시글 조회 실패:", error);
      },
    });
  }, [fetchPosts, typeId, selectedChips]);

  const handleGoBack = () => {
    clearAllChips();

    router.back();
  };

  const handleGoSearch = () => {
    router.push(PATH.COMMUNITY.SEARCH);
  };
  const handleDimmedClose = () => {
    clearAllChips();
  };

  const onSubmitClick = () => {
    fetchPostData();
  };

  const { isAuthenticated } = useAuth();
  const isPetRegistered = useIsPetRegistered();

  const handleWriteClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    if (!isPetRegistered) {
      router.push(PATH.ONBOARDING.COMPLETE);
      return;
    }
    router.push(`/community/write?category=${type}`);
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  if (!type || !validTypes.includes(type)) {
    return (
      <>
        <NoData
          label={"아직 등록된 리뷰가 없어요"}
          onBtnClick={() => router.push(`/community/write?category=${type}`)}
        />
        <FilterBottomSheet handleDimmedClose={handleDimmedClose} onSubmitClick={onSubmitClick} />
      </>
    );
  }

  if (isPending) {
    return <Loading height={80} />;
  }

  if (posts.length === 0) {
    return (
      <>
        <div className={styles.categoryContainer}>
          <HeaderNav
            leftIcon={<IcLeftarrow />}
            centerContent={categoryMapping[type]}
            rightBtn={<IcSearch />}
            onLeftClick={handleGoBack}
            onRightClick={handleGoSearch}
          />
          {type !== "magazine" && (
            <div className={styles.filterContainer}>
              {isFilterOn ? (
                <Icfilteron onClick={() => setOpen(true)} width={24} />
              ) : (
                <Icfilter onClick={() => setOpen(true)} width={24} />
              )}
            </div>
          )}
          <NoData
            label={"아직 등록된 리뷰가 없어요"}
            onBtnClick={() => router.push(`/community/write?category=${type}`)}
          />
        </div>
        <FilterBottomSheet handleDimmedClose={handleDimmedClose} onSubmitClick={onSubmitClick} />
      </>
    );
  }

  const categoryName = categoryMapping[type] || "알 수 없는 카테고리";

  return (
    <>
      <div className={styles.categoryContainer}>
        <HeaderNav
          leftIcon={<IcLeftarrow />}
          centerContent={categoryName}
          rightBtn={<IcSearch />}
          onLeftClick={handleGoBack}
          onRightClick={handleGoSearch}
        />

        {type !== "magazine" && (
          <div className={styles.filterContainer}>
            {isFilterOn ? (
              <Icfilteron onClick={() => setOpen(true)} width={24} />
            ) : (
              <Icfilter onClick={() => setOpen(true)} width={24} />
            )}
          </div>
        )}

        <div className={styles.postsContainer}>
          {posts.map((post) => (
            <Content
              key={post.id}
              breed={type === "magazine" ? "코코스" : post.breed}
              petAge={type === "magazine" ? undefined : post.petAge}
              postTitle={post.title}
              postContent={post.content}
              likeCnt={post.likeCount}
              commentCnt={post.commentCount}
              postImage={post.image}
              onClick={() => router.push(`${PATH.COMMUNITY.ROOT}/${post.id}`)}
              timeAgo={formatTime(post.updatedAt as string)}
              category={post.category}
              likeIconType="curious"
            />
          ))}
        </div>

        {type !== "magazine" && (
          <div className={styles.floatingBtnContainer}>
            <FloatingBtn onClick={handleWriteClick} />
          </div>
        )}
      </div>
      <FilterBottomSheet handleDimmedClose={handleDimmedClose} onSubmitClick={onSubmitClick} />
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

// 메인 컴포넌트
const Category = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CategoryContent />
    </Suspense>
  );
};

export default Category;
