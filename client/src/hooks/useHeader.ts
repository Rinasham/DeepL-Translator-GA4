import { useState } from "react";

export const useHeader = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

  const openBurgerMenu = () => {
    setBurgerMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  return {
    isBurgerMenuOpen,
    setBurgerMenuOpen,
    openBurgerMenu,
    closeBurgerMenu,
  };
};
