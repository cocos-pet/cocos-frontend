"use client";
import { styles } from "./Hospitals.css";
import {IcLeftarrow, IcSearch} from "@asset/svg";
import {TextField} from "@common/component/TextField";
import React, {ChangeEvent, Suspense, useEffect, useRef, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import dynamic from "next/dynamic";
import { hospitalSearchData } from "@shared/constant/hospitalSearchData";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), { ssr: false });

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get("searchText") || "";
  const [searchText, setSearchText] = useState(query);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (searchText: string) => {
    if (searchText.trim() === "") {
      return;
    }
    // 목데이터로 검색 처리
    setIsLoading(true);
    setTimeout(() => {
      handleNavigate(searchText);
      setIsLoading(false);
    }, 500);
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
    router.push(`/review/search/hospitals/done?searchText=${searchText}`);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onBackClick = () => {
    router.back();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  if (isLoading) return <Loading height={45} />;

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
          icon={<IcSearch width={20} height={20} onClick={() => onSubmit(searchText)} />}
          onClearClick={() => setSearchText("")}
        />
      </div>
      <div className={styles.searchContent}>
        <div className={styles.title}>최근 검색 기록</div>
        <ul className={styles.list}>
          {hospitalSearchData.keywords.map((data) => (
            <li
              key={data.id}
              className={styles.listItem}
              onClick={() => {
                if (data.content) handleNavigate(data.content);
              }}
            >
              {data.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const Search = () => {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <SearchContent />
    </Suspense>
  );
};

export default Search;