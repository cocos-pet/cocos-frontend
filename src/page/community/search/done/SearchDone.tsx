import { IcLeftarrow, IcSearch, IcSearchFillter, IcSearchFillterBlue } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styles } from "@page/community/search/done/SearchDone.css.ts";
import { PATH } from "@route/path.ts";
import Content from "@common/component/Content/Content.tsx";
import { usePostPostFilters } from "@api/domain/community/search/hook.ts";
import { useFilterStore } from "@store/filter.ts";
import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet.tsx";
import { useGetAnimal, useGetBodies, useGetDisease, useGetSymptoms } from "@api/domain/mypage/edit-pet/hook.ts";
import { formatTime } from "@shared/util/formatTime";
import noSearchResult from "@asset/image/noSearchResult.png";

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

const SearchDone = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("searchText");
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [searchDoneData, setSearchDoneData] = useState<Array<SearchDonePropTypes>>([]);
  const [searchText, setSearchText] = useState(query || "");
  const navigate = useNavigate();
  const { mutate } = usePostPostFilters();
  const [bodyDiseaseIds, setBodyDiseaseIds] = useState<number[]>([]);
  const [bodySymptomsIds, setBodySymptomsIds] = useState<number[]>([]);
  const { setCategoryData, selectedChips, clearAllChips, setOpen } = useFilterStore();
  const { data: diseaseBodies } = useGetBodies("DISEASE");
  const { data: symptomBodies } = useGetBodies("SYMPTOM");
  const { data: symptoms } = useGetSymptoms(bodyDiseaseIds);
  const { data: disease } = useGetDisease(bodySymptomsIds);
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

  useEffect(() => {
    if (!searchText) return;

    mutate(
      {
        keyword: searchText,
        animalIds: selectedChips.breedId,
        symptomIds: selectedChips.symptomIds,
        diseaseIds: selectedChips.diseaseIds,
        cursorId: undefined,
        categoryId: undefined,
        likeCount: undefined,
        createdAt: undefined,
        sortBy: "RECENT",
      },
      {
        onSuccess: (data) => {
          setSearchDoneData(data || []);
          console.log("Search Success:", data);
        },
        onError: (error) => {
          console.error("Search Error:", error);
        },
      },
    );
  }, [searchText, selectedChips, mutate]);

  // 필터 활성화 여부 계산
  useEffect(() => {
    setIsFilterActive(
      selectedChips.breedId.length > 0 || selectedChips.symptomIds.length > 0 || selectedChips.diseaseIds.length > 0,
    );
  }, [selectedChips]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onTextFieldClick = () => {
    clearAllChips();
    navigate(`${PATH.COMMUNITY.SEARCH}?searchText=${searchText}`);
  };

  const onTextFieldClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSearchText("");
    clearAllChips();
    navigate(`${PATH.COMMUNITY.SEARCH}`);
  };

  const onBackClick = () => {
    clearAllChips();
    const backPath = sessionStorage.getItem("searchBackUrl");
    navigate(`${backPath}`);
  };

  const onClickPost = (postId: number | undefined) => {
    navigate(`${PATH.COMMUNITY.ROOT}/${postId}`);
  };

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
        {isFilterActive ? (
          <IcSearchFillterBlue
            onClick={() => {
              setOpen(true);
            }}
          />
        ) : (
          <IcSearchFillter
            onClick={() => {
              setOpen(true);
            }}
          />
        )}

        {searchDoneData.length === 0 ? (
          <div className={styles.noSearchData}>
            <img className={styles.noSearchResultImage} src={noSearchResult} alt="검색 결과 없음" />
            <span className={styles.noSearchText}>검색 결과를 찾지 못했어요.</span>
            <span className={styles.noSearchRecommendText}>
              {"검색어를 확인하거나"}
              <br />
              {"다른 키워드로 검색해 보세요."}
            </span>
          </div>
        ) : (
          searchDoneData?.map((data) => (
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
          ))
        )}
      </div>

      <FilterBottomSheet />
    </div>
  );
};

export default SearchDone;
