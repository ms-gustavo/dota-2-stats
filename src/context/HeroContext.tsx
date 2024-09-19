import React, { createContext, useEffect, useState, ReactNode } from "react";
import { fetchHeroStats } from "../services/api";
import { HeroStatType } from "../types/interfaces";
import Loader from "../components/Loader";

interface HeroContextType {
  heroStats: HeroStatType[];
  isLoading: boolean;
}

export const HeroContext = createContext<HeroContextType | undefined>(
  undefined
);

export const HeroProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [heroStats, setHeroStats] = useState<HeroStatType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadHeroStats() {
      try {
        const stats = await fetchHeroStats();
        setHeroStats(stats);
      } catch (error: unknown) {
        console.error(
          `Failed to fetch Heroes Stats: ${(error as Error).message}`
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadHeroStats();
  }, []);

  return (
    <HeroContext.Provider value={{ heroStats, isLoading }}>
      {isLoading ? <Loader message="Loading Heroes Stats..." /> : children}
    </HeroContext.Provider>
  );
};
