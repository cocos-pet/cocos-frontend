import { styles } from "@page/community/search/index/Search.css.ts";
import { IcLeftarrow, IcSearch } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PATH } from "@route/path.ts";
import {
  useSearchGet,
  useSearchPost,
} from "@api/domain/community/search/hook.ts";

const Search = () => {
  const user = {
    // TODO : 나중에 지워야함.
    accessToken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MzcyMTAxMzgsImV4cCI6MTczNzgxNDkzOCwibWVtYmVySWQiOjF9.f6sCaL3PFg7yMb6J4PM1h30ADsiq_fbON31IXPguJ_Pb4otyJ_Qh-Z_JYRxC8a2SMzaa6jr68uLc6w0_tuag3A",
  };
  localStorage.setItem("user", JSON.stringify(user));
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("searchText");
  const [searchText, setSearchText] = useState(query || "");
  const { data: recentSearchData, isLoading } = useSearchGet();
  const { mutate } = useSearchPost();

  const inputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (searchText: string) => {
    mutate(
      { keyword: searchText },
      {
        onSuccess: () => {
          handleNavigate(searchText);
        },
        onError: () => {
          alert("검색에 실패했습니다.");
        },
      }
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isSubmitting) {
      setIsSubmitting(true);
      onSubmit(searchText);

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
    navigate(-1);
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
          icon={<IcSearch />}
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
