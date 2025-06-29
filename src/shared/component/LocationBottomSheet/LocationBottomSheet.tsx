import { useEffect, useState } from "react";
import * as styles from "./LocationBottomSheet.css";
import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import { Button } from "@common/component/Button";
import { IcCheck } from "@asset/svg";
import { useGetLocation } from "@api/domain/review/location/hook";
import { CityTab } from "@shared/component/LocationBottomSheet/CityTap.tsx";
import { District, LocationType } from "@api/domain/review/location/types.ts";

interface LocationBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationSelect: (location: { id: number; name: string; type: LocationType }) => void;
}

interface SelectedLocation {
  id: number;
  name: string;
  type: LocationType;
}

export default function LocationBottomSheet({ isOpen, onClose, onLocationSelect }: LocationBottomSheetProps) {
  const [selectedCityId, setSelectedCityId] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<SelectedLocation | null>(null);
  const { data: cities, refetch } = useGetLocation();

  useEffect(() => {
    if (isOpen) {
      setSelectedCityId(1);
      setSelectedLocation(null);
      refetch();
    }
  }, [isOpen, refetch]);

  if (!cities || cities.length === 0) return null;
  const selectedCity = cities.find((city) => city.id === selectedCityId) || cities[0];
  // 구/군 목록에서 "전체"를 제외한 실제 구/군들
  const districts = selectedCity.districts?.filter((d) => d.type === "DISTRICT") || [];
  // "전체" 옵션 찾기
  const cityWideOption = selectedCity.districts?.find((d) => d.type === "CITY");

  const handleCitySelect = (cityId: number) => {
    setSelectedCityId(cityId);
    setSelectedLocation(null);
  };

  const handleLocationSelect = (district: District) => {
    setSelectedLocation({
      id: district.id,
      name: district.name,
      type: district.type,
    });
  };

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
                isSelected={city.id === selectedCityId && selectedLocation === null}
                onClick={() => handleCitySelect(city.id)}
              />
            ))}
          </div>

          {/* 군/구 리스트 */}
          {districts.length > 0 && (
            <div className={styles.districtList}>
              {/* 전체 옵션 */}
              {cityWideOption && (
                <div
                  key={selectedCity.id}
                  className={`${styles.districtItem} ${
                    selectedLocation?.id === cityWideOption.id && selectedLocation?.type === "CITY"
                      ? styles.selectedDistrict
                      : ""
                  }`}
                  onClick={() => handleLocationSelect(cityWideOption)}
                >
                  <span>{cityWideOption.name}</span>
                  {selectedLocation?.id === cityWideOption.id && selectedLocation?.type === "CITY" && (
                    <span className={styles.checkIcon}>
                      <IcCheck />
                    </span>
                  )}
                </div>
              )}
              {districts.map((district) => (
                <div
                  key={district.id}
                  className={`${styles.districtItem} ${
                    district.id === selectedLocation?.id && selectedLocation?.type === "DISTRICT"
                      ? styles.selectedDistrict
                      : ""
                  }`}
                  onClick={() => handleLocationSelect(district)}
                >
                  <span>{district.name}</span>
                  {district.id === selectedLocation?.id && selectedLocation?.type === "DISTRICT" && (
                    <span className={styles.checkIcon}>
                      <IcCheck />
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            label="확인하기"
            size="large"
            width="100%"
            disabled={selectedLocation?.id === null}
            onClick={() => {
              const selectedDistrict = selectedCity.districts?.find((d) => d.id === selectedLocation?.id);
              if (selectedDistrict) {
                onLocationSelect({
                  id: selectedDistrict.id,
                  name: selectedDistrict.name,
                  type: selectedDistrict.type,
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
