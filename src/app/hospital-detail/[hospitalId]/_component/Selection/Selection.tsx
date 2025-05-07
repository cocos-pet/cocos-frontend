"use client";

import { useState } from "react";
import * as styles from "./Selection.css";
import { IcUnderline } from "@asset/svg";
import InfoContent from "@app/hospital-detail/[hospitalId]/_component/InfoContent/InfoContent";
import ReviewContent from "@app/hospital-detail/[hospitalId]/_component/ReviewContent/ReviewContent";
import Divider from "@common/component/Divider/Divider";

const Selections = [
  { label: "병원 정보", value: "info" },
  { label: "맞춤형 리뷰", value: "review" },
];

export default function Selection() {
  const [selected, setSelected] = useState("info");

  return (
    <div>
      <div className={styles.tabContainer}>
        {Selections.map((tab) => (
          <button
            key={tab.value}
            type="button"
            className={styles.tabButton({ isActive: selected === tab.value })}
            onClick={() => setSelected(tab.value)}
          >
            {tab.label}
            {selected === tab.value && (
              <IcUnderline className={styles.underline} />
            )}
          </button>
        
        ))}
      </div>
      <Divider size="small" />
      {selected === "info" && <InfoContent />}
      {selected === "review" && <ReviewContent />}
    </div>
  );
}