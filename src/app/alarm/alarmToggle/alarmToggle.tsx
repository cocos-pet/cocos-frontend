"use client";

import { useState } from "react";
import Chip from "@common/component/Chip/Chip";
import * as styles from "./alarmToggle.css.ts";

type TabType = "all" | "comment";

export default function AlarmToggle() {
  const [selectedTab, setSelectedTab] = useState<TabType>("all");

  const handleMagazineClick = () => {
    setSelectedTab("all");
  };

  const handleMyNewsClick = () => {
    setSelectedTab("comment");
  };

  return (
    <div className={styles.toggleContainer}>
      <div onClick={handleMagazineClick} style={{ cursor: "pointer" }}>
        <Chip
          label="전체"
          icon={false}
          color={selectedTab === "all" ? "solidBlue" : "blue"}
          onClick={handleMagazineClick}
          isSelected={selectedTab === "all"}
          disabled={false}
        />
      </div>
      <div onClick={handleMyNewsClick} style={{ cursor: "pointer" }}>
        <Chip
          label="댓글 · 답글만 보기"
          icon={false}
          color={selectedTab === "comment" ? "solidBlue" : "blue"}
          onClick={handleMyNewsClick}
          isSelected={selectedTab === "comment"}
          disabled={false}
        />
      </div>
    </div>
  );
}
