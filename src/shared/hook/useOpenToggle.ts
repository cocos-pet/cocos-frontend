import { useState } from "react";

export function useOpenToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return { isOpen, handleOpenChange, handleClose, handleOpen };
}
