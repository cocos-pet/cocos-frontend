import FilterBottomSheet from "@shared/component/FilterBottomSheet/FilterBottomSheet";
import { useFilterStore } from "@store/filter";
import { useEffect } from "react";
const Main = () => {
  // const { category, categoryData, setOpen, toggleOpen } = useFilterStore();
  const { setOpen } = useFilterStore();

  useEffect(() => {
    setOpen(true);
  }, [setOpen]);
  return (
    <>
      <FilterBottomSheet />
    </>
  );
};

export default Main;
