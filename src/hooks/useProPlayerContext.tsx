import { useContext } from "react";
import { ProPlayerContext } from "../context/ProPlayerContext";

export const useProPlayerContext = () => {
  const context = useContext(ProPlayerContext);
  if (context === undefined) {
    throw new Error("useHeroContext must be used within a HeroProvider");
  }
  return context;
};
