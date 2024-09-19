import React from "react";
import { TeamsListComponentProps } from "../../types/interfaces";
import Card from "./../Card";
import TeamCard from "../../features/home/TeamCard";
import ErrorContainer from "../ErrorContainer";

const TeamsListComponent: React.FC<TeamsListComponentProps> = ({
  teams,
  teamsError,
}) => {
  return (
    <>
      <Card title="Top 10 Pro Teams">
        {teamsError ? (
          <ErrorContainer message="Erro ao carregar os pro teams" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map((team) => (
              <TeamCard
                key={team.team_id}
                logo_url={team.logo_url}
                losses={team.losses}
                name={team.name}
                rating={team.rating}
                tag={team.tag}
                wins={team.wins}
                last_match_time={team.last_match_time}
              />
            ))}
          </div>
        )}
      </Card>
    </>
  );
};

export default TeamsListComponent;
