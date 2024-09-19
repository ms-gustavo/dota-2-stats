import React from "react";
import Card from "./../Card";
import ProPlayerCard from "../../features/home/ProPlayerCard";
import { ProPlayersListComponentProps } from "../../types/interfaces";
import { useProPlayerContext } from "../../hooks/useProPlayerContext";
import Loader from "./../Loader";

const ProPlayersListComponent: React.FC<ProPlayersListComponentProps> = ({
  proPlayers,
}) => {
  const { isLoading } = useProPlayerContext();

  if (isLoading) {
    return <Loader message="Loading Pro Players Data" />;
  }

  return (
    <>
      <Card title="Top 10 Pro Players">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {proPlayers.map((player) => (
            <ProPlayerCard
              key={player.account_id}
              avatar={player.avatarfull}
              personaname={player.personaname}
              team_name={player.team_name}
              loccountrycode={player.loccountrycode}
              last_login={player.last_login}
              last_match_time={player.last_match_time}
              is_locked={player.is_locked}
            />
          ))}
        </div>
      </Card>
    </>
  );
};

export default ProPlayersListComponent;
