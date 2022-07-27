import { useState } from "react";

export const useHeader = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

  const openBurgerMenu = () => {
    setBurgerMenuOpen(true);
    console.log("open");
  };

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
    console.log("close");
  };

  return {
    isBurgerMenuOpen,
    setBurgerMenuOpen,
    openBurgerMenu,
    closeBurgerMenu,
  };
};
