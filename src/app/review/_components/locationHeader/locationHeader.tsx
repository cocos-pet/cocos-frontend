import * as styles from "./locationHeader.css";
import { IcChevronDown, Icon } from "@asset/svg";
import { useState } from "react";
import LocationBottomSheet from "../locationBottomSheet/locationBottomSheet";
import { useGetLocation } from "@api/domain/review/location/hook";

interface Location {
  id: number;
  name: string;
  districts?: {
    id: number;
    name: string;
  }[];
}

export default function LocationHeader() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const { data: cities } = useGetLocation();

  const handleLocationClick = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setIsBottomSheetOpen(false);
  };

  if (!cities) return null;

  const defaultCity = cities[0];

  return (
    <>
      <div className={styles.locationHeader}>
        <div className={styles.locationWrapper} onClick={handleLocationClick}>
          <Icon style={{ width: "2rem", height: "2rem" }} />
          <span className={styles.locationText}>{selectedLocation?.name || defaultCity.name}</span>
          <IcChevronDown style={{ width: "2rem", height: "2rem" }} />
        </div>
      </div>

      <LocationBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={handleCloseBottomSheet}
        onLocationSelect={handleLocationSelect}
      />
    </>
  );
}
