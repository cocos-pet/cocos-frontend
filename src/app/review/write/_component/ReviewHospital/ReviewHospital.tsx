"use client";

import * as styles from "./ReviewHospital.style.css";
import { IcSearch } from "@asset/svg/index";
import nicknameCoco from "@asset/image/nicknameCoco.png";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { ReviewFormWithUIData } from "../../page";
interface ReviewHospitalProps {
  handleOpenSearchHospital: () => void;
}

const ReviewHospital = ({ handleOpenSearchHospital }: ReviewHospitalProps) => {
  const { watch } = useFormContext<ReviewFormWithUIData>();
  const selectedHospital = watch("selectedHospital");

  return (
    <>
      {/* 1-1. 병원 검색 */}
      <div className={styles.wrapper}>
        <div>
          <span className={styles.question}>방문한 병원이 어딘가요?</span>
          <span className={styles.star}>*</span>
        </div>
        {selectedHospital ? (
          <div className={styles.cardLayout} onClick={handleOpenSearchHospital}>
            <div className={styles.cardBox}>
              <span className={styles.hospitalName}>{selectedHospital.name}</span>
              <span className={styles.hospitalInfo}>
                {selectedHospital.address} · 리뷰 {selectedHospital.reviewCount}
              </span>
            </div>
            {/* ⚠️ api 연동시 이미지도 받아와야 함 */}
            <Image src={nicknameCoco} alt="hospital-exterior" className={styles.img} priority />
          </div>
        ) : (
          <button onClick={handleOpenSearchHospital} className={styles.myPetInfoBtn({ selected: false })}>
            <span className={styles.buttonText}>
              병원 검색하기
              <IcSearch style={{ width: 20, height: 20 }} />
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default ReviewHospital;
