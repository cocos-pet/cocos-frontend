import { IcLeftarrow, IcSearch } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import React, { ChangeEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styles } from "@page/search/done/SearchDone.css.ts";
import { PATH } from "@route/path.ts";

const SearchDone = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("searchText");

  const [searchText, setSearchText] = useState(query || "");
  const navigate = useNavigate();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onTextFieldClick = () => {
    navigate(PATH.SEARCH.ROOT + `?searchText=${searchText}`);
  };

  const onBackClick = () => {
    navigate(PATH.COMMUNITY.ROOT);
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
      <div className={styles.searchContent}></div>
    </div>
  );
};

export default SearchDone;
