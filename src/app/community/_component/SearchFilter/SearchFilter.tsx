import { IcSearchFillter, IcSearchFillterBlue } from "@asset/svg";
import {
  filterButtonContainer,
  filterText,
  selectedChipsContainer,
} from "@app/community/_component/SearchFilter/SearchFilter.css.ts";
import { useFilterStore, SelectedChips, CategoryType } from "@store/filter.ts";
import Chip from "@common/component/Chip/Chip";
import { getSelectedChipNamesById } from "@shared/util/getSelectedChipNamesById";

type filterButtonProps = { 
  isActive: boolean;
  onFilterClick: (selectedChips: SelectedChips) => void;
};

export const SearchFilter = ({
  isActive,
  onFilterClick,
}: filterButtonProps) => {
  const { selectedChips, toggleChips, categoryData, setOpen } = useFilterStore();

  const handleFilterClick = () => {
    setOpen(true);
  };

  if (!isActive) {
    return (
      <div className={filterButtonContainer} onClick={handleFilterClick}>
        <IcSearchFillter  width={20} height={20} />
        <span className={filterText}>필터</span>
      </div>
    );
  }

  return (
    <div className={selectedChipsContainer}>
      <IcSearchFillterBlue width={20} height={20} style={{ flexShrink: 0 }} onClick={handleFilterClick}/>
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
              size='small'
              onClick={() => {
                const categoryKey = key as keyof SelectedChips;
                const updatedChips: SelectedChips = {
                  ...selectedChips,
                  [categoryKey]: selectedChips[categoryKey].filter((chipId) => chipId !== id),
                };
                toggleChips({ id, category: categoryKey });
                onFilterClick(updatedChips);
              }}
              
            />
          );
        })
      )}
    </div>
  );
};
