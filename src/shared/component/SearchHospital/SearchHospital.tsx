import * as styles from "./SearchHospital.css";
import IcBottomSheetLine from "@asset/svg/IcBottomSheetLine";
import { Button } from "@common/component/Button";
import { TextField } from "@common/component/TextField";
import Card from "./Card";
import { useEffect, useState, useRef, useCallback } from "react";
import { useDebounce } from "@shared/hook/useDebounce";
import { useInfiniteHospitalList } from "@api/shared/hook";
import { components } from "@type/schema";

type HospitalResponse = components["schemas"]["HospitalResponse"];

// 병원 타입 정의
export interface Hospital {
  id: number;
  name: string;
  address: string;
  reviewCount: number;
  image?: string;
}

interface SearchHospitalProps {
  initialId?: number;
  active: boolean;
  onCloseBottomSheet: () => void;
  selectedHospital: Hospital | null;
  onSelectHospital: (hospital: Hospital | null) => void;
  locationId?: number; // 지역 ID (옵션)
  locationType?: "CITY" | "DISTRICT"; // 지역 타입 (옵션)
}

const SearchHospital = (props: SearchHospitalProps) => {
  const {
    initialId,
    active,
    onCloseBottomSheet,
    selectedHospital,
    onSelectHospital,
    locationId = 1,
    locationType = "CITY",
  } = props;

  // 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  // 검색어 상태
  const [searchWord, setSearchWord] = useState("");
  const debouncedSearchWord = useDebounce(searchWord, 300);

  // 마지막에서 2번째 아이템 참조
  const beforeLastHospitalRef = useRef<HTMLLIElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  // 응답 데이터를 Hospital 인터페이스에 맞게 변환하는 함수
  const mapToHospital = useCallback((hospital: HospitalResponse): Hospital => {
    return {
      id: hospital.id ?? 0,
      name: hospital.name ?? "",
      address: hospital.address ?? "",
      reviewCount: hospital.reviewCount ?? 0,
      image: hospital.image,
    };
  }, []);

  // useInfiniteQuery를 사용하여 병원 목록 가져오기
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, refetch } = useInfiniteHospitalList(
    {
      locationId,
      locationType,
      keyword: debouncedSearchWord || undefined,
      size: 10,
      sortBy: debouncedSearchWord ? undefined : "REVIEW",
    },
  );

  // 검색어 변경 시 쿼리 다시 실행
  useEffect(() => {
    refetch();
  }, [debouncedSearchWord, refetch]);

  // 병원 목록 평탄화
  const hospitals = data?.pages.flatMap((page) => page?.hospitals || []).map(mapToHospital) || [];
  useEffect(() => {
    const initialHospital = hospitals.find((hospital) => hospital.id === initialId);
    if (initialId && initialHospital) {
      onSelectHospital(initialHospital);
    }
  }, [initialId]);

  // initialId가 존재할 경우 해당 병원을 찾아 선택 상태로 만듦
  // 교차 관찰자를 사용한 무한 스크롤 구현
  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        { threshold: 0.5 },
      );
    }

    const currentRef = beforeLastHospitalRef.current;
    if (currentRef) {
      observer.current.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.current?.unobserve(currentRef);
      }
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // 바텀시트 이탈 처리
  const handleCancelSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setSearchWord("");
    onCloseBottomSheet();
  };

  const handleBottomSheetClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.dimmed({ active })} onClick={handleCancelSearch}>
      <div className={styles.wrapper({ active })} onClick={handleBottomSheetClick}>
        <div className={styles.bottomSheetHandleBar}>
          <IcBottomSheetLine />
        </div>

        {/* 상단 검색창 영역 */}
        <div className={styles.headerContainer}>
          <span className={styles.titleStyle}>병원 검색하기</span>
          <TextField
            value={searchWord}
            placeholder="병원 이름이나 주소를 검색해 보세요"
            isDelete={false}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </div>

        {/* 중앙 병원 리스트 영역 */}
        <ul className={styles.cardContainer}>
          {isError ? (
            <li>
              <div className={styles.emptyState}>데이터를 불러오는 중 오류가 발생했습니다.</div>
            </li>
          ) : hospitals.length > 0 ? (
            hospitals.map((hospital, index) => (
              <li
                key={hospital.id}
                ref={index === hospitals.length - 2 ? beforeLastHospitalRef : null}
                className={index === hospitals.length - 1 ? styles.lastCard : undefined}
                onClick={() => onSelectHospital(hospital)}
              >
                <Card
                  id={hospital.id}
                  name={hospital.name}
                  address={hospital.address}
                  selected={selectedHospital?.id === hospital.id}
                  imgSrc={selectedHospital?.image}
                  onSelect={() => onSelectHospital(hospital)}
                />
              </li>
            ))
          ) : (
            <li>
              <div className={styles.emptyState}>
                {isLoading ? "병원 정보를 불러오는 중입니다." : "검색 결과가 없습니다."}
              </div>
            </li>
          )}
          {isFetchingNextPage && (
            <li>
              <div className={styles.loadingState}>불러오는 중...</div>
            </li>
          )}
        </ul>

        {/* 하단 버튼 영역 */}
        <div className={styles.buttonContainer}>
          <Button
            label="확인하기"
            size="large"
            variant="solidPrimary"
            disabled={!selectedHospital}
            onClick={onCloseBottomSheet}
          />
          <Button label="취소하기" size="large" variant="solidNeutral" disabled={false} onClick={handleCancelSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchHospital;
