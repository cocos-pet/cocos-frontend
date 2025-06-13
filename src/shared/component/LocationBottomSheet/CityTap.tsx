import * as styles from "./LocationBottomSheet.css.ts";

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
