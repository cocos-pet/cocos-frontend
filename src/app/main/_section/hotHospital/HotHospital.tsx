"use client";

import * as styles from "./HotHospital.css.ts";
import { useRouter } from "next/navigation";
import { useGetHospitalList } from "@api/shared/hook.ts";
import { useCallback, useEffect, useState } from "react";
import { If } from "@shared/component/If/if.tsx";
import NoData from "@shared/component/NoData/NoData.tsx";
import { Separated } from "react-simplikit";
import Divider from "src/design-system/Divider/Divider.tsx";
import HotHospitalItem from "@app/main/_component/HotHospitalItem/HotHospitalItem.tsx";
import { HospitalListType } from "@api/shared";

const HotHospital = () => {
  const [hotHospitals, setHotHospitals] = useState<HospitalListType>([]);
  const { mutate: getHotHospital } = useGetHospitalList();
  const router = useRouter();

  const fetchHotHospitals = useCallback(() => {
    getHotHospital(
      {
        size: 3,
        sortBy: "REVIEW",
      },
      {
        onSuccess: (res) => {
          const hospitals = res?.data?.hospitals ?? [];
          setHotHospitals(hospitals);
        },
      }
    );
  }, [getHotHospital]);

  const handleHospitalClick = (id?: number) => {
    router.push(`/hospital-detail/${id}`);
  };

  useEffect(() => {
    fetchHotHospitals();
  }, [fetchHotHospitals]);

  return (
    <div className={styles.hotHospitalContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.subTitle}>반려인들의 PICK</p>
        <div className={styles.title}>
          가장 많이 찾는 <span className={styles.blue}>병원</span>이에요
        </div>
      </div>

      <If condition={hotHospitals.length === 0}>
        <NoData style={{ marginTop: "10px" }} />
      </If>
      <If condition={!!hotHospitals.length}>
        <div className={styles.hotHospitalListContainer}>
          <Separated by={<Divider size="popular" />}>
            {hotHospitals?.map((hospital, index) => (
              <HotHospitalItem
                key={hospital.id}
                id={index + 1}
                name={hospital.name}
                address={hospital.address}
                reviewCount={hospital.reviewCount}
                imageSrc={hospital.image}
                onClick={() => {
                  handleHospitalClick(hospital.id);
                }}
              />
            ))}
          </Separated>
        </div>
      </If>
    </div>
  );
};

export default HotHospital;
