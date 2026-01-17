import { IcLeftarrow, IcSearch } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { styles } from "@app/community/search/done/SearchDone.css.ts";
import { PATH } from "@route/path.ts";
import Content from "@common/component/Content/Content.tsx";
import { usePostPostFilters } from "@api/domain/community/search/hook.ts";
import { SelectedChips, useFilterStore } from "@store/filter.ts";
import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet.tsx";
import { useGetAnimal, useGetBodies, useGetDisease, useGetSymptoms } from "@api/domain/mypage/edit-pet/hook.ts";
import { formatTime } from "@shared/util/formatTime";
import noSearchResult from "@asset/image/noSearchResult.png";
import dynamic from "next/dynamic";
import LazyImage from "@common/component/LazyImage";
import { SearchFilter } from "@app/community/_component/SearchFilter/SearchFilter.tsx";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), {
  ssr: false,
});

interface SearchDonePropTypes {
  id?: number;
  breed?: string;
  petAge?: number;
  title?: string;
  content?: string;
  likeCount?: number;
  commentCount?: number;
  createdAt?: string;
  updatedAt?: string;
  image?: string;
  category?: string;
}

function SearchDone() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("searchText");

  const [searchDoneData, setSearchDoneData] = useState<Array<SearchDonePropTypes>>([]);
  const [searchText, setSearchText] = useState(query || "");
  const router = useRouter();
  const { mutate, isPending } = usePostPostFilters();
  const [bodyDiseaseIds, setBodyDiseaseIds] = useState<number[]>([]);
  const [bodySymptomsIds, setBodySymptomsIds] = useState<number[]>([]);
  const { setCategoryData, selectedChips, clearAllChips, setOpen } = useFilterStore();
  const { data: diseaseBodies } = useGetBodies("DISEASE");
  const { data: symptomBodies } = useGetBodies("SYMPTOM");
  const { data: symptoms } = useGetSymptoms(bodySymptomsIds);
  const { data: disease } = useGetDisease(bodyDiseaseIds);
  const { data: animal } = useGetAnimal();

  useEffect(() => {
    if (animal?.animals) {
      setCategoryData("breeds", animal.animals);
    }
    if (symptoms?.bodies) {
      setCategoryData("symptoms", symptoms.bodies);
    }
    if (disease?.bodies) {
      setCategoryData("disease", disease.bodies);
    }
  }, [symptoms, disease, animal]);

  const isFilterActive = useMemo(() => {
    return (
      selectedChips.breedId.length > 0 || selectedChips.symptomIds.length > 0 || selectedChips.diseaseIds.length > 0
    );
  }, [selectedChips]);

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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onTextFieldClick = () => {
    clearAllChips();
    router.push(PATH.COMMUNITY.SEARCH);
  };

  const onTextFieldClear = (e: React.MouseEvent<HTMLButtonElement | SVGSVGElement>) => {
    e.stopPropagation();
    setSearchText("");
    clearAllChips();
    router.push(`${PATH.COMMUNITY.SEARCH}`);
  };

  const onBackClick = () => {
    clearAllChips();
    router.back();
  };

  const onClickPost = (postId: number | undefined) => {
    router.push(`${PATH.COMMUNITY.ROOT}/${postId}`);
  };

  const handleFilterSubmit = (selectedChipsFromProps?: SelectedChips) => {
    setOpen(false);
    const chipsToUse = selectedChipsFromProps || selectedChips; // 바텀시트에서는 전역상태 사용, 칩 클릭 시에는 최신 상태 사용

    if (searchText) {
      mutate(
        {
          keyword: searchText,
          animalIds: chipsToUse.breedId,
          symptomIds: chipsToUse.symptomIds,
          diseaseIds: chipsToUse.diseaseIds,
          sortBy: "RECENT",
        },
        {
          onSuccess: (data) => {
            setSearchDoneData(data || []);
            console.log("Filter Search Success:", data);
          },
          onError: (error) => {
            console.error("Filter Search Error:", error);
          },
        },
      );
    }
  };

  useEffect(() => {
    if (searchText) {
      mutate(
        {
          keyword: searchText,

          sortBy: "RECENT",
        },
        {
          onSuccess: (data) => {
            setSearchDoneData(data || []);
          },
          onError: () => {
            alert("검색에 실패했습니다.");
          },
        },
      );
    }
  }, [searchText]);

  if (isPending) {
    return <Loading height={80} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchHeader}>
        <IcLeftarrow className={styles.icon} onClick={onBackClick} />
        <TextField
          value={searchText}
          placeholder={"검색어를 입력해주세요"}
          onChange={onChange}
          icon={<IcSearch />}
          onClearClick={onTextFieldClear}
          onClick={onTextFieldClick}
        />
      </div>

      <div className={styles.searchContent}>
        <SearchFilter isActive={isFilterActive} onFilterClick={(selectedChipsFromProps) => handleFilterSubmit(selectedChipsFromProps)}  />

        {searchDoneData.length === 0 ? (
          <div className={styles.noSearchData}>
            <LazyImage
              className={styles.noSearchResultImage}
              src={noSearchResult}
              alt="검색 결과 없음"
              width="27.6rem"
              height="15.5rem"
            />
            <span className={styles.noSearchText}>검색 결과를 찾지 못했어요.</span>
            <span className={styles.noSearchRecommendText}>
              {"검색어를 확인하거나"}
              <br />
              {"다른 키워드로 검색해 보세요."}
            </span>
          </div>
        ) : (
          <div className={styles.searchWrap}>
            {searchDoneData?.map((data) => (
              <Content
                key={`search-done-${data.id}`}
                breed={data?.breed}
                petAge={data?.petAge}
                postTitle={data?.title}
                postContent={data.content}
                likeCnt={data.likeCount}
                commentCnt={data.commentCount}
                timeAgo={formatTime(data.createdAt as string)}
                onClick={() => onClickPost(data.id)}
              />
            ))}
          </div>
        )}
      </div>

      <FilterBottomSheet onSubmitClick={handleFilterSubmit} />
    </div>
  );
}

export default SearchDone;
