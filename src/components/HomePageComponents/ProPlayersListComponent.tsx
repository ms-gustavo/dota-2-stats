import React from "react";
import Card from "./../Card";
import ProPlayerCard from "../../features/home/ProPlayerCard";
import { ProPlayersListComponentProps } from "../../types/interfaces";
import ErrorContainer from "../ErrorContainer";

const ProPlayersListComponent: React.FC<ProPlayersListComponentProps> = ({
  proPlayers,
  proPlayersError,
}) => {
  return (
    <>
      <Card title="Top 10 Pro Players">
        {proPlayersError ? (
          <ErrorContainer message="Erro ao carregar os pro players" />
        ) : (
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
        )}
      </Card>
    </>
  );
};

export default ProPlayersListComponent;
