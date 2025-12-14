import * as styles from "./locationHeader.css";
import { IcChevronDown, IcTarget } from "@asset/svg";
import { useState, Dispatch, SetStateAction, useEffect, useCallback, useMemo } from "react";
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

  const handleBottomSheetToggle = useCallback(
    (isOpen: boolean) => {
      setIsBottomSheetOpen(isOpen);
      onBottomSheetOpenChange(isOpen);
    },
    [onBottomSheetOpenChange],
  );

  const handleLocationSelect = useCallback(
    (location: {
      id: number;
      name: string;
      type: LocationType;
    }) => {
      const updatedLocation = {
        ...location,
        cityName: "",
        districtName: location.name,
        townName: "",
      } as Location;

      setSelectedLocation(updatedLocation);
      onLocationChange(updatedLocation);
      handleBottomSheetToggle(false);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLocation));

      updateMemberLocation({
        locationId: location.id,
        locationType: location.type,
      });
    },
    [onLocationChange, handleBottomSheetToggle],
  );

  useEffect(() => {
    const savedLocation = localStorage.getItem(STORAGE_KEY);
    if (!savedLocation) {
      if (memberLocation?.locationId) {
        const newLocation = {
          id: memberLocation.locationId,
          name: memberLocation.locationName,
          type: "DISTRICT",
        } as Location;
        setSelectedLocation(newLocation);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newLocation));
        onLocationChange(newLocation);
      }
      return;
    }

    const parsedLocation = JSON.parse(savedLocation);
    setSelectedLocation(parsedLocation);
    onLocationChange(parsedLocation);
  }, [memberLocation]);

  const displayLocationName = useMemo(
    () => selectedLocation?.name || memberLocation?.locationName || "위치 선택",
    [selectedLocation?.name, memberLocation?.locationName],
  );

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
