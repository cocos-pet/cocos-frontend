"use client";

import { useState } from "react";
import MapComponent from "../MapComponent/MapComponent";
import * as styles from "./InfoContent.css";
import { IcCopy } from "@asset/svg";
import { useGetHospitalDetail } from "@api/domain/review/hospital-detail/hook";
import Loading from "@common/component/Loading/Loading";
import WarningToastWrap from "@common/component/WarnningToastWrap/WarningToastWrap";

export interface InfoContentProps {
  hospitalId: number;
}

export default function InfoContent({ hospitalId }: InfoContentProps) {
  const [showToast, setShowToast] = useState(false);

  const {
    data: hospitalData,
    isLoading,
    error,
  } = useGetHospitalDetail(hospitalId);

  const handleCopy = () => {
    if (!hospitalData?.address) return;
    navigator.clipboard.writeText(hospitalData.address);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  if (isLoading) return <Loading height={80} />;
  if (error)
    return (
      <WarningToastWrap errorMessage="에러가 발생했습니다. 잠시 후 다시 시도해 주세요." />
    );
  if (!hospitalData) return null;

  return (
    <div className={styles.container}>
      {hospitalData.keywords && (
        <div className={styles.tags}>
          {hospitalData.keywords
            .replace(/,/g, "")
            .split("#")
            .filter(Boolean)
            .map((tag: string) => (
              <span key={tag} className={styles.keywords}>
                #{tag.trim()}
              </span>
            ))}
        </div>
      )}

      <div className={styles.introduction}>
        <div className={styles.introductionText}>
          {hospitalData.introduction || "병원 소개가 없습니다."}
        </div>
      </div>

      <div className={styles.addressRow}>
        <span className={styles.address}>주소</span>
        <IcCopy className={styles.copyIcon} onClick={handleCopy} />
      </div>
      {showToast && <div className={styles.toast}>주소가 복사되었습니다.</div>}

      <div className={styles.mapWrapper}>
        <MapComponent
          address={hospitalData.address || ""}
          latitude={hospitalData.latitude}
          longitude={hospitalData.longitude}
        />
      </div>
    </div>
  );
}
