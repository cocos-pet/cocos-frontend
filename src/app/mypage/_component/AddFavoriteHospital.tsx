
import * as styles from "../_style/mypage.css";
<<<<<<< HEAD
<<<<<<< HEAD
import { } from "react";
=======
import rom "react";
>>>>>>> 37b44d2 ([Feat/#294] 병원 검색 바텀 시트 API 연결 및 무한 스크롤 구현 (#295))
=======
import React, { useRef, useState } from "react";
>>>>>>> 7073707 ( HospitalReview 요청에 맞게 수정 (API 일부 붙임 + 무한 스크롤) (#299))
import nicknameCoco from "@asset/image/nicknameCoco.png";
import Image from "next/image";
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
    if (!selectedHospital?.id) return;

    if (prevSelectedHospital.current?.id !== selectedHospital?.id) {
      prevSelectedHospital.current = selectedHospital;
      mutate(selectedHospital.id);
    }

    setIsHospitalSearchBottomSheetOpen(false);
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
<<<<<<< HEAD
<<<<<<< HEAD
              {data.address}
              {/* {`· 리뷰 ${selectedHospital?.reviewCount}`} */}
            </span>
          </div>
          {/* <Image src={data.image ?? nicknameCoco} alt="병원이미지" className={styles.rightContentBox} /> */}
=======
              {selectedHospital?.address}
              {/* {`· 리뷰 ${selectedHospital?.reviewCount}`} */}
            </span>
          </div>
          <Image src={selectedHospital.image ?? nicknameCoco} alt="병원이미지" className={styles.rightContentBox} />
>>>>>>> 37b44d2 ([Feat/#294] 병원 검색 바텀 시트 API 연결 및 무한 스크롤 구현 (#295))
=======
              {data.address}
              {/* {`· 리뷰 ${selectedHospital?.reviewCount}`} */}
            </span>
          </div>
          {/* <Image src={data.image ?? nicknameCoco} alt="병원이미지" className={styles.rightContentBox} /> */}
        </div>
      ) : (
        <div className=styles.addBox>
          즐겨찾는 동물병원 추가하기
          <IcPlus width=20height={20} />
        </div>
      )}
      {/* 병원 검색 바텀시트 */}
      <SearchHospital
        active={isHospitalSearchBottomSheetOpen}
        onCloseBottomSheet={handleCloseHospitalSearchBottomSheet}
        selectedHospital={selectedHospital}
        onSelectHospital={handleSelectHospital}
        initialId={data?.id}
      />
    </div>
  );
};

export default AddFavoriteHospital;
