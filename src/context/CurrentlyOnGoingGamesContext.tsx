import React, { createContext, useEffect, useState, ReactNode } from "react";
import { fetchCurrentlyOnGoingGames } from "../services/api";
import { MatchDetails } from "../types/interfaces";
import Loader from "../components/Loader";

interface CurrentlyOnGoingGamesContextType {
  currentlyOnGoingGames: MatchDetails[];
  isLoading: boolean;
}

export const CurrentlyOnGoingGamesContext = createContext<
  CurrentlyOnGoingGamesContextType | undefined
>(undefined);

export const CurrentlyOnGoingGamesProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentlyOnGoingGames, setCurrentlyOnGoingGames] = useState<
    MatchDetails[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadCurrentlyOnGoingGames() {
      try {
        const currentlyOnGoingGames = await fetchCurrentlyOnGoingGames();
        setCurrentlyOnGoingGames(currentlyOnGoingGames.slice(-6));
      } catch (error: unknown) {
        console.error(
          `Failed to fetch Currently Games: ${(error as Error).message}`
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadCurrentlyOnGoingGames();
  }, []);

  return (
    <CurrentlyOnGoingGamesContext.Provider
      value={{ currentlyOnGoingGames, isLoading }}
    >
      {isLoading ? <Loader message="Loading Currently Games..." /> : children}
    </CurrentlyOnGoingGamesContext.Provider>
  );
};
