"use client";
import { IcLeftarrow, IcSearch } from "@asset/svg";
import { TextField } from "@common/component/TextField";
import { ChangeEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import noSearchResult from "@asset/image/noSearchResult.png";
import Image from "next/image";
import dynamic from "next/dynamic";
import { styles } from "./HospitalSearchDone.css.ts";
import LocationHeader from "@app/review/locationHeader/locationHeader.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
import { useQuery } from "@tanstack/react-query";
import { post } from "@api/index";
import { number } from "framer-motion";
import { PATH } from "@route/path.ts";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), { ssr: false });

interface Hospital {
  id: number;
  name: string;
  address: string;
  reviewCount: number;
  image: string;
}

function HospitalSearchDoneContent() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("searchText") || "";
  const [searchText, setSearchText] = useState<string>(query);
  const router = useRouter();

  const locationId = number;
  const locationType = "DISTRICT";

  const { data, isPending, isError } = useQuery({
    queryKey: ["hospitalList", query, locationId, locationType],
    queryFn: async () => {
      if (!query) return [];
      const response = await post(`/api/dev/hospitals?keyword=${encodeURIComponent(query)}`, {
        locationId,
        locationType,
        size: 10,
        sortBy: "REVIEW",
      });
      return (response.data ?? []) as Hospital[];
    },
    enabled: !!query,
    initialData: [],
  });

  const hospitals = data?.pages?.[0]?.hospitals ?? [];

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onTextFieldClick = () => {
    router.push(`${PATH.REVIEW.HOSPITALS_DONE}?searchText=${searchText}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`${PATH.REVIEW.HOSPITALS_DONE}?searchText=${searchText}`);
    }
  };

  const onTextFieldClear = (e: React.MouseEvent<HTMLButtonElement | SVGSVGElement>) => {
    e.stopPropagation();
    setSearchText("");
    router.push(PATH.REVIEW.HOSPITALS_DONE);
  };

  const onBackClick = () => {
    router.back();
  };

  const onClickHospital = (hospitalId: number) => {
    router.push(`/review/hospital/${hospitalId}`);
  };

  const defaultImage = noSearchResult.src;

  if (isPending) {
    return <Loading height={80} />;
  }

  if (isError) {
    return <div className={styles.noSearchData}>에러가 발생했습니다. 잠시 후 다시 시도해 주세요.</div>;
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
          onKeyDown={onKeyDown}
        />
      </div>
      <LocationHeader />
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
          {hospitals.map((hospital) => (
            <div
              key={`hospital-${hospital.id}`}
              className={styles.hospitalItem}
              onClick={() => onClickHospital(hospital.id)}
            >
              <div className={styles.hospitalInfo}>
                <div className={styles.hospitalText}>
                  <h3 className={styles.hospitalName}>{hospital.name}</h3>
                  <p className={styles.hospitalAddress}>
                    {hospital.address} · 리뷰 {hospital.reviewCount}{" "}
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
