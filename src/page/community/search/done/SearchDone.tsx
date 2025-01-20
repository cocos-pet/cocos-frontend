import {
  IcLeftarrow,
  IcSearch,
  IcSearchFillter,
  IcSearchFillterBlue,
} from "@asset/svg";
import { TextField } from "@common/component/TextField";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styles } from "@page/community/search/done/SearchDone.css.ts";
import { PATH } from "@route/path.ts";
import Content from "@common/component/Content/Content.tsx";
import { usePostPostFilters } from "@api/domain/community/search/hook.ts";
import { useFilterStore } from "@store/filter.ts";
import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet.tsx";

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
  const [isFilterActive, setIsFilterActive] = useState(false); // TODO: 필터 활성화 설정 필요
  const [searchDoneData, setSearchDoneData] = useState<
    Array<SearchDonePropTypes>
  >([]);
  const [searchText, setSearchText] = useState(query || "");
  const navigate = useNavigate();
  const { mutate } = usePostPostFilters();
  const {
    category,
    selectedChips,
    setCategory,
    isOpen,
    setOpen,
    toggleOpen,
    toggleChips,
    categoryData,
  } = useFilterStore();

  useEffect(() => {
    if (searchText) {
      mutate(
        {
          keyword: searchText,
          animalIds: selectedChips.breedId,
          symptomIds: selectedChips.symptomIds,
          diseaseIds: selectedChips.diseaseIds,
          sortBy: "RECENT",
          cursorId: undefined,
          categoryId: undefined,
          likeCount: undefined,
          createAt: undefined,
        },
        {
          onSuccess: (data) => {
            console.log(data);
            if (data) {
              setSearchDoneData(data);
            }
          },
          onError: (error) => {
            console.log(error);
          },
        }
      );
    }
  }, [isOpen, selectedChips]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onTextFieldClick = () => {
    navigate(PATH.COMMUNITY.SEARCH + `?searchText=${searchText}`);
  };
  console.log(searchDoneData);

  const onBackClick = () => {
    navigate(PATH.COMMUNITY.ROOT);
  };

  const onClickPost = (postId: number | undefined) => {
    navigate(PATH.COMMUNITY.ROOT + `/${postId}`);
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
          onClearClick={() => setSearchText("")}
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
        {searchDoneData?.map((data, index) => (
          <Content
            key={index}
            breed={data?.breed}
            age={data?.petAge}
            postTitle={data?.title}
            postContent={data.content}
            likeCnt={data.likeCount}
            commentCnt={data.commentCount}
            timeAgo={data.createdAt}
            onClick={() => onClickPost(data?.id)} //TODO: postId 로 변경
          />
        ))}
      </div>
      <FilterBottomSheet />
    </div>
  );
};

export default SearchDone;
