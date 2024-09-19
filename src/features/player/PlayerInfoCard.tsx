import React from "react";
import { calculateWinrate } from "../../utils/calculateWinRate";
import { PlayerDetails, PlayersWL } from "../../types/interfaces";
import RankDisplay from "./RankDisplay";

interface PlayerInfoCardProps {
  playerDetails: PlayerDetails;
  playerWL: PlayersWL;
}

const PlayerInfoCard: React.FC<PlayerInfoCardProps> = ({
  playerDetails,
  playerWL,
}) => {
  return (
    <div className="container mx-auto p-4 bg-background text-lightText">
      <div className="bg-darkGray p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          <img
            src={playerDetails.profile.avatarfull}
            alt={`${playerDetails.profile.personaname}'s avatar`}
            className="rounded-full w-32 h-32 border-4 border-gold mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold text-gold mb-2">
              {playerDetails.profile.personaname}
            </h1>
            <p className="text-lightText text-lg">
              ID da conta: {playerDetails.profile.account_id}
            </p>
            <p className="text-lightText text-lg">
              Perfil Steam:{" "}
              <a
                href={playerDetails.profile.profileurl}
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver perfil
              </a>
            </p>
            <p className="text-lightText text-lg">
              País: {playerDetails.profile.loccountrycode || "N/A"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-darkLighterGray p-4 rounded-lg">
            <h2 className="text-xl font-bold text-gold mb-2">Rank</h2>
            <p className="text-lightText text-lg mb-2">
              {playerDetails.rank_tier ? (
                <RankDisplay rank_tier={playerDetails.rank_tier} />
              ) : (
                "Unranked"
              )}
            </p>
            <p className="text-lightText text-lg">
              Classificação:{" "}
              {playerDetails.leaderboard_rank
                ? playerDetails.leaderboard_rank
                : "N/A"}
            </p>
          </div>

          <div className="bg-darkLighterGray p-4 rounded-lg">
            <h2 className="text-xl font-bold text-gold mb-2">
              Vitórias/Derrotas
            </h2>
            {playerWL ? (
              <>
                <p className="text-accent text-lg">Vitórias: {playerWL.win}</p>
                <p className="text-primary text-lg">
                  Derrotas: {playerWL.lose}
                </p>
                <p className="text-lg">
                  Winrate:{" "}
                  <span
                    className={`${
                      calculateWinrate(playerWL.win, playerWL.lose) > 50
                        ? "text-accent"
                        : "text-primary"
                    }`}
                  >
                    {calculateWinrate(playerWL.win, playerWL.lose)}%
                  </span>
                </p>
              </>
            ) : (
              <p className="text-lightText text-lg">Não há dados disponíveis</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfoCard;
