"use client";
import { styles } from "./hospitals.css";
import { IcLeftarrow, IcSearch } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import React, {
  ChangeEvent,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import {
  useGetHospitalSearchKeywords,
  usePostHospitalSearchKeyword,
} from "@api/domain/hospitals/search/hook";
import {
  HospitalSearchKeywordsResponse,
  Keyword,
} from "@api/domain/hospitals/search";
import { PATH } from "@route/path";
import { useAuth } from "@providers/AuthProvider";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), {
  ssr: false,
});

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get("searchText") || "";
  const [searchText, setSearchText] = useState(query);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isAuthenticated } = useAuth();

  const inputRef = useRef<HTMLInputElement>(null);

  const { data: keywordsData, isLoading } =
    useGetHospitalSearchKeywords(isAuthenticated);
  const { mutate: saveKeyword } = usePostHospitalSearchKeyword();

  const handleSearch = (keyword: string) => {
    if (!keyword.trim()) {
      alert("검색어를 입력하세요!");
      return;
    }
    saveKeyword(keyword, {
      onSettled: () => {
        router.push(
          `${PATH.REVIEW.SEARCH}/done?searchText=${encodeURIComponent(keyword)}`
        );
      },
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isSubmitting) {
      e.preventDefault();
      setIsSubmitting(true);
      handleSearch(searchText);
      setTimeout(() => setIsSubmitting(false), 500);
    }
  };

  const handleNavigate = (keyword: string) => {
    router.push(
      `${PATH.REVIEW.SEARCH}/done?searchText=${encodeURIComponent(keyword)}`
    );
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onBackClick = () => {
    router.push(PATH.REVIEW.ROOT);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const keywords =
    (keywordsData as HospitalSearchKeywordsResponse)?.data?.keywords || [];

  if (isLoading) return <Loading height={45} />;

  return (
    <div className={styles.container}>
      <div className={styles.searchHeader}>
        <IcLeftarrow className={styles.icon} onClick={onBackClick} />
        <TextField
          ref={inputRef}
          value={searchText}
          placeholder={"우리 동네를 알려주세요 (예:서초동)"}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          icon={
            <IcSearch
              width={20}
              height={20}
              onClick={() => handleSearch(searchText)}
            />
          }
          onClearClick={() => setSearchText("")}
        />
      </div>
      {isAuthenticated && (
        <div className={styles.searchContent}>
          <div className={styles.title}>최근 검색 기록</div>
          <ul className={styles.list}>
            {keywords.map((keyword: Keyword) => (
              <li
                key={keyword.id}
                className={styles.listItem}
                onClick={() => {
                  if (keyword.content) handleNavigate(keyword.content);
                }}
              >
                {keyword.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const Search = () => {
  return (
    <Suspense fallback={<Loading height={80} />}>
      <SearchContent />
    </Suspense>
  );
};

export default Search;
