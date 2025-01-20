import { IcLeftarrow, IcSearch, IcSearchFillter, IcSearchFillterBlue } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import { ChangeEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styles } from "@page/community/search/done/SearchDone.css.ts";
import { PATH } from "@route/path.ts";
import Content from "@common/component/Content/Content.tsx";
import { searchDoneData } from "@shared/constant/searchDoneData.ts";

const SearchDone = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("searchText");
  const [isFilterActive, setIsFilterActive] = useState(false); // TODO: 필터 활성화 설정 필요
  const [searchText, setSearchText] = useState(query || "");
  const navigate = useNavigate();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onTextFieldClick = () => {
    navigate(PATH.COMMUNITY.SEARCH + `?searchText=${searchText}`);
  };

  const onBackClick = () => {
    navigate(PATH.COMMUNITY.ROOT);
  };

  const onClickPost = (postId: number) => {
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
        {isFilterActive ? <IcSearchFillterBlue /> : <IcSearchFillter />}
        {searchDoneData.map((data, index) => (
          <Content
            key={index}
            breed={data.breed}
            age={data.age}
            postTitle={data.postTitle}
            postContent={data.postContent}
            likeCnt={data.likeCnt}
            commentCnt={data.commentCnt}
            timeAgo={data.timeAgo}
            onClick={() => onClickPost(data.id)} //TODO: postId 로 변경
          />
        ))}
      </div>
    </div>
  );
};

export default SearchDone;
