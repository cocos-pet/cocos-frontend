import * as styles from "./locationHeader.css";
import { IcChevronDown, IcTarget } from "@asset/svg";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
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
}

interface LocationHeaderProps {
  onLocationChange: (location: Location) => void;
  onBottomSheetOpenChange: Dispatch<SetStateAction<boolean>>;
}

export default function LocationHeader({ onLocationChange, onBottomSheetOpenChange }: LocationHeaderProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const { data: memberLocation } = useGetMemberLocation();

  useEffect(() => {
    // 로컬 스토리지에서 저장된 위치 정보 가져오기
    const savedLocation = localStorage.getItem(STORAGE_KEY);
    const parsedLocation = savedLocation ? JSON.parse(savedLocation) : null;

    if (parsedLocation) {
      setSelectedLocation(parsedLocation);
      onLocationChange(parsedLocation);
    } else if (memberLocation?.locationId) {
      const newLocation = {
        id: memberLocation.locationId,
        name: memberLocation.locationName,
        type: "DISTRICT",
      };
      setSelectedLocation(newLocation as Location);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newLocation));
    }
  }, [memberLocation]);

  const handleBottomSheetOpen = () => {
    setIsBottomSheetOpen(true);
    onBottomSheetOpenChange(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
    onBottomSheetOpenChange(false);
  };

  const handleLocationSelect = (location: {
    id: number;
    name: string;
    type: LocationType;
  }) => {
    const updatedLocation = {
      ...location,
      cityName: "",
      districtName: location.name,
      townName: "",
    };
    setSelectedLocation(updatedLocation);
    onLocationChange(updatedLocation);
    handleBottomSheetClose();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLocation));

    updateMemberLocation({
      locationId: location.id,
      locationType: location.type,
    });
  };
  const displayLocationName = selectedLocation?.name || memberLocation?.locationName || "위치 선택";

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
