import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOen, openModal, closeModal];
};
