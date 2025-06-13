import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import { IcDownArrow, IcTarget } from "@asset/svg";
import { motion } from "framer-motion";
import Chip from "@common/component/Chip/Chip.tsx";
import { color } from "@style/styles.css.ts";

interface propsType {
  onRegionFilterClick: () => void;
  isRegionFilterOpen: boolean;
  onReviewFilterClick: () => void;
  filterType: "good" | "bad" | null;
}
const HospitalReviewFilter = (props: propsType) => {
  const { onRegionFilterClick, isRegionFilterOpen, onReviewFilterClick, filterType } = props;

  return (
    <div className={styles.reviewFilter}>
      <div className={styles.reviewRegion} onClick={onRegionFilterClick}>
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
    </div>
  );
};

export default HospitalReviewFilter;
