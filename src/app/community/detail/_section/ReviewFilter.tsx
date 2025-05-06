import { useState } from "react";
import BottomSheet from "@common/component/BottomSheet/BottomSheet.tsx";
import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import Tab from "@common/component/Tab/Tab.tsx";
import { REVIEW_FILTER_CONFIG } from "@app/community/_constant/reviewFilterConfig.ts";
import Chip from "@common/component/Chip/Chip.tsx";
import { Button } from "@common/component/Button";

type ReviewActiveTabType = "good" | "bad";

const ReviewFilter = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState<ReviewActiveTabType>("good");

  const handleTabClick = (tab: ReviewActiveTabType) => setActiveTab(tab);
  const isActiveTab = (tab: ReviewActiveTabType) => activeTab === tab;

  return (
    <BottomSheet isOpen={isOpen} handleOpen={onClose}>
      <div className={styles.filterContent}>
        <div className={styles.filterTitle}>리뷰 필터</div>
        <div className={styles.tabContainer}>
          <Tab active={isActiveTab("good")} width={"100%"} onClick={() => handleTabClick("good")}>
            좋았던 점
          </Tab>
          <Tab active={isActiveTab("bad")} width={"100%"} onClick={() => handleTabClick("bad")}>
            아쉬웠던 점
          </Tab>
        </div>
        <div className={styles.filterContentText}>
          {activeTab === "good" &&
            REVIEW_FILTER_CONFIG.goodReviews.map((item) => (
              <Chip key={item.id} size={"small"} label={item.name} color={"blue"} />
            ))}
          {activeTab === "bad" &&
            REVIEW_FILTER_CONFIG.badReviews.map((item) => (
              <Chip key={item.id} size={"small"} label={item.name} color={"red"} />
            ))}
        </div>
        <div className={styles.filterButtonContainer}>
          <Button
            variant={"solidPrimary"}
            size={"large"}
            label={"확인하기"}
            style={{ width: "100%" }}
            onClick={() => {
              onClose();
              //@TODO 필터링 세팅되도록 구현
            }}
          />
        </div>
      </div>
    </BottomSheet>
  );
};

export default ReviewFilter;
