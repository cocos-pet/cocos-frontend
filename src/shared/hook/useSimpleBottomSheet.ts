import { useState } from "react";

const useSimpleBottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openBottomSheet = () => setIsOpen(true);
  const closeBottomSheet = () => setIsOpen(false);
  const toggleBottomSheet = () => setIsOpen((prev) => !prev);

  return { isOpen, openBottomSheet, closeBottomSheet, toggleBottomSheet };
};

export default useSimpleBottomSheet;
