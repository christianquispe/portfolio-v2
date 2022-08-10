import { useState } from "react";

export const useDialog = (initialOpen = false) => {
  const [open, setOpen] = useState(initialOpen);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleToggle = () => setOpen(!open);

  return { open, handleOpen, handleClose, handleToggle };
};
