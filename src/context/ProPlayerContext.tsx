import React, { createContext, ReactNode, useEffect, useState } from "react";
import { ProPlayerType } from "../types/interfaces";
import { fetchProPlayers } from "../services/api";
import Loader from "../components/Loader";

interface ProPlayerContextType {
  proPlayers: ProPlayerType[];
  isLoading: boolean;
}

export const ProPlayerContext = createContext<ProPlayerContextType | undefined>(
  undefined
);

export const ProPlayerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [proPlayers, setProPlayers] = useState<ProPlayerType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadProPlayers() {
      try {
        const players = await fetchProPlayers();
        setProPlayers(players.slice(0, 10));
      } catch (error: unknown) {
        console.error(
          `Failed to fetch Pro Players: ${(error as Error).message}`
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadProPlayers();
  }, []);

  return (
    <ProPlayerContext.Provider value={{ proPlayers, isLoading }}>
      {isLoading ? <Loader message="Loading Pro Players Data..." /> : children}
    </ProPlayerContext.Provider>
  );
};
