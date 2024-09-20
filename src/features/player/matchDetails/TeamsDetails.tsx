import React from "react";
import { TeamDetailsProps } from "../../../types/interfaces";
import { getHeroNameById } from "../../../utils/getHeroByNameId";
import { useHeroContext } from "../../../hooks/useHeroContext";
import { GiBroadsword, GiSkullCrossedBones } from "react-icons/gi";
import { FaHandsHelping, FaTrophy } from "react-icons/fa";
import PlayerItems from "../PlayerItems";

const TeamDetails: React.FC<TeamDetailsProps> = ({ teamTitle, team }) => {
  const { heroStats } = useHeroContext();

  return (
    <div className="w-full lg:w-1/2 pr-4">
      <h4
        className={`sm:text-center text-xl font-semibold mb-2 ${
          teamTitle === "Iluminados" ? "text-accent" : "text-primary"
        }`}
      >
        {teamTitle}
      </h4>
      <div className="space-y-4">
        {team &&
          team.map((player, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-700 p-2 rounded-md"
            >
              <div className="mr-4">
                <span className="text-secondary text-lg">
                  {player.personaname ? `${player.personaname} ` : ""}{" "}
                </span>
                <span className="text-gray-300">
                  {getHeroNameById(player.hero_id, heroStats)}
                </span>
              </div>
              <div className="flex">
                <div className="flex items-center">
                  <FaTrophy className="mr-2 text-secondary" />
                  <span className="text-gray-300">Level: {player.level}</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <GiBroadsword className="mr-2 text-accent" />
                  <span className="text-gray-300">{player.kills}</span>{" "}
                  <GiSkullCrossedBones className="ml-2 mr-2 text-primary" />
                  <span className="text-gray-300">{player.deaths}</span>{" "}
                  <FaHandsHelping className="ml-2 mr-2 text-secondary" />
                  <span className="text-gray-300">{player.assists}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex flex-row space-x-2">
                  <span className="text-gold">OPM: {player.gold_per_min}</span>
                  <span className="text-gold">
                    Patrimônio: {player.net_worth}
                  </span>
                </div>
                <span className="text-experience">
                  XPM: {player.xp_per_min}
                </span>
              </div>
              <div className="flex items-center">
                <PlayerItems player={player} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamDetails;
