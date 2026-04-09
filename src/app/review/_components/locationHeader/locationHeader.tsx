import * as styles from "./locationHeader.css";
import { IcChevronDown, IcTarget } from "@asset/svg";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import LocationBottomSheet from "../locationBottomSheet/locationBottomSheet";
import { useGetMemberLocation } from "@api/domain/review/location/hook";
import { motion } from "framer-motion";
import { updateMemberLocation } from "@api/domain/review/location";
import { LocationType } from "@api/domain/review/location/types";
import { DEFAULT_LOCATION } from "@app/review/_constant/locationConfig";

const STORAGE_KEY = "selectedLocation";
interface Location {
  id: number;
  name: string;
  type: LocationType;
  cityName?: string;
  districtName?: string;
  townName?: string;
}
interface LocationHeaderProps {
  onLocationChange: (location: Location) => void;
  onBottomSheetOpenChange: Dispatch<SetStateAction<boolean>>;
}

export default function LocationHeader({ onLocationChange, onBottomSheetOpenChange }: LocationHeaderProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const { data: memberLocation } = useGetMemberLocation();

  // 컴포넌트 마운트 시 로컬스토리지에서 선택한 위치 불러오기
  useEffect(() => {
    const savedLocation = localStorage.getItem(STORAGE_KEY);
    if (savedLocation) {
      try {
        const parsedLocation = JSON.parse(savedLocation) as Location;
        setSelectedLocation(parsedLocation);
        onLocationChange(parsedLocation);
      } catch (error) {
        console.error("Failed to parse saved location:", error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBottomSheetToggle = (isOpen: boolean) => {
    setIsBottomSheetOpen(isOpen);
    onBottomSheetOpenChange(isOpen);
  };

  const handleLocationSelect = async (location: Location) => {
    setSelectedLocation(location);
    onLocationChange(location);
    handleBottomSheetToggle(false);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(location));

    await updateMemberLocation({
      locationId: location.id,
      locationType: location.type,
    });
  };

  const displayLocationName = selectedLocation?.name || memberLocation?.locationName || "위치 선택";

  return (
    <div className={styles.location}>
      <div className={styles.locationButton} onClick={() => handleBottomSheetToggle(true)}>
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
        onClose={() => handleBottomSheetToggle(false)}
        onLocationSelect={handleLocationSelect}
        currentLocation={selectedLocation || DEFAULT_LOCATION.DISTRICT}
      />
    </div>
  );
}
