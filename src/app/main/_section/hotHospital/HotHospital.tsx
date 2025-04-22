"use client";

import * as styles from "./HotHospital.css.ts";
import HotHospitalItem from "../../_component/HotHospitalItem/HotHospitalItem.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
import { Separated } from "react-simplikit";

const HotHospital = () => {
  const hotHospitals = [
    {
      id: 1,
      name: "병원이름이길면어떡할건데너가어떡할거냐고",
      address: "병원 주소",
      reviewCount: 44,
    },
    {
      id: 2,
      name: "멍멍 동물병원",
      address: "서울시 강남구",
      reviewCount: 38,
    },
    {
      id: 3,
      name: "냥냥 동물병원",
      address: "서울시 서초구",
      reviewCount: 27,
    },
  ];

  return (
    <div className={styles.hotHospitalContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.subTitle}>반려인들의 PICK</p>
        <div className={styles.title}>
          가장 많이 찾는 <span className={styles.blue}>병원</span>이에요
        </div>
      </div>

      <div className={styles.hotHospitalListContainer}>
        <Separated by={<Divider size="popular" />}>
          {hotHospitals.map((hospital) => (
            <HotHospitalItem
              key={hospital.id}
              id={hospital.id}
              name={hospital.name}
              address={hospital.address}
              reviewCount={hospital.reviewCount}
            />
          ))}
        </Separated>
      </div>
    </div>
  );
};

export default HotHospital;
