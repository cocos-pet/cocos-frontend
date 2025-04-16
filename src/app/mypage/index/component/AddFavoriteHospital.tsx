import { IcPlus } from "@asset/svg";
import * as styles from "../style/mypage.css";
import React from "react";
import nocategory from "@asset/image/nocategory.png";
import Image from "next/image";

interface AddFavoriteHospitalPropTypes {
  isAdded: boolean;
}

const AddFavoriteHospital = ({ isAdded }: AddFavoriteHospitalPropTypes) => {
  //todo : 이 내부에서 api 찔러서 데이터 받아온 뒤 렌더링하기(isAdded일 때) + 리다이렉팅 url 연결하기

  const handleClickContainer: React.MouseEventHandler<HTMLDivElement> = () => {
    alert("hi");
  };

  return (
    <div className={styles.favoriteHospitalContainer} onClick={handleClickContainer}>
      {isAdded ? (
        <div className={styles.redirectBox}>
          <div className={styles.leftContentBox}>
            <span className={styles.leftTopText}>즐겨찾는 병원</span>
            <span className={styles.leftMiddleText}>코코스동물병원</span>
            <span className={styles.leftBottomText}>서울시 강남구 테헤란로 · 리뷰 777</span>
          </div>
          <Image src={nocategory} alt="병원이미지" className={styles.rightContentBox} />
        </div>
      ) : (
        <div className={styles.addBox}>
          즐겨찾는 동물병원 추가하기
          <IcPlus width={20} height={20} />
        </div>
      )}
    </div>
  );
};

export default AddFavoriteHospital;
