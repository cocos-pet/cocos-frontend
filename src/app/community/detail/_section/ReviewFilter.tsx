import { useState } from "react";
import BottomSheet from "@common/component/BottomSheet/BottomSheet.tsx";
import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import Tab from "@common/component/Tab/Tab.tsx";
import Chip from "@common/component/Chip/Chip.tsx";
import { Button } from "@common/component/Button";
import { useGetReviewSummaryOption } from "@api/domain/community/detail/hook.ts";
import NoData from "@shared/component/NoData/NoData.tsx";

type ReviewActiveTabType = "good" | "bad";

const ReviewFilter = ({
  isOpen,
  onClose,
  selectedFilterId,
  onFilterClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedFilterId?: number;
  onFilterClick?: (id: number | undefined, type: "good" | "bad") => void;
}) => {
  const [activeTab, setActiveTab] = useState<ReviewActiveTabType>("good");

  const handleTabClick = (tab: ReviewActiveTabType) => setActiveTab(tab);
  const isActiveTab = (tab: ReviewActiveTabType) => activeTab === tab;

  const { data } = useGetReviewSummaryOption();

  if (!data) return <NoData label={"필터를 불러오는데 실패했어요."} />;

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
            data.goodReviews?.map((item) => (
              <Chip
                key={item.id}
                size={"small"}
                label={item.label}
                color={"blue"}
                isSelected={item.id === selectedFilterId}
                onClick={() => onFilterClick?.(item.id, "good")}
              />
            ))}
          {activeTab === "bad" &&
            data.badReviews?.map((item) => (
              <Chip
                key={item.id}
                size={"small"}
                label={item.label}
                color={"red"}
                isSelected={item.id === selectedFilterId}
                onClick={() => onFilterClick?.(item.id, "bad")}
              />
            ))}
        </div>
        <div className={styles.filterButtonContainer}>
          <Button
            variant={"solidPrimary"}
            size={"large"}
            label={"확인하기"}
            style={{ width: "100%" }}
            onClick={onClose}
          />
        </div>
      </div>
    </BottomSheet>
  );
};

export default ReviewFilter;
