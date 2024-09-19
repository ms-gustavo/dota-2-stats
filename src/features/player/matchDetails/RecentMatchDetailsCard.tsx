import React from "react";
import { MatchDetailsCardProps } from "../../../types/interfaces";
import MatchDetailsHeader from "./MatchDetailsHeader";
import TeamDetails from "./TeamsDetails";

const RecentMatchDetailsCard: React.FC<MatchDetailsCardProps> = ({
  matchDetails,
  radiantWin,
}) => {
  const radiantPlayers = matchDetails?.players?.filter(
    (player) => player.isRadiant
  );
  const direPlayers = matchDetails?.players?.filter(
    (player) => !player.isRadiant
  );

  return (
    <>
      {matchDetails && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <MatchDetailsHeader
            radiantScore={matchDetails.radiant_score}
            direScore={matchDetails.dire_score}
            radiantWin={radiantWin}
          />

          <div className="lg:flex lg:justify-between">
            <TeamDetails teamTitle="Iluminados" team={radiantPlayers} />
            <br />
            <TeamDetails teamTitle="Temidos" team={direPlayers} />
          </div>
        </div>
      )}
    </>
  );
};

export default RecentMatchDetailsCard;
