import Nav from "@common/component/Nav/Nav";
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
      <Nav />
      <FilterBottomSheet />
    </>
  );
};

export default Main;
