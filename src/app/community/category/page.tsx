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
import { useCallback, useEffect, useState } from "react";
import { components } from "@type/schema";
import { postPostFiltersRequest } from "@api/domain/community/search";
import nocategory from "@asset/image/nocategory.png";
import { useGetBodies, useGetDisease, useGetSymptoms } from "@api/domain/mypage/edit-pet/hook";
import Loading from "@common/component/Loading/Loading.tsx";
import Image from "next/image";

export const validTypes = ["symptom", "hospital", "healing", "magazine"];
const categoryMapping: { [key: string]: string } = {
  symptom: "증상·질병",
  hospital: "병원고민",
  healing: "일상·치유",
  magazine: "코코스매거진",
};

const Page = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const typeId = searchParams.get("id");
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

    router.push(PATH.COMMUNITY.ROOT);
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

  useEffect(() => {
    fetchPostData();
  }, []);

  if (!type || !validTypes.includes(type)) {
    return (
      <>
        <div className={styles.emptyContainer}>
          <Image
            src={nocategory}
            alt="게시글 없음."
            width={276}
            height={155}
            style={{
              objectFit: "cover",
            }}
          />
          <h1>아직 등록된 게시글이 없어요</h1>
          <div className={styles.floatingBtnContainer}>
            <FloatingBtn onClick={() => router.push(`/community/write?category=${type}`)} />
          </div>
        </div>
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
          <div className={styles.emptyContainer}>
            <Image
              src={nocategory}
              alt="게시글 없음."
              width={276}
              height={155}
              style={{
                objectFit: "cover",
              }}
            />
            <h1>아직 등록된 게시글이 없어요</h1>
            <div className={styles.floatingBtnContainer}>
              <FloatingBtn onClick={() => router.push(`/community/write?category=${type}`)} />
            </div>
          </div>
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
            <FloatingBtn onClick={() => router.push(`/community/write?category=${type}`)} />
          </div>
        )}
      </div>
      <FilterBottomSheet handleDimmedClose={handleDimmedClose} onSubmitClick={onSubmitClick} />
    </>
  );
};

export default Page;
