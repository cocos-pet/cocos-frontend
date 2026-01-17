import { IcSearchFillter, IcSearchFillterBlue } from "@asset/svg";
import { filterButtonContainer, filterText } from "@app/community/_component/FilterButton/FilterButton.css.ts";
import { useFilterStore } from "@store/filter.ts";

type filterButtonProps = {
  isActive: boolean;
  onFilterClick: () => void;
};

export const SearchFilter = ({ isActive, onFilterClick }: filterButtonProps) => {
  const { setCategoryData, selectedChips, clearAllChips, setOpen } = useFilterStore();

  if (!isActive) {
    return (
      <div className={filterButtonContainer}>
        <IcSearchFillter onClick={onFilterClick} width={20} height={20} />
        <span className={filterText}>필터</span>
      </div>
    );
  }

  return (
    <>
      <IcSearchFillterBlue onClick={onFilterClick} width={20} height={20} />
    </>
  );
};
