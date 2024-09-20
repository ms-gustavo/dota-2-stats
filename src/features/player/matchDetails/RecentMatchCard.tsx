import React, { useEffect, useState } from "react";
import { useHeroContext } from "../../../hooks/useHeroContext";
import {
  FaCalendarDay,
  FaHandsHelping,
  FaClock,
  FaIdBadge,
} from "react-icons/fa";
import { GiSkills, GiSkullCrossedBones, GiBroadsword } from "react-icons/gi";

import { getHeroNameById } from "../../../utils/getHeroByNameId";
import {
  IndividualRecentMatchDetailProps,
  RecentMatchCardProps,
} from "../../../types/interfaces";
import { getMatchDeatils } from "../../../services/api";
import RecentMatchDetailsCard from "./RecentMatchDetailsCard";
import ErrorContainer from "../../../components/ErrorContainer";

const RecentMatchCard: React.FC<RecentMatchCardProps> = ({ match }) => {
  const { heroStats } = useHeroContext();
  const [recentMatchDetails, setRecentMatchDetails] =
    useState<IndividualRecentMatchDetailProps>(
      {} as IndividualRecentMatchDetailProps
    );
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const data = async () => {
      setError(false);
      try {
        const response = await getMatchDeatils(match.match_id.toString());
        setRecentMatchDetails(response);
      } catch (error: unknown) {
        console.error(error);
        setError(true);
      }
    };
    data();
  }, [match]);

  return (
    <>
      {recentMatchDetails && (
        <>
          <div className="flex items-center mb-2">
            <FaCalendarDay className="mr-2 text-yellow-400" />
            <span className="text-gray-300">
              Data: {new Date(match.start_time * 1000).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center mb-2">
            <FaClock className="mr-2 text-yellow-400" />
            <span className="text-gray-300">
              Duração: {Math.floor(match.duration / 60)}m {match.duration % 60}s
            </span>
          </div>
          <div className="flex items-center mb-2">
            <FaIdBadge className="mr-2 text-yellow-400" />
            <span className="text-gray-300">ID do game: {match.match_id}</span>
          </div>
          <div className="flex items-center mb-2">
            <GiSkills className="mr-2 text-yellow-400" />
            <span className="text-secondary text-2xl">
              Herói: {getHeroNameById(match.hero_id, heroStats)}
            </span>
          </div>
          <div className="flex items-center mb-2 text-2xl">
            <GiBroadsword className="mr-2 text-accent" />
            <span className="text-gray-300">{match.kills}</span>{" "}
            <GiSkullCrossedBones className="ml-2 mr-2 text-primary" />
            <span className="text-gray-300">{match.deaths}</span>{" "}
            <FaHandsHelping className="ml-2 mr-2 text-yellow-400" />
            <span className="text-gray-300">{match.assists}</span>
          </div>
          {!isError ? (
            <RecentMatchDetailsCard
              matchDetails={recentMatchDetails}
              radiantWin={match.radiant_win}
            />
          ) : (
            <ErrorContainer
              message={"Erro ao carregar detalhes da partida"}
              showHelperText={false}
            />
          )}
        </>
      )}
    </>
  );
};

export default RecentMatchCard;
