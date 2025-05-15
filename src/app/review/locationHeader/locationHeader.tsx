import * as styles from "./locationHeader.css";
import { useQuery } from "@tanstack/react-query";
import { IcChevronDown, Icon } from "@asset/svg";
import { useState } from "react";
import LocationBottomSheet from "../locationBottomSheet/locationBottomSheet";
import { LOCATION_DATA, City, District } from "../locationBottomSheet/Mock";
interface LocationData {
  locationId: number;
  locationName: string;
  locationType: string;
}

const getLocationInfo = async (): Promise<LocationData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LOCATION_DATA[0].children[0]);
    }, 500);
  });
};

export default function LocationHeader() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const { data: locationData, refetch } = useQuery<LocationData>({
    queryKey: ["location"],
    queryFn: getLocationInfo,
  });

  const handleLocationClick = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const handleLocationSelect = (city: City, district: District) => {
    refetch();
  };

  return (
    <>
      <div className={styles.locationHeader}>
        <div className={styles.locationWrapper} onClick={handleLocationClick}>
          <Icon style={{ width: "2rem", height: "2rem" }} />
          <span className={styles.locationText}>{locationData?.locationName}</span>
          <IcChevronDown style={{ width: "2rem", height: "2rem" }} />
        </div>
      </div>

      <LocationBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={handleCloseBottomSheet}
        onLocationSelect={handleLocationSelect}
        currentLocation={null}
      />
    </>
  );
}
