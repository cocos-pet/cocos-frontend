import * as styles from "./locationHeader.css";
import { IcChevronDown, IcTarget } from "@asset/svg";
import { useState, Dispatch, SetStateAction } from "react";
import LocationBottomSheet from "../locationBottomSheet/locationBottomSheet";
import { useGetMemberLocation } from "@api/domain/review/location/hook";
import { motion } from "framer-motion";
import { updateMemberLocation } from "@api/domain/review/location";
import { LocationType } from "@api/domain/review/location/types";
import { DEFAULT_LOCATION } from "@app/review/_constant/locationConfig";

interface Location {
  id: number;
  name: string;
  type: LocationType;
}

interface LocationHeaderProps {
  onLocationChange: (location: Location) => void;
  onBottomSheetOpenChange: Dispatch<SetStateAction<boolean>>;
}

export default function LocationHeader({
  onLocationChange,
  onBottomSheetOpenChange,
}: LocationHeaderProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    DEFAULT_LOCATION.DISTRICT
  );
  const { data: memberLocation } = useGetMemberLocation();

  const handleBottomSheetOpen = () => {
    setIsBottomSheetOpen(true);
    onBottomSheetOpenChange(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
    onBottomSheetOpenChange(false);
  };

  const handleLocationSelect = async (location: Location) => {
    setSelectedLocation(location);
    onLocationChange(location);
    handleBottomSheetClose();
    await updateMemberLocation(location.id);
  };

  // 표시할 위치 이름 결정
  const displayLocationName =
    selectedLocation?.name || memberLocation?.locationName || "위치 선택";

  return (
    <div className={styles.location}>
      <div className={styles.locationButton} onClick={handleBottomSheetOpen}>
        <div className={styles.locationContent}>
          <IcTarget width={20} />
          <span className={styles.locationText}>{displayLocationName}</span>
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
        onClose={handleBottomSheetClose}
        onLocationSelect={handleLocationSelect}
        currentLocation={selectedLocation || DEFAULT_LOCATION.DISTRICT}
      />
    </div>
  );
}
