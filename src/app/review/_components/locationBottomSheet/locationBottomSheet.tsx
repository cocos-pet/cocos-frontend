import { useEffect, useState } from "react";
import * as styles from "./locationBottomSheet.css";
import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import { Button } from "@common/component/Button";
import { LOCATION_DATA, City, District } from "./Mock";
import { IcCheck } from "@asset/svg";
import { CityTab } from "./CityTab";

interface LocationBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationSelect: (city: City, district: District) => void;
}

export default function LocationBottomSheet({ isOpen, onClose, onLocationSelect }: LocationBottomSheetProps) {
  const [selectedCityId, setSelectedCityId] = useState(1);
  const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSelectedCityId(1);
      setSelectedDistrictId(null);
    }
  }, [isOpen]);

  const selectedCity = LOCATION_DATA.find((c) => c.locationId === selectedCityId)!;

  return (
    <BottomSheet isOpen={isOpen} handleOpen={(open) => !open && onClose()} handleDimmedClose={onClose}>
      <>
        <div className={styles.locationSheetContainer}>
          {/* 좌측: 시/도 리스트 */}
          <div className={styles.cityList}>
            {LOCATION_DATA.map((city) => (
              <CityTab
                key={city.locationId}
                locationId={city.locationId}
                locationName={city.locationName}
                isSelected={city.locationId === selectedCityId}
                onClick={() => setSelectedCityId(city.locationId)}
              />
            ))}
          </div>
          {/* 우측: 군/구 리스트 */}
          <div className={styles.districtList}>
            {selectedCity.children.map((district) => (
              <div
                key={district.locationId}
                className={`${styles.districtItem} ${district.locationId === selectedDistrictId ? styles.selectedDistrict : ""}`}
                onClick={() => setSelectedDistrictId(district.locationId)}
              >
                <span>{district.locationName}</span>
                {district.locationId === selectedDistrictId && (
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
              if (selectedDistrictId !== null) {
                onLocationSelect(selectedCity, selectedCity.children.find((d) => d.locationId === selectedDistrictId)!);
                onClose();
              }
            }}
          />
        </div>
      </>
    </BottomSheet>
  );
}
