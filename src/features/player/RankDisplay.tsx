import React from "react";
import { FaStar } from "react-icons/fa";
import { getRankName, getRankStars } from "../../utils/getPlayerRank";

const RankDisplay: React.FC<{ rank_tier: number }> = ({ rank_tier }) => {
  const rankName = getRankName(rank_tier);
  const stars = getRankStars(rank_tier);

  return (
    <div className="flex flex-col items-start">
      <p className="text-lightText text-lg font-bold">{rankName}</p>

      <div className="flex">
        {[...Array(stars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 text-xl" />
        ))}
      </div>
    </div>
  );
};

export default RankDisplay;
