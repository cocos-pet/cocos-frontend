import { useState } from "react";

export const useDropDown = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const openDropDown = () => setIsDropDownOpen(true);
  const closeDropDown = () => setIsDropDownOpen(false);
  const toggleDropDown = () => setIsDropDownOpen((prev) => !prev);

  return {
    isDropDownOpen,
    openDropDown,
    closeDropDown,
    toggleDropDown,
  };
};
