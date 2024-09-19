import React from "react";

interface MatchDetailsHeaderProps {
  radiantScore: number;
  direScore: number;
  radiantWin: boolean;
}

const MatchDetailsHeader: React.FC<MatchDetailsHeaderProps> = ({
  radiantScore,
  direScore,
  radiantWin,
}) => {
  return (
    <>
      <h3 className="text-2xl font-bold text-center text-white mb-4">
        Detalhes do Game
      </h3>
      <div
        className={`text-center text-xl mb-4 ${
          radiantWin ? "text-accent" : "text-primary"
        }`}
      >
        {radiantWin ? "Vitória dos Iluminados" : "Vitória dos Temidos"}
      </div>

      <div className="flex justify-between text-center text-gray-300 mb-4">
        <div>
          <span className="font-bold text-green-500">Iluminados: </span>
          {radiantScore}
        </div>
        <div>
          <span className="font-bold text-red-500">Temidos: </span>
          {direScore}
        </div>
      </div>
    </>
  );
};

export default MatchDetailsHeader;
