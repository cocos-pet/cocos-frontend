import * as styles from "./SearchHospital.css";
import IcBottomSheetLine from "@asset/svg/IcBottomSheetLine";
import { Button } from "@common/component/Button";
import { TextField } from "@common/component/TextField";
import Card from "./Card";
import { useState } from "react";
import { useDebounce } from "@shared/hook/useDebounce";

// ⚠️ 삭제 예정 목데이터
const hospitals = [
  { id: 1, name: "서울병원", address: "서울시강남구", reviewCount: 777 },
  { id: 2, name: "부산병원", address: "서울시강남구", reviewCount: 777 },
  { id: 3, name: "대구병원", address: "서울시강남구", reviewCount: 777 },
  { id: 4, name: "광주병원", address: "서울시강남구", reviewCount: 777 },
  { id: 5, name: "천안병원", address: "서울시강남구", reviewCount: 777 },
  { id: 6, name: "춘천병원", address: "서울시강남구", reviewCount: 777 },
];

export interface Hospital {
  id: number;
  name: string;
  address: string;
  reviewCount: number;
}

interface SearchHospitalProps {
  active: boolean;
  onCloseBottomSheet: () => void;
  selectedHospital: Hospital | null;
  onSelectHospital: (hospital: Hospital | null) => void;
}

const SearchHospital = (props: SearchHospitalProps) => {
  const { active, onCloseBottomSheet, selectedHospital, onSelectHospital } = props;

  // 텍스트 필드에 입력한 검색어
  const [searchWord, setSearchWord] = useState("");

  // 검색어로 필터링된 병원 리스트
  const debouncedSearchWord = useDebounce(searchWord, 300);
  const filteredHospitals = hospitals.filter((hospital) => {
    return hospital.name.includes(debouncedSearchWord) || hospital.address.includes(debouncedSearchWord);
  });

  // 바텀시트 이탈, 이탈 시 초기화
  const handleCancelSearch = () => {
    setSearchWord("");
    onSelectHospital(null);
    onCloseBottomSheet();
  };

  return (
    <>
      <div className={styles.dimmed({ active })} onClick={handleCancelSearch} />
      <div className={styles.wrapper({ active })}>
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
          {filteredHospitals.map((hospital) => (
            <li key={hospital.id} className={hospital.id === hospitals.length ? styles.lastCard : undefined}>
              <Card
                id={hospital.id}
                name={hospital.name}
                address={hospital.address}
                selected={selectedHospital?.id === hospital.id}
                onSelect={() => onSelectHospital(hospital)}
              />
            </li>
          ))}
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
    </>
  );
};
export default SearchHospital;
