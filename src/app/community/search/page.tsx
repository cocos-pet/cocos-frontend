"use client";
import { IcLeftarrow, IcSearch } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import Chip from "@common/component/Chip/Chip";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path.ts";
import { useSearchGet, useSearchPopularGet, useSearchPost } from "@api/domain/community/search/hook.ts";
import { useFilterStore } from "@store/filter.ts";
import dynamic from "next/dynamic";
import { styles } from "./Search.css.ts";
import { useAuth } from "@providers/AuthProvider.tsx";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), { ssr: false });

const RECENT_KEYWORD_MAX = 5;

function Search() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const { isAuthenticated } = useAuth();
  const { mutate } = useSearchPost();
  const { clearAllChips } = useFilterStore();
  const { data: recentSearchData, isLoading } = useSearchGet(isAuthenticated);
  const { data: popularSearchData } = useSearchPopularGet();

  const inputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (searchText: string) => {
    if (searchText.trim() === "") {
      return;
    }
    if (!isAuthenticated) {
      handleNavigate(searchText);
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
    router.push(`${PATH.COMMUNITY.SEARCH_DONE}?searchText=${searchText}`);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onBackClick = () => {
    router.back();
    clearAllChips();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  if (isLoading) return <Loading height={45} />;

  const recentKeywords = (recentSearchData?.keywords ?? []).slice(0, RECENT_KEYWORD_MAX);
  const popularKeywords = popularSearchData?.keywords ?? [];

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

      {isAuthenticated && recentKeywords.length > 0 && (
        <div className={styles.section}>
          <div className={styles.title}>최근 검색 기록</div>
          <div className={styles.chipList}>
            {recentKeywords.map((data) => (
              <button
                key={data.id}
                type="button"
                className={styles.chipButton}
                onClick={() => {
                  if (data.content) handleNavigate(data.content);
                }}
              >
                <Chip label={data.content ?? ""} color="border" size="small" />
              </button>
            ))}
          </div>
        </div>
      )}

      {popularKeywords.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>인기 게시글을 확인해보세요</div>
            <div className={styles.sectionTitle}>반려인들이 주목하는 글 TOP 5</div>
          </div>
          <div className={styles.popularCard}>
            {popularKeywords.map((keyword, index) => (
              <React.Fragment key={`${keyword}-${index}`}>
                {index > 0 && <hr className={styles.popularDivider} />}
                <button type="button" className={styles.popularItem} onClick={() => handleNavigate(keyword)}>
                  <span className={styles.popularRank}>{index + 1}</span>
                  <span className={styles.popularKeyword}>{keyword}</span>
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
