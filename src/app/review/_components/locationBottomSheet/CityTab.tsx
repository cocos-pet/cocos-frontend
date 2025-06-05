import * as styles from "./locationBottomSheet.css";

interface CityTabProps {
  locationName: string;
  isSelected: boolean;
  onClick: () => void;
}

export const CityTab = ({ locationName, isSelected, onClick }: CityTabProps) => (
  <div className={`${styles.cityTab} ${isSelected ? styles.selectedCityTab : ""}`} onClick={onClick}>
    {locationName}
  </div>
);
