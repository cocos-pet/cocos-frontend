"use client";

import { useState } from "react";
import Chip from "@common/component/Chip/Chip";
import * as styles from "./alarmToggle.css";

type TabType = "magazine" | "myNews";

export default function AlarmToggle() {
  const [selectedTab, setSelectedTab] = useState<TabType>("magazine");

  const handleMagazineClick = () => {
    setSelectedTab("magazine");
  };

  const handleMyNewsClick = () => {
    setSelectedTab("myNews");
  };

  return (
    <div className={styles.toggleContainer}>
      <div onClick={handleMagazineClick} style={{ cursor: "pointer" }}>
        <Chip
          label="매거진"
          icon={false}
          color={selectedTab === "magazine" ? "solidBlue" : "blue"}
          onClick={handleMagazineClick}
          isSelected={selectedTab === "magazine"}
          disabled={false}
        />
      </div>
      <div onClick={handleMyNewsClick} style={{ cursor: "pointer" }}>
        <Chip
          label="내 소식"
          icon={false}
          color={selectedTab === "myNews" ? "solidBlue" : "blue"}
          onClick={handleMyNewsClick}
          isSelected={selectedTab === "myNews"}
          disabled={false}
        />
      </div>
    </div>
  );
}
