import { useContext } from "react";
import { HeroContext } from "../context/HeroContext";

export const useHeroContext = () => {
  const context = useContext(HeroContext);
  if (context === undefined) {
    throw new Error("useHeroContext must be used within a HeroProvider");
  }
  return context;
};
