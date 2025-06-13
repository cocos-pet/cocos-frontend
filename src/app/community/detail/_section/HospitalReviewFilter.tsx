import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import { IcDownArrow, IcTarget } from "@asset/svg";
import { motion } from "framer-motion";
import Chip from "@common/component/Chip/Chip.tsx";
import { color } from "@style/styles.css.ts";
import LocationBottomSheet from "@shared/component/LocationBottomSheet/LocationBottomSheet.tsx";
import { useOpenToggle } from "@shared/hook/useOpenToggle.ts";

export interface LocationFilterType {
  id: number;
  name: string;
}

interface HospitalReviewFilterPropsType {
  onRegionFilterClick: (location: LocationFilterType) => void;
  isRegionFilterOpen: boolean;
  onReviewFilterClick: () => void;
  filterType: "good" | "bad" | null;
}

const HospitalReviewFilter = (props: HospitalReviewFilterPropsType) => {
  const { onRegionFilterClick, isRegionFilterOpen, onReviewFilterClick, filterType } = props;
  const {
    isOpen: isLocationBottomSheetOpen,
    handleClose: handleCloseBottomSheet,
    handleOpen: handleOpenBottomSheet,
  } = useOpenToggle();

  const handleLocationSelect = (location: LocationFilterType) => {
    handleCloseBottomSheet();
    onRegionFilterClick(location);
  };

  return (
    <div className={styles.reviewFilter}>
      <div className={styles.reviewRegion} onClick={handleOpenBottomSheet}>
        <IcTarget width={20} />
        <span className={styles.reviewRegionText}>서울시 강남구</span>
        <motion.div
          style={{ height: "20px" }}
          animate={{ rotate: isRegionFilterOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <IcDownArrow width={20} />
        </motion.div>
      </div>
      <div className={styles.filterChip} onClick={onReviewFilterClick}>
        <Chip
          label={"좋아요"}
          color={filterType === "good" ? "blue" : "gray"}
          size={"small"}
          rightIcon={
            <IcDownArrow width={20} fill={filterType === "good" ? color.primary.blue700 : color.gray.gray700} />
          }
        />
        <Chip
          label={"아쉬워요"}
          color={filterType === "bad" ? "blue" : "gray"}
          size={"small"}
          rightIcon={
            <IcDownArrow width={20} fill={filterType === "bad" ? color.primary.blue700 : color.gray.gray700} />
          }
        />
      </div>
      <LocationBottomSheet
        isOpen={isLocationBottomSheetOpen}
        onClose={handleCloseBottomSheet}
        onLocationSelect={handleLocationSelect}
      />
    </div>
  );
};

export default HospitalReviewFilter;
