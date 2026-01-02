import * as styles from "./locationHeader.css";
import { IcChevronDown, IcTarget } from "@asset/svg";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import LocationBottomSheet from "../locationBottomSheet/locationBottomSheet";
import { useGetMemberLocation } from "@api/domain/review/location/hook";
import { motion } from "framer-motion";
import { updateMemberLocation } from "@api/domain/review/location";
import { LocationType } from "@api/domain/review/location/types";

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
    const savedLocation = localStorage.getItem("selectedLocation");
    if (savedLocation) {
      try {
        const parsedLocation = JSON.parse(savedLocation) as Location;
        setSelectedLocation(parsedLocation);
        // 부모 컴포넌트에도 알림
        onLocationChange(parsedLocation);
      } catch (error) {
        console.error("Failed to parse saved location:", error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

    const locationData = {
      id: location.id,
      name: location.name,
      type: location.type,
      cityName: location.cityName || "",
      districtName: location.districtName || "",
      townName: location.townName || "",
    };
    localStorage.setItem("selectedLocation", JSON.stringify(locationData));

    await updateMemberLocation(location.id);
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
      />
    </div>
  );
}
