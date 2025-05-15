import { useEffect, useState } from "react";
import * as styles from "./locationBottomSheet.css";
import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import { Button } from "@common/component/Button";
import { LOCATION_DATA, City, District } from "./Mock";
import { IcCheck } from "@asset/svg";

interface LocationBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocation: District | null;
  onLocationSelect: (city: City, district: District) => void;
}

export default function LocationBottomSheet({
  isOpen,
  onClose,
  currentLocation,
  onLocationSelect,
}: LocationBottomSheetProps) {
  // 1차(시/도)와 2차(군/구) 선택 상태
  const [selectedCityId, setSelectedCityId] = useState(LOCATION_DATA[0].locationId);
  const [selectedDistrictId, setSelectedDistrictId] = useState(LOCATION_DATA[0].children[0].locationId);

  // 시/도 변경 시, 해당 시/도의 첫 번째 군/구 자동 선택
  useEffect(() => {
    const city = LOCATION_DATA.find((c) => c.locationId === selectedCityId);
    if (city && city.children.length > 0) {
      setSelectedDistrictId(city.children[0].locationId);
    }
  }, [selectedCityId]);

  // 바텀시트가 열릴 때도 자동 선택
  useEffect(() => {
    if (isOpen) {
      setSelectedCityId(LOCATION_DATA[0].locationId);
      setSelectedDistrictId(LOCATION_DATA[0].children[0].locationId);
    }
  }, [isOpen]);

  const selectedCity = LOCATION_DATA.find((c) => c.locationId === selectedCityId)!;
  const selectedDistrict = selectedCity.children.find((d) => d.locationId === selectedDistrictId)!;

  return (
    <BottomSheet
      isOpen={isOpen}
      handleOpen={(open) => !open && onClose()}
      handleDimmedClose={onClose}
    >
      <>
        <div className={styles.locationSheetContainer}>
          {/* 좌측: 시/도 리스트 */}
          <div className={styles.cityList}>
            {LOCATION_DATA.map((city) => (
              <Button
                key={city.locationId}
                label={city.locationName}
                size="large"
                width="100%"
                variant={city.locationId === selectedCityId ? "solidNeutral" : "solidNeutral"}
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
        </div>      
      </>
    </BottomSheet>
  );
}
