import React, { createContext, useEffect, useState, ReactNode } from "react";
import { fetchTeams } from "../services/api";
import { TeamType } from "../types/interfaces";
import Loader from "../components/Loader";

interface TeamsContextType {
  teams: TeamType[];
  isLoading: boolean;
  teamsError: boolean;
}

export const TeamsContext = createContext<TeamsContextType | undefined>(
  undefined
);

export const TeamsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [teams, setTeams] = useState<TeamType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [teamsError, setTeamsError] = useState<boolean>(false);

  useEffect(() => {
    async function loadHeroStats() {
      setTeamsError(false);
      try {
        const stats = await fetchTeams();
        setTeams(stats.slice(0, 10));
      } catch (error: unknown) {
        console.error(`Failed to fetch Pro Teams: ${(error as Error).message}`);
        setTeamsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadHeroStats();
  }, []);

  return (
    <TeamsContext.Provider value={{ teams, isLoading, teamsError }}>
      {isLoading ? <Loader message="Loading Pro Teams..." /> : children}
    </TeamsContext.Provider>
  );
};
