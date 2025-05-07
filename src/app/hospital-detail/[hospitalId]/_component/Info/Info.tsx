"use client";

import * as styles from "./Info.css";
import { IcCopy } from "@asset/svg";

export interface InfoProps {
    name: string;
    phoneNumber: string;
}

export default function Info() {
  const name = "코코스 동물병원";
  const phoneNumber = "02-1234-5671";

  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.infoName}>{name}</h2>
      <div className={styles.infoPhoneNumber}>{phoneNumber}
        <IcCopy width={16} height={16}/>
      </div>
    </div>
  );
}

