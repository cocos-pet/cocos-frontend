"use client";

import { AlarmCategory } from "@api/domain/alarm";
import Chip from "@common/component/Chip/Chip";
import * as styles from "./alarmToggle.css.ts";

interface AlarmToggleProps {
  selectedCategory: AlarmCategory;
  onChangeCategory: (category: AlarmCategory) => void;
}

export default function AlarmToggle({ selectedCategory, onChangeCategory }: AlarmToggleProps) {
  const isMagazineTab = selectedCategory === "MAGAZINE";
  const isMyTab = selectedCategory === "MY";

  return (
    <div className={styles.toggleContainer}>
      <div style={{ cursor: "pointer" }}>
        <Chip
          label="매거진"
          icon={false}
          color={isMagazineTab ? "solidBlue" : "blue"}
          onClick={() => onChangeCategory("MAGAZINE")}
          isSelected={isMagazineTab}
          disabled={isMagazineTab}
        />
      </div>
      <div style={{ cursor: "pointer" }}>
        <Chip
          label="내 소식"
          icon={false}
          color={isMyTab ? "solidBlue" : "blue"}
          onClick={() => onChangeCategory("MY")}
          isSelected={isMyTab}
          disabled={isMyTab}
        />
      </div>
    </div>
  );
}
