import React from "react";
import { Player } from "../../types/interfaces";
import { formatTimestampToBrasilia } from "../../utils/timeStampToDate";
import { FaCalendarDay, FaIdBadge, FaClock } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { useHeroContext } from "../../hooks/useHeroContext";
import { getHeroNameById } from "../../utils/getHeroByNameId";

interface MatchDetailProps {
  activate_time: number;
  average_mmr: number;
  match_id: string;
  last_update_time: number;
  radiant_score: number;
  dire_score: number;
  players: Player[];
}

const MatchDetailCard: React.FC<MatchDetailProps> = ({
  activate_time,
  average_mmr,
  match_id,
  last_update_time,
  radiant_score,
  dire_score,
  players,
}) => {
  const { heroStats } = useHeroContext();
  const radiantPlayers = players.filter((player) => player.team === 0);
  const direPlayers = players.filter((player) => player.team === 1);

  return (
    <div className="bg-gray-800 border border-gray-600 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-white mb-4">Detalhes do Game</h3>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-yellow-400 flex items-center">
          <GiSkills className="mr-2" /> Média de MMR: {average_mmr}
        </h4>
        <div className="text-gray-300">
          <p className="flex items-center mb-2">
            <FaCalendarDay className="mr-2" />
            Horário de começo: {formatTimestampToBrasilia(activate_time)}
          </p>
          <p className="flex items-center mb-2">
            <FaIdBadge className="mr-2" />
            ID do game: {match_id}
          </p>
          <p className="flex items-center mb-2">
            <FaClock className="mr-2" />
            Última atualização: {formatTimestampToBrasilia(last_update_time)}
          </p>
          <p className="flex items-center mb-2">
            <span className="font-semibold text-white">Placar Iluminados:</span>{" "}
            <span
              className={
                radiant_score > dire_score ? "text-green-500" : "text-red-500"
              }
            >
              {radiant_score}
            </span>
          </p>
          <p className="flex items-center mb-2">
            <span className="font-semibold text-white">Placar Temidos:</span>{" "}
            <span
              className={
                radiant_score < dire_score ? "text-green-500" : "text-red-500"
              }
            >
              {dire_score}
            </span>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-600 pt-4">
        <h4 className="text-lg font-semibold text-accent mb-2">Iluminados</h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          {radiantPlayers.length > 0 &&
            radiantPlayers.map((player, index) => (
              <li key={index}>
                <span className="font-semibold">
                  {player.name || `Jogador ${index + 1}`}:
                </span>{" "}
                {getHeroNameById(player.hero_id, heroStats)}
              </li>
            ))}
        </ul>
        <h4 className="text-lg font-semibold text-primary mt-4 mb-2">
          Temidos
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          {direPlayers.length > 0 &&
            direPlayers.map((player, index) => (
              <li key={index}>
                <span className="font-semibold">
                  {player.name || `Jogador ${index + 1}`}:
                </span>{" "}
                {getHeroNameById(player.hero_id, heroStats)}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchDetailCard;
