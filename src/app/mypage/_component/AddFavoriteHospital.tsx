import { IcPlus } from "@asset/svg";
import * as styles from "../_style/mypage.css";
import React, { useRef, useState } from "react";
import SearchHospital, { Hospital } from "@shared/component/SearchHospital/SearchHospital";
import { useGetFavoriteHospital, usePatchFavoriteHospital } from "@api/shared/hook";

interface AddFavoriteHospitalPropTypes {
  nickname: string;
}

const AddFavoriteHospital = ({ nickname }: AddFavoriteHospitalPropTypes) => {
  const [isHospitalSearchBottomSheetOpen, setIsHospitalSearchBottomSheetOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const prevSelectedHospital = useRef<Hospital | null>(null);

  const { mutate } = usePatchFavoriteHospital();
  const { data } = useGetFavoriteHospital(nickname);

  const handleClickContainer: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsHospitalSearchBottomSheetOpen(true);
  };

  const handleCloseHospitalSearchBottomSheet = () => {
    setIsHospitalSearchBottomSheetOpen(false);
  };

  const handleClickConfirm = () => {
    if (!selectedHospital?.id) return;
    if (prevSelectedHospital.current?.id !== selectedHospital?.id) {
      prevSelectedHospital.current = selectedHospital;
      mutate(selectedHospital.id);
    }
    handleCloseHospitalSearchBottomSheet();
  };

  const handleSelectHospital = (hospital: Hospital | null) => {
    setSelectedHospital(hospital);
  };

  return (
    <div className={styles.favoriteHospitalContainer} onClick={handleClickContainer}>
      {data ? (
        <div className={styles.redirectBox}>
          <div className={styles.leftContentBox}>
            <span className={styles.leftTopText}>즐겨찾는 병원</span>
            <span className={styles.leftMiddleText}>{data.name}</span>
            <span className={styles.leftBottomText}>
              {data.address}
              {/* {`· 리뷰 ${selectedHospital?.reviewCount}`} */}
            </span>
          </div>
          {/* <Image src={data.image ?? nicknameCoco} alt="병원이미지" className={styles.rightContentBox} /> */}
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
        onConfirm={handleClickConfirm}
        onCloseBottomSheet={handleCloseHospitalSearchBottomSheet}
        selectedHospital={selectedHospital}
        onSelectHospital={handleSelectHospital}
        initialId={data?.id}
      />
    </div>
  );
};

export default AddFavoriteHospital;
