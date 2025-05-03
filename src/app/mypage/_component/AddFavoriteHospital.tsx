import { IcPlus } from "@asset/svg";
import * as styles from "../_style/mypage.css";
import React, { useState } from "react";
import nocategory from "@asset/image/nocategory.png";
import Image from "next/image";
import SearchHospital, { Hospital } from "@shared/component/SearchHospital/SearchHospital";

const AddFavoriteHospital = () => {
  //todo : 이 내부에서 api 찔러서 데이터 받아온 뒤 렌더링하기(isAdded일 때) + 리다이렉팅 url 연결하기
  const [isHospitalSearchBottomSheetOpen, setIsHospitalSearchBottomSheetOpen] = useState(false);

  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  const handleClickContainer: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsHospitalSearchBottomSheetOpen(true);
  };

  const handleCloseHospitalSearchBottomSheet = () => {
    setIsHospitalSearchBottomSheetOpen(false);
  };

  const handleSelectHospital = (hospital: Hospital | null) => {
    setSelectedHospital(hospital);
  };

  return (
    <div className={styles.favoriteHospitalContainer} onClick={handleClickContainer}>
      {selectedHospital ? (
        <div className={styles.redirectBox}>
          <div className={styles.leftContentBox}>
            <span className={styles.leftTopText}>즐겨찾는 병원</span>
            <span className={styles.leftMiddleText}>{selectedHospital?.name}</span>
            <span className={styles.leftBottomText}>
              {selectedHospital?.address} · 리뷰 {selectedHospital?.reviewCount}
            </span>
          </div>
          <Image src={nocategory} alt="병원이미지" className={styles.rightContentBox} />
        </div>
      ) : (
        <div className={styles.addBox}>
          즐겨찾는 동물병원 추가하기
          <IcPlus width={20} height={20} />
        </div>
      )}
      {/* 병원 검색 바텀시트 */}
      <SearchHospital
        active={isHospitalSearchBottomSheetOpen}
        onCloseBottomSheet={handleCloseHospitalSearchBottomSheet}
        selectedHospital={selectedHospital}
        onSelectHospital={handleSelectHospital}
      />
    </div>
  );
};

export default AddFavoriteHospital;
