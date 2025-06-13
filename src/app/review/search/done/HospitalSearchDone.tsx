"use client";
import { IcLeftarrow, IcSearch } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import { ChangeEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import noSearchResult from "@asset/image/noSearchResult.png";
import Image from "next/image";
import dynamic from "next/dynamic";
import { styles } from "./HospitalSearchDone.css.ts";
import Divider from "@common/component/Divider/Divider.tsx";
import { useGetHospitalSearch } from "@api/domain/hospitals/search/hook";
import { PATH } from "@route/path.ts";
import { Hospital } from "@api/domain/hospitals/search";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), { ssr: false });

function HospitalSearchDoneContent() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("searchText") || "";
  const [searchText, setSearchText] = useState<string>(query);
  const router = useRouter();

  const { data, isPending, isError } = useGetHospitalSearch({
    locationType: "CITY",
    size: 10,
    sortBy: "REVIEW",
    keyword: query,
  });

  const hospitals = data?.data?.hospitals ?? [];

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onTextFieldClick = () => {
    if (!searchText.trim()) return;
    router.push(`${PATH.REVIEW.SEARCH}?searchText=${searchText}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchText.trim()) {
      e.preventDefault();
      router.push(`${PATH.REVIEW.HOSPITALS_DONE}?searchText=${searchText}`);
    }
  };

  const onTextFieldClear = (e: React.MouseEvent<HTMLButtonElement | SVGSVGElement>) => {
    e.stopPropagation();
    setSearchText("");
    router.push(PATH.REVIEW.SEARCH);
  };

  const onBackClick = () => {
    router.back();
  };

  const onClickHospital = (hospitalId: number) => {
    router.push(`${PATH.HOSPITAL.ROOT}/${hospitalId}`);
  };

  const defaultImage = noSearchResult.src;

  if (isPending) {
    return <Loading height={80} />;
  }

  if (isError) {
    return <div className={styles.noSearchData}>에러가 발생했습니다. 잠시 후 다시 시도해 주세요.</div>;
  }

  return (
    <div>
      <div className={styles.searchHeader}>
        <IcLeftarrow className={styles.icon} onClick={onBackClick} />
        <TextField
          value={searchText}
          placeholder={"우리 동네를 알려주세요 (예:서초동)"}
          onChange={onChange}
          icon={<IcSearch />}
          onClearClick={onTextFieldClear}
          onClick={onTextFieldClick}
          onKeyDown={onKeyDown}
        />
      </div>
      {hospitals.length === 0 ? (
        <div className={styles.noSearchData}>
          <Image
            className={styles.noSearchResultImage}
            src={noSearchResult}
            alt="검색 결과 없음"
            width={276}
            height={155}
          />
          <span className={styles.noSearchText}>검색 결과를 찾지 못했어요.</span>
          <span className={styles.noSearchRecommendText}>
            {"검색어를 확인하거나"}
            <br />
            {"다른 키워드로 검색해 보세요."}
          </span>
        </div>
      ) : (
        <div className={styles.searchWrap}>
          {hospitals.map((hospital: Hospital) => (
            <div
              key={`hospital-${hospital.id}`}
              className={styles.hospitalItem}
              onClick={() => onClickHospital(hospital.id)}
            >
              <div className={styles.hospitalInfo}>
                <div className={styles.hospitalText}>
                  <h3 className={styles.hospitalName}>{hospital.name}</h3>
                  <p className={styles.hospitalAddress}>
                    {hospital.address} 리뷰 {hospital.reviewCount}{" "}
                  </p>
                </div>
                <div className={styles.hospitalImage}>
                  <Image src={hospital.image || defaultImage} alt={hospital.name} width={100} height={100} />
                </div>
              </div>
              <Divider size="small" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const HospitalSearchDone = () => {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <HospitalSearchDoneContent />
    </Suspense>
  );
};

export default HospitalSearchDone;
