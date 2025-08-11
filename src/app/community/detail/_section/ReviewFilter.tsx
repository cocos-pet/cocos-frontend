import { useState } from "react";
import BottomSheet from "@common/component/BottomSheet/BottomSheet.tsx";
import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import Tab from "@common/component/Tab/Tab.tsx";
import Chip from "@common/component/Chip/Chip.tsx";
import { Button } from "@common/component/Button";
import { useGetReviewSummaryOption } from "@api/domain/community/detail/hook.ts";
import NoData from "@shared/component/NoData/NoData.tsx";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

export type ReviewActiveTabType = "good" | "bad" | undefined;

const ReviewFilter = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (summaryOptionId: number | undefined, type?: ReviewActiveTabType) => void;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const initialFilterId = searchParams?.get("filterId");
  const initialFilterType = searchParams?.get("filterType") as ReviewActiveTabType;
  
  const [activeTab, setActiveTab] = useState<ReviewActiveTabType>(initialFilterType || "good");
  const [filterId, setFilterId] = useState<number | undefined>(initialFilterId ? Number(initialFilterId) : undefined);
  const [filterType, setFilterType] = useState<ReviewActiveTabType>(initialFilterType || undefined);
  const { data } = useGetReviewSummaryOption();

  const handleTabClick = (tab: ReviewActiveTabType) => setActiveTab(tab);
  const isActiveTab = (tab: ReviewActiveTabType) => activeTab === tab;
  const handleChipClick = (id: number | undefined, type: ReviewActiveTabType) => {
    setFilterId(id);
    setFilterType(type);
  };
  const handleClose = () => {
    if (searchParams) {
      const newSearchParams = new URLSearchParams(searchParams);
      
      if (filterId && filterType) {
        newSearchParams.set('filterId', filterId.toString());
        newSearchParams.set('filterType', filterType);
      } else {
        newSearchParams.delete('filterId');
        newSearchParams.delete('filterType');
      }
      
      router.replace(`?${newSearchParams.toString()}`);
    }
    
    onClose(filterId, filterType);
  };

  if (!data) return <NoData label={"필터를 불러오는데 실패했어요."} />;

  return (
    <motion.div animate={{ y: isOpen ? 0 : 20 }} transition={{ duration: 0.2 }}>
      <BottomSheet isOpen={isOpen} handleOpen={handleClose}>
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
                  isSelected={item.id === filterId}
                  onClick={() => handleChipClick(item.id, "good")}
                />
              ))}
            {activeTab === "bad" &&
              data.badReviews?.map((item) => (
                <Chip
                  key={item.id}
                  size={"small"}
                  label={item.label}
                  color={"red"}
                  isSelected={item.id === filterId}
                  onClick={() => handleChipClick(item.id, "bad")}
                />
              ))}
          </div>
          <div className={styles.filterButtonContainer}>
            <Button
              variant={"solidPrimary"}
              size={"large"}
              label={"확인하기"}
              style={{ width: "100%" }}
              onClick={handleClose}
            />
          </div>
        </div>
      </BottomSheet>
    </motion.div>
  );
};

export default ReviewFilter;
