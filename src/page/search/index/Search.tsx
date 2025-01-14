import { styles } from "@page/search/index/Search.css.ts";
import { IcLeftarrow } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchHeader}>
        <IcLeftarrow />
        <TextField
          value={searchText}
          placeholder={"검색어를 입력해주세요"}
          onChange={onChange}
          leftIcon={<IcLeftarrow />}
        />
      </div>
    </div>
  );
};

export default Search;
