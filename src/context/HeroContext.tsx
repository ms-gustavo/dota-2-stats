import React, { createContext, useEffect, useState, ReactNode } from "react";
import { fetchHeroStats } from "../services/api";
import { HeroStatType } from "../types/interfaces";
import Loader from "../components/Loader";

interface HeroContextType {
  heroStats: HeroStatType[];
  isLoading: boolean;
  heroStatsError: boolean;
}

export const HeroContext = createContext<HeroContextType | undefined>(
  undefined
);

export const HeroProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [heroStats, setHeroStats] = useState<HeroStatType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [heroStatsError, setHeroStatsError] = useState<boolean>(false);

  useEffect(() => {
    async function loadHeroStats() {
      setHeroStatsError(false);
      try {
        const stats = await fetchHeroStats();
        setHeroStats(stats);
      } catch (error: unknown) {
        console.error(
          `Failed to fetch Heroes Stats: ${(error as Error).message}`
        );
        setHeroStatsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadHeroStats();
  }, []);

  return (
    <HeroContext.Provider value={{ heroStats, isLoading, heroStatsError }}>
      {isLoading ? (
        <Loader message="Obtendo estatísticas de heróis..." />
      ) : (
        children
      )}
    </HeroContext.Provider>
  );
};
