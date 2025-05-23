"use client";

import { useState } from "react";
import { IcDeleteBlack } from "@asset/svg/index";
import * as styles from "./Step1.style.css";

import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import ReviewHospital from "@app/review/write/_component/ReviewHospital";
import ReviewDate from "@app/review/write/_component/ReviewDate";
import ReviewPetInfo from "@app/review/write/_component/ReviewPetInfo";
import SearchHospital, { Hospital } from "@shared/component/SearchHospital/SearchHospital";
import { Button } from "@common/component/Button/index";

export type PetInfoType = "myPet" | "manual";

interface Step1Props {
  onNext: () => void;
}

const Step1 = ({ onNext }: Step1Props) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  const [selectedPetInfo, setSelectedPetInfo] = useState<PetInfoType | null>(null);

  // 1-1. hospital ⚠️ 나갈 수 있는 방법이 2가지라 분리
  const handleOpenSearchHospital = () => {
    setIsBottomSheetOpen(true);
  };
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const handleSelectHospital = (hospital: Hospital | null) => {
    setSelectedHospital(hospital);
  };

  // 1-3. petInfo
  const handleSelectPetInfo = (type: PetInfoType) => {
    setSelectedPetInfo((prev) => (prev === type ? null : type));
  };

  const handleGoHospitalDetail = () => {
    console.log("⚠️ 조립시 구현예정");
  };

  return (
    <div className={styles.preventScroll}>
      {/* 상단 헤더 */}
      <HeaderNav
        centerContent="리뷰작성(1/4)"
        leftIcon={<IcDeleteBlack style={{ width: 24, height: 24 }} onClick={handleGoHospitalDetail} />}
      />

      {/* 중앙 컨텐츠 */}
      <div className={styles.wrapper}>
        {/* 1-1. 병원 검색 */}
        <ReviewHospital selectedHospital={selectedHospital} handleOpenSearchHospital={handleOpenSearchHospital} />
        {/* 1-2. 날짜 선택 */}
        <ReviewDate />
        {/* 1-3. 동물 정보 */}
        <ReviewPetInfo selectedPetInfo={selectedPetInfo} onSelectPetInfo={handleSelectPetInfo} />
      </div>

      {/* 하단 버튼 ⚠️ TODO: 활성화 수정 */}
      <div className={styles.buttonContainer}>
        <Button label="다음으로" size="large" variant="solidPrimary" disabled={false} onClick={onNext} />
      </div>

      {/* 병원 검색 바텀시트 */}
      <SearchHospital
        active={isBottomSheetOpen}
        onCloseBottomSheet={handleCloseBottomSheet}
        selectedHospital={selectedHospital}
        onSelectHospital={handleSelectHospital}
      />
    </div>
  );
};

export default Step1;
