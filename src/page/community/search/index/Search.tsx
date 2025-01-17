import { styles } from "@page/community/search/index/Search.css.ts";
import { IcLeftarrow, IcSearch } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { recentSearchData } from "@shared/constant/recentSearchData.ts";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PATH } from "@route/path.ts";

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("searchText");
  const [searchText, setSearchText] = useState(query || "");

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (searchText: string) => {
    searchParams.set("searchText", searchText);
    navigate(`${PATH.COMMUNITY.SEARCH_DONE}?${searchParams.toString()}`);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(searchText);
    }
  };

  const onBackClick = () => {
    navigate(PATH.COMMUNITY.ROOT);
  };

  useEffect(() => {
    // 페이지 진입 시 TextField에 포커스 설정
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.searchHeader}>
        <IcLeftarrow className={styles.icon} onClick={onBackClick} />
        <TextField
          ref={inputRef}
          value={searchText}
          placeholder={"검색어를 입력해주세요"}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          icon={<IcSearch onClick={() => onSubmit(searchText)} />}
          onClearClick={() => setSearchText("")}
        />
      </div>
      <div className={styles.searchContent}>
        <div className={styles.title}>최근 검색 기록</div>
        <ul className={styles.list}>
          {recentSearchData.map((data) => (
            <li key={data.id} className={styles.listItem} onClick={() => onSubmit(data.text)}>
              {data.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
