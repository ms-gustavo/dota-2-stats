import { useContext } from "react";
import { CurrentlyOnGoingGamesContext } from "../context/CurrentlyOnGoingGamesContext";

export const useCurrentlyOnGoingGamesContext = () => {
  const context = useContext(CurrentlyOnGoingGamesContext);
  if (context === undefined) {
    throw new Error(
      "useCurrentlyOnGoingGamesContext must be used within a useCurrentlyOnGoingGamesContext"
    );
  }
  return context;
};
