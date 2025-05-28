import * as styles from "./locationBottomSheet.css";

interface CityTabProps {
  locationId: number;
  locationName: string;
  isSelected: boolean;
  onClick: () => void;
}

export const CityTab = ({ locationId, locationName, isSelected, onClick }: CityTabProps) => {
  return (
    <div className={`${styles.cityTab} ${isSelected ? styles.selectedCityTab : ""}`} onClick={onClick}>
      {locationName}
    </div>
  );
};
