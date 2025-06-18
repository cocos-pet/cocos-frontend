import * as styles from "./locationHeader.css";
import { IcChevronDown, IcTarget } from "@asset/svg";
import { useState, useEffect } from "react";
import LocationBottomSheet from "../locationBottomSheet/locationBottomSheet";
import { useGetLocation } from "@api/domain/review/location/hook";
import { motion } from "framer-motion";

interface Location {
  id: number;
  name: string;
  districts?: {
    id: number;
    name: string;
  }[];
}

interface LocationHeaderProps {
  onLocationChange: (location: Location) => void;
}

export default function LocationHeader({
  onLocationChange,
}: LocationHeaderProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const { data: cities } = useGetLocation();

  useEffect(() => {
    if (cities && cities.length > 0 && !selectedLocation) {
      // 서울시 찾기
      const seoul = cities.find(
        (city) => city.name === "서울시" || city.name === "서울특별시"
      );
      if (seoul) {
        // 강남구 찾기
        const gangnam = seoul.districts?.find(
          (district) => district.name === "강남구"
        );
        if (gangnam) {
          const defaultLocation = {
            id: gangnam.id,
            name: gangnam.name,
          };
          setSelectedLocation(defaultLocation);
          onLocationChange(defaultLocation);
        }
      }
    }
  }, [cities, selectedLocation, onLocationChange]);

  const handleLocationClick = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setIsBottomSheetOpen(false);
    onLocationChange(location);
  };

  if (!cities) return null;

  return (
    <>
      <div className={styles.location}>
        <div className={styles.locationButton} onClick={handleLocationClick}>
          <div className={styles.locationContent}>
            <IcTarget width={20} />
            <span className={styles.locationText}>
              {selectedLocation?.name || "강남구"}
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
      </div>

      <LocationBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={handleCloseBottomSheet}
        onLocationSelect={handleLocationSelect}
      />
    </>
  );
}
