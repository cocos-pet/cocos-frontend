"use client";

import {useState} from "react";
import {IcDeleteBlack} from "@asset/svg/index";
import * as styles from "./Step1.style.css";

import HeaderNav from "@design-system/HeaderNav/HeaderNav";
import ReviewHospital from "@app/review/write/_component/ReviewHospital";
import ReviewDate from "@app/review/write/_component/ReviewDate";
import ReviewPetInfo from "@app/review/write/_component/ReviewPetInfo";
import SearchHospital, {Hospital} from "@shared/component/SearchHospital/SearchHospital";
import {Button} from "@design-system/Button/index";
import {useFormContext} from "react-hook-form";
import {ReviewFormWithUIData} from "../page";
import {useRouter} from "next/navigation";

export type PetInfoType = "myPet" | "manual";

interface Step1Props {
  onNext: () => void;
}

const Step1 = ({ onNext }: Step1Props) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const { setValue, watch } = useFormContext<ReviewFormWithUIData>();

  const visitedAt = watch("visitedAt");
  const breedId = watch("breedId");
  const gender = watch("gender");

  const selectedHospital = watch("selectedHospital");
  const isFormValid = selectedHospital !== null && visitedAt !== "" && breedId !== -1 && gender !== null;

  const router = useRouter();

  // 1-1. hospital ! 나갈 수 있는 방법이 2가지라 분리
  const handleOpenSearchHospital = () => {
    setIsBottomSheetOpen(true);
  };
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const handleSelectHospital = (hospital: Hospital | null) => {
    setValue("selectedHospital", hospital);
    router.replace(`?hospitalId=${hospital?.id}`);
  };

  // // 1-3. petInfo
  // const selectedPetInfo = watch("selectedPetInfoType");
  // setValue("selectedPetInfoType",  selectedPetInfo === type ? null : type);

  const handleGoHospitalDetail = () => {
    window.history.go(-2); //review/agree +1
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
        <ReviewHospital handleOpenSearchHospital={handleOpenSearchHospital} />
        {/* 1-2. 날짜 선택 */}
        <ReviewDate />
        {/* 1-3. 동물 정보 */}
        <ReviewPetInfo />
      </div>

      <div className={styles.buttonContainer}>
        <Button label="다음으로" size="large" variant="solidPrimary" disabled={!isFormValid} onClick={onNext} />
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
