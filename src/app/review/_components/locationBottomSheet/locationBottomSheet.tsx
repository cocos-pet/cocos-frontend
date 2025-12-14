import { useEffect, useState, useMemo } from "react";
import * as styles from "./locationBottomSheet.css";
import BottomSheet from "@common/component/BottomSheet/BottomSheet";
import { Button } from "@common/component/Button";
import { IcCheck } from "@asset/svg";
import { CityTab } from "./CityTab";
import { useGetLocation } from "@api/domain/review/location/hook";
import { District, LocationType } from "@api/domain/review/location/types";
import { DEFAULT_LOCATION } from "@app/review/_constant/locationConfig";

interface LocationBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationSelect: (location: {
    id: number;
    name: string;
    type: LocationType;
  }) => void;
  currentLocation?: {
    id: number;
    name: string;
    type: LocationType;
  };
}

interface SelectedLocation {
  id: number;
  name: string;
  type: LocationType;
}

export default function LocationBottomSheet({
  isOpen,
  onClose,
  onLocationSelect,
  currentLocation,
}: LocationBottomSheetProps) {
  const [selectedCityId, setSelectedCityId] = useState<number>(
    DEFAULT_LOCATION.CITY.id
  );
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedLocation | null>(DEFAULT_LOCATION.DISTRICT);
  const { data: cities, refetch } = useGetLocation();

  const districtToCityMap = useMemo(() => {
    const mapping: { [key: number]: number } = {};
    if (cities) {
      for (const city of cities) {
        if (city.districts) {
          for (const district of city.districts) {
            mapping[district.id] = city.id;
          }
        }
      }
    }
    return mapping;
  }, [cities]);

  useEffect(() => {
    if (isOpen) {
      if (currentLocation) {
        if (currentLocation.type === "DISTRICT") {
          const cityId = districtToCityMap[currentLocation.id];
          if (cityId) {
            setSelectedCityId(cityId);
            setSelectedLocation(currentLocation);
          }
        } else {
          setSelectedCityId(currentLocation.id);
          setSelectedLocation(null);
        }
      } else {
        setSelectedCityId(DEFAULT_LOCATION.CITY.id);
        setSelectedLocation(DEFAULT_LOCATION.DISTRICT);
      }
    }
  }, [isOpen, currentLocation, districtToCityMap]);

  useEffect(() => {
    if (isOpen) {
      refetch();
    }
  }, [isOpen, refetch]);

  if (!cities || cities.length === 0) return null;
  const selectedCity =
    cities.find((city) => city.id === selectedCityId) || cities[0];

  // 고유한 키를 생성하는 함수 -> 중복 방지
  const generateDistrictKey = (
    cityId: number,
    district: District,
    cityName: string
  ) => `${cityName}-${cityId}-${district.name}-${district.id}-${district.type}`;

  const handleCitySelect = (cityId: number) => {
    setSelectedCityId(cityId);
    setSelectedLocation(null);
  };

  // 구/군 목록에서 "전체"를 제외한 실제 구/군들
  const districts =
    selectedCity.districts?.filter((d) => d.type === "DISTRICT") || [];
  // "전체" 옵션 찾기
  const cityWideOption = selectedCity.districts?.find((d) => d.type === "CITY");

  const handleLocationSelect = (district: District) => {
    setSelectedLocation({
      id: district.id,
      name: district.name,
      type: district.type,
    });
  };

  return (
    <BottomSheet
      isOpen={isOpen}
      handleOpen={(open) => !open && onClose()}
      handleDimmedClose={onClose}
    >
      <>
        <div className={styles.locationSheetContainer}>
          {/* 시/도 리스트 */}
          <div className={styles.cityList}>
            {cities.map((city) => (
              <CityTab
                key={`city-${city.name}-${city.id}`}
                locationName={city.name}
                isSelected={
                  city.id === selectedCityId && selectedLocation === null
                }
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
                  key={generateDistrictKey(
                    selectedCity.id,
                    cityWideOption,
                    selectedCity.name
                  )}
                  className={`${styles.districtItem} ${
                    selectedLocation?.id === cityWideOption.id &&
                    selectedLocation?.type === "CITY"
                      ? styles.selectedDistrict
                      : ""
                  }`}
                  onClick={() => handleLocationSelect(cityWideOption)}
                >
                  <span>{cityWideOption.name}</span>
                  {selectedLocation?.id === cityWideOption.id &&
                    selectedLocation?.type === "CITY" && (
                      <span className={styles.checkIcon}>
                        <IcCheck />
                      </span>
                    )}
                </div>
              )}
              {/* 구/군 목록 */}
              {districts.map((district) => (
                <div
                  key={generateDistrictKey(
                    selectedCity.id,
                    district,
                    selectedCity.name
                  )}
                  className={`${styles.districtItem} ${
                    selectedLocation?.id === district.id &&
                    selectedLocation?.type === "DISTRICT"
                      ? styles.selectedDistrict
                      : ""
                  }`}
                  onClick={() => handleLocationSelect(district)}
                >
                  <span>{district.name}</span>
                  {selectedLocation?.id === district.id &&
                    selectedLocation?.type === "DISTRICT" && (
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
            disabled={districts.length > 0 && selectedLocation === null}
            onClick={() => {
              if (selectedLocation) {
                onLocationSelect({
                  id: selectedLocation.id,
                  name: selectedLocation.name,
                  type: selectedLocation.type,
                });
              } else {
                // 도시 전체 선택 시
                onLocationSelect({
                  id: selectedCity.id,
                  name: selectedCity.name,
                  type: selectedCity.districts[0].type,
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
