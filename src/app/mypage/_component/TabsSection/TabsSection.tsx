import React from "react";
import Tab from "@common/component/Tab/Tab";
import * as styles from "../../_style/mypage.css";
import { ActiveTabType } from "../../_hooks/useMypageState";

interface TabsSectionProps {
  activeTab: ActiveTabType;
  isActiveTab: (tab: ActiveTabType) => boolean;
  onTabClick: (tab: ActiveTabType) => void;
}

const TabsSection = ({ activeTab, isActiveTab, onTabClick }: TabsSectionProps) => {
  return (
    <div className={styles.contentHeaderWrapper}>
      <Tab active={isActiveTab("review")} width={"100%"} onClick={() => onTabClick("review")}>
        나의 병원 후기
      </Tab>
      <Tab active={isActiveTab("post")} width={"100%"} onClick={() => onTabClick("post")}>
        나의 게시글
      </Tab>
      <Tab active={isActiveTab("comment")} width={"100%"} onClick={() => onTabClick("comment")}>
        나의 댓글
      </Tab>
    </div>
  );
};

export default TabsSection;
