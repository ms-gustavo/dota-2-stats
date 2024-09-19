import { useContext } from "react";
import { TeamsContext } from "../context/TeamsContext";

export const useTeamsContext = () => {
  const context = useContext(TeamsContext);
  if (context === undefined) {
    throw new Error("useTeamsContext must be used within a TeamsContext");
  }
  return context;
};
