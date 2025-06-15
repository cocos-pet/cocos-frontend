import { useEffect, useState } from "react";
import * as styles from "./LocationBottomSheet.css";
import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import { Button } from "@common/component/Button";
import { IcCheck } from "@asset/svg";
import { useGetLocation } from "@api/domain/review/location/hook";
import { CityTab } from "@shared/component/LocationBottomSheet/CityTap.tsx";

interface LocationBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationSelect: (location: { id: number; name: string }) => void;
}

export default function LocationBottomSheet({ isOpen, onClose, onLocationSelect }: LocationBottomSheetProps) {
  const [selectedCityId, setSelectedCityId] = useState(1);
  const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(null);
  const { data: cities, refetch } = useGetLocation();

  useEffect(() => {
    if (isOpen) {
      setSelectedCityId(1);
      setSelectedDistrictId(null);
      refetch();
    }
  }, [isOpen, refetch]);

  if (!cities || cities.length === 0) return null;
  const selectedCity = cities.find((city) => city.id === selectedCityId) || cities[0];

  return (
    <BottomSheet isOpen={isOpen} handleOpen={(open) => !open && onClose()} handleDimmedClose={onClose}>
      <>
        <div className={styles.locationSheetContainer}>
          {/* 시/도 리스트 */}
          <div className={styles.cityList}>
            {cities.map((city) => (
              <CityTab
                key={city.id}
                locationName={city.name}
                isSelected={city.id === selectedCityId}
                onClick={() => setSelectedCityId(city.id)}
              />
            ))}
          </div>
          {/* 군/구 리스트 */}
          <div className={styles.districtList}>
            {selectedCity.districts?.map((district) => (
              <div
                key={district.id}
                className={`${styles.districtItem} ${district.id === selectedDistrictId ? styles.selectedDistrict : ""}`}
                onClick={() => setSelectedDistrictId(district.id)}
              >
                <span>{district.name}</span>
                {district.id === selectedDistrictId && (
                  <span className={styles.checkIcon}>
                    <IcCheck />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            label="확인하기"
            size="large"
            width="100%"
            disabled={selectedDistrictId === null}
            onClick={() => {
              const selectedDistrict = selectedCity.districts?.find((d) => d.id === selectedDistrictId);
              if (selectedDistrict) {
                onLocationSelect({
                  id: selectedDistrict.id,
                  name: selectedDistrict.name,
                });
              }
              onClose();
            }}
          />
        </div>
      </>
    </BottomSheet>
  );
}
