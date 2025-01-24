import { styles } from "@page/community/search/index/Search.css.ts";
import { IcLeftarrow, IcSearch } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PATH } from "@route/path.ts";
import { useSearchGet, useSearchPost } from "@api/domain/community/search/hook.ts";
import { useFilterStore } from "@store/filter.ts";

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("searchText");
  const [searchText, setSearchText] = useState(query || "");
  const { data: recentSearchData, isLoading } = useSearchGet();
  const { mutate } = useSearchPost();
  const { clearAllChips } = useFilterStore();

  const inputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (searchText: string) => {
    if (searchText.trim() === "") {
      return;
    }
    mutate(
      { keyword: searchText },
      {
        onSuccess: () => {
          handleNavigate(searchText);
          clearAllChips();
        },
        onError: () => {
          alert("검색에 실패했습니다.");
        },
      },
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isSubmitting) {
      setIsSubmitting(true);
      onSubmit(searchText);
      clearAllChips();

      setTimeout(() => {
        setIsSubmitting(false);
      }, 500);
    }
  };

  const handleNavigate = (searchText: string) => {
    searchParams.set("searchText", searchText);
    navigate(`${PATH.COMMUNITY.SEARCH_DONE}?searchText=${searchText}`);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onBackClick = () => {
    navigate(-2);
    clearAllChips();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  if (!recentSearchData || !recentSearchData.keywords || isLoading) return null;

  return (
    <div className={styles.container}>
      <div className={styles.searchHeader}>
        <IcLeftarrow className={styles.icon} onClick={onBackClick} />
        <TextField
          ref={inputRef}
          value={searchText}
          placeholder={"검색어를 입력해주세요"}
          onChange={onChange}
          onKeyDown={(e) => handleKeyDown(e)}
          icon={<IcSearch width={20} height={20} />}
          onClearClick={() => setSearchText("")}
        />
      </div>
      <div className={styles.searchContent}>
        <div className={styles.title}>최근 검색 기록</div>
        <ul className={styles.list}>
          {recentSearchData.keywords.map((data) => (
            <li
              key={data.id}
              className={styles.listItem}
              onClick={() => {
                if (data.content) handleNavigate(data.content);
              }}
            >
              {data.content || ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
