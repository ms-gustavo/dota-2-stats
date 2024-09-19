import React from "react";
import Card from "./../Card";
import { MatchDetailsListComponentProps } from "../../types/interfaces";
import MatchDetailCard from "../../features/home/MatchDetailCard";

const MatchDeatilListComponent: React.FC<MatchDetailsListComponentProps> = ({
  matchDetails,
}) => {
  return (
    <>
      <Card title="Games ao vivo">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {matchDetails.map((matchDetail) => (
            <MatchDetailCard
              key={matchDetail.lobby_id}
              activate_time={matchDetail.activate_time}
              average_mmr={matchDetail.average_mmr}
              match_id={matchDetail.match_id}
              last_update_time={matchDetail.last_update_time}
              radiant_score={matchDetail.radiant_score}
              dire_score={matchDetail.dire_score}
              players={matchDetail.players}
            />
          ))}
        </div>
      </Card>
    </>
  );
};

export default MatchDeatilListComponent;
