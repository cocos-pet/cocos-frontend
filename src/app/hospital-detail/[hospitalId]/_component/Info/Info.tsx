"use client";

import { useState } from "react";
import * as styles from "./Info.css";
import { IcCopy } from "@asset/svg";

export interface InfoProps {
    name: string;
    phoneNumber: string;
}

export default function Info() {
  const name = "코코스 동물병원";
  const phoneNumber = "02-1234-5671";
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000); 
  };

  return (
    <>
      <div className={styles.infoContainer}>
        <h2 className={styles.infoName}>{name}</h2>
        <div className={styles.infoPhoneNumber}>
          {phoneNumber}
          <IcCopy className={styles.copyIcon} onClick={handleCopy} />
        </div>
      </div>
      {showToast && (
        <div className={styles.toast}>
          번호가 복사되었습니다.
        </div>
      )}
    </>
  );
}

