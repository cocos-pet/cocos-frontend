"use client";
import { IcLeftarrow, IcSearch, } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import { ChangeEvent, Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { mockHospitalSearchResult } from "@shared/constant/hospitalSearchData";
import noSearchResult from "@asset/image/noSearchResult.png";
import Image from "next/image";
import dynamic from "next/dynamic";
import { styles } from "./HospitalSearchDone.css.ts";
import LocationHeader from "@app/review/locationHeader/locationHeader.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), { ssr: false });

function HospitalSearchDoneContent() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("searchText") || "";
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [searchText, setSearchText] = useState(query);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!searchText) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [searchText]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onTextFieldClick = () => {
    router.push(`/review/search/hospitals?searchText=${searchText}`);
  };

  const onTextFieldClear = (e: React.MouseEvent<HTMLButtonElement | SVGSVGElement>) => {
    e.stopPropagation();
    setSearchText("");
    router.push("/review/search/hospitals");
  };

  const onBackClick = () => {
    router.back();
  };

  const onClickHospital = (hospitalId: number) => {
    router.push(`/review/hospital/${hospitalId}`);
  };

  if (isLoading) {
    return <Loading height={80} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchHeader}>
        <IcLeftarrow className={styles.icon} onClick={onBackClick} />
        <TextField
          value={searchText}
          placeholder={"우리 동네를 알려주세요 (예:서초동)"}
          onChange={onChange}
          icon={<IcSearch />}
          onClearClick={onTextFieldClear}
          onClick={onTextFieldClick}
        />
      </div>
      <LocationHeader />
        {mockHospitalSearchResult.hospitals.length === 0 ? (
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
            {mockHospitalSearchResult.hospitals.map((hospital) => (
              <div
                key={`hospital-${hospital.id}`}
                className={styles.hospitalItem}
                onClick={() => onClickHospital(hospital.id)}
              >
                <div className={styles.hospitalInfo}>
                  <div className={styles.hospitalText}>
                    <h3 className={styles.hospitalName}>{hospital.name}</h3>
                    <p className={styles.hospitalAddress}>{hospital.address} · 리뷰 {hospital.reviewCount} </p>
                  </div>
                  <div className={styles.hospitalImage}>
                    <Image src={hospital.imageUrl || ''} alt={hospital.name} width={100} height={100} />
                  </div>
                </div>
                <Divider size="small"/>
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