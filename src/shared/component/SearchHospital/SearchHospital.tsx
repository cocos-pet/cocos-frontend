import * as styles from "./SearchHospital.css";
import IcBottomSheetLine from "@asset/svg/IcBottomSheetLine";
import { Button } from "@common/component/Button";
import { TextField } from "@common/component/TextField";
import Card from "./Card";
import { useState } from "react";

// ⚠️ 삭제 예정 목데이터
const hospitals = [
  { id: 1, name: "서울병원", address: "서울시강남구" },
  { id: 2, name: "부산병원", address: "서울시강남구" },
  { id: 3, name: "대구병원", address: "서울시강남구" },
  { id: 4, name: "광주병원", address: "서울시강남구" },
  { id: 5, name: "천안병원", address: "서울시강남구" },
  { id: 6, name: "춘천병원", address: "서울시강남구" },
];

const SearchHospital = () => {
  const [selectedHospitalId, setSelectedHospitalId] = useState<number>(0);

  return (
    <>
      <div className={styles.dimmed} />
      <div className={styles.wrapper}>
        <div className={styles.bottomSheetHandleBar}>
          <IcBottomSheetLine />
        </div>
        {/* 상단 검색창 영역 */}
        <div className={styles.headerContainer}>
          <span className={styles.titleStyle}>병원 검색하기</span>
          <TextField value="hospitalName" placeholder="병원 이름이나 주소를 검색해 보세요" isDelete={false} />
        </div>

        {/* 중앙 병원 리스트 영역 */}
        <ul className={styles.cardContainer}>
          {hospitals.map((hospital) => (
            <li key={hospital.id} className={hospital.id === hospitals.length ? styles.lastCard : undefined}>
              <Card
                id={hospital.id}
                name={hospital.name}
                address={hospital.address}
                selected={hospital.id === selectedHospitalId}
                onSelect={setSelectedHospitalId}
              />
            </li>
          ))}
        </ul>

        {/* 하단 버튼 영역 */}
        <div className={styles.buttonContainer}>
          <Button label="확인하기" size="large" variant="solidPrimary" disabled={false} />
          <Button label="취소하기" size="large" variant="solidNeutral" disabled={false} />
        </div>
      </div>
    </>
  );
};

export default SearchHospital;
