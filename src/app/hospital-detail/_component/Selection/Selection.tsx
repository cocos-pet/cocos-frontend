"use client";

import { useState } from "react";
import * as styles from "./Selection.css";
import { IcUnderline } from "@asset/svg";
import Info from "../../info/info";
import Review from "../../review/review";

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
      {selected === "info" && <Info />}
      {selected === "review" && <Review />}
    </div>
  );
}