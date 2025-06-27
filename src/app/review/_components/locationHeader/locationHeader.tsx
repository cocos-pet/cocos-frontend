import * as styles from "./locationHeader.css";
import { IcChevronDown, IcTarget } from "@asset/svg";
import { useState } from "react";
import LocationBottomSheet from "../locationBottomSheet/locationBottomSheet";
import { useGetMemberLocation } from "@api/domain/review/location/hook";
import { motion } from "framer-motion";
import { updateMemberLocation } from "@api/domain/review/location";
import { LocationType } from "@api/domain/review/location/types";

interface Location {
  id: number;
  name: string;
  type: LocationType;
}

interface LocationHeaderProps {
  onLocationChange: (location: Location) => void;
}

export default function LocationHeader({
  onLocationChange,
}: LocationHeaderProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const { data: memberLocation } = useGetMemberLocation();

  const handleLocationSelect = async (location: Location) => {
    onLocationChange(location);
    setIsBottomSheetOpen(false);
    await updateMemberLocation(location.id);
  };

  return (
    <div className={styles.location}>
      <div
        className={styles.locationButton}
        onClick={() => setIsBottomSheetOpen(true)}
      >
        <div className={styles.locationContent}>
          <IcTarget width={20} />
          <span className={styles.locationText}>
            {memberLocation?.locationName || "위치 선택"}
          </span>
        </div>
        <motion.div
          style={{ height: "20px" }}
          animate={{ rotate: isBottomSheetOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <IcChevronDown width={20} />
        </motion.div>
      </div>
      <LocationBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        onLocationSelect={handleLocationSelect}
      />
    </div>
  );
}
