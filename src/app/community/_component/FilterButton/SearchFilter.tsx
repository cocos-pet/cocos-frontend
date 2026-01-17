import { IcSearchFillter, IcSearchFillterBlue } from "@asset/svg";
import {
  filterButtonContainer,
  filterText,
  selectedChipsContainer,
} from "@app/community/_component/FilterButton/SearchFilter.css.ts";
import { useFilterStore, SelectedChips, CategoryType } from "@store/filter.ts";
import Chip from "@common/component/Chip/Chip";
import { getSelectedChipNamesById } from "@shared/util/getSelectedChipNamesById";

type filterButtonProps = {
  isActive: boolean;
  onFilterClick: () => void;
};

export const SearchFilter = ({
  isActive,
  onFilterClick,
}: filterButtonProps) => {
  const { selectedChips, toggleChips, categoryData } = useFilterStore();

  if (!isActive) {
    return (
      <div className={filterButtonContainer}>
        <IcSearchFillter onClick={onFilterClick} width={20} height={20} />
        <span className={filterText}>필터</span>
      </div>
    );
  }

  return (
    <div className={selectedChipsContainer}>
      <IcSearchFillterBlue onClick={onFilterClick} width={20} height={20} />
      {Object.entries(selectedChips).map(([key, ids]) =>
        (ids as number[]).map((id) => {
          const keyMap: Record<keyof SelectedChips, CategoryType> = {
            breedId: "breeds",
            diseaseIds: "disease",
            symptomIds: "symptoms",
          } as const;

          const category = keyMap[key as keyof SelectedChips];
          const name = getSelectedChipNamesById(id, category, categoryData);

          return (
            <Chip
              key={`filter-chip-${key}-${id}`}
              label={name || "Unknown"}
              icon={true}
              onClick={() =>
                toggleChips({ id, category: key as keyof SelectedChips })
              }
            />
          );
        })
      )}
    </div>
  );
};
