"use client";

import { useState } from "react";
import KakaoMap from "../KakaoMap/KakaoMap";
import * as styles from "./InfoContent.css";
import { IcCopy } from "@asset/svg";

interface InfoContentProps {
  name?: string;
  phoneNumber?: string;
  tags?: string[];
  introduction?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}

export default function InfoContent({
  name,
  phoneNumber,
  tags = [],
  introduction,
  address,
  latitudes,
  longitude,
}: InfoContentProps) {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    if (!address) return;
    navigator.clipboard.writeText(address);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {tags && tags.length > 0 ? (
          tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))
        ) : (
          <span className={styles.noTag}>태그 없음</span>
        )}
      </div>

      <div className={styles.introduction}>
        <div className={styles.introductionText}>{introduction || "병원 소개가 없습니다."}</div>
      </div>

      <div className={styles.addressRow}>
        <span className={styles.address}>주소</span>
        <IcCopy className={styles.copyIcon} onClick={handleCopy} />
      </div>
      {showToast && <div className={styles.toast}>주소가 복사되었습니다.</div>}

      <div className={styles.mapWrapper}>
        <KakaoMap address={address} latitude={latitudes} longitudes={longitude} />
      </div>
    </div>
  );
}
