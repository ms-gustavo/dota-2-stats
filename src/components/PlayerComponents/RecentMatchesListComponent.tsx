import React from "react";
import { RecentMatchesProps } from "../../types/interfaces";
import RecentMatchCard from "../../features/player/matchDetails/RecentMatchCard";

interface RecentMatchesListComponentProps {
  recentMatches: RecentMatchesProps[];
}

const RecentMatchesListComponent: React.FC<RecentMatchesListComponentProps> = ({
  recentMatches,
}) => {
  return (
    <div className="bg-gray-800 border border-gray-600 p-4 rounded-lg shadow-lg">
      <div className="space-y-4">
        {recentMatches.slice(0, 5).map((match) => (
          <div
            key={match.match_id}
            className="bg-gray-700 p-4 rounded-lg shadow-md"
          >
            <RecentMatchCard match={match} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentMatchesListComponent;
