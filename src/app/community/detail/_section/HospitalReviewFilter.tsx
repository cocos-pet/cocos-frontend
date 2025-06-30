import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import { IcDownArrow, IcRefresh, IcTarget } from "@asset/svg";
import { motion } from "framer-motion";
import Chip from "@common/component/Chip/Chip.tsx";
import { color } from "@style/styles.css.ts";
import LocationBottomSheet from "@shared/component/LocationBottomSheet/LocationBottomSheet.tsx";
import { useOpenToggle } from "@shared/hook/useOpenToggle.ts";
import { ReviewActiveTabType } from "@app/community/detail/_section/ReviewFilter.tsx";
import { ReviewFilter } from "@app/community/detail/_section/index.tsx";
import { useAuth } from "@providers/AuthProvider.tsx";
import { LocationType } from "@api/domain/review/location/types.ts";

export interface LocationFilterType {
  id: number;
  name: string;
  type: LocationType;
}

interface HospitalReviewFilterPropsType {
  onRegionFilterClick: (location: LocationFilterType) => void;
  onReviewFilterClick: () => void;
  filterType: ReviewActiveTabType;
  selectedLocation: LocationFilterType | null;
  onRefresh: () => void;
}

const HospitalReviewFilter = (props: HospitalReviewFilterPropsType) => {
  const { onRegionFilterClick, onReviewFilterClick, onRefresh, filterType, selectedLocation } = props;
  const {
    isOpen: isLocationBottomSheetOpen,
    handleClose: handleCloseBottomSheet,
    handleOpen: handleOpenBottomSheet,
  } = useOpenToggle();
  const {
    isOpen: isReviewFilterOpen,
    handleClose: handleReviewFilterClose,
    handleOpen: handleReviewFilterOpen,
  } = useOpenToggle();

  const handleLocationSelect = (location: LocationFilterType) => {
    console.log("handleLocationSelect", location);
    handleCloseBottomSheet();
    onRegionFilterClick(location);
  };
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.reviewFilter} style={!isAuthenticated ? { pointerEvents: "none", opacity: 0.5 } : undefined}>
      <div className={styles.reviewRegion} onClick={handleOpenBottomSheet}>
        <IcTarget width={20} />
        <span className={styles.reviewRegionText}>{selectedLocation !== null ? selectedLocation.name : "강남구"}</span>
        <motion.div
          style={{ height: "20px" }}
          animate={{ rotate: isLocationBottomSheetOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <IcDownArrow width={20} />
        </motion.div>
      </div>
      <div className={styles.filterChip}>
        {(filterType === "good" || filterType === "bad") && <IcRefresh width={20} onClick={onRefresh} />}
        <div onClick={onReviewFilterClick}>
          <Chip
            label={"좋아요"}
            color={filterType === "good" ? "blue" : "gray"}
            size={"small"}
            rightIcon={
              <IcDownArrow width={20} fill={filterType === "good" ? color.primary.blue700 : color.gray.gray700} />
            }
          />
        </div>
        <div onClick={onReviewFilterClick}>
          <Chip
            label={"아쉬워요"}
            color={filterType === "bad" ? "blue" : "gray"}
            size={"small"}
            rightIcon={
              <IcDownArrow width={20} fill={filterType === "bad" ? color.primary.blue700 : color.gray.gray700} />
            }
          />
        </div>
      </div>
      <ReviewFilter isOpen={isReviewFilterOpen} onClose={handleReviewFilterClose} />
      <LocationBottomSheet
        isOpen={isLocationBottomSheetOpen}
        onClose={handleCloseBottomSheet}
        onLocationSelect={handleLocationSelect}
      />
    </div>
  );
};

export default HospitalReviewFilter;
