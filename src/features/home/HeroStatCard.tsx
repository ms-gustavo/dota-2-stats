import React from "react";

interface HeroStatCardProps {
  localized_name: string;
  pub_pick: number;
  pub_win: number;
  pubs_winRate: string;
  pro_pick: number;
  pro_win: number;
  pro_ban: number;
}

const HeroStatCard: React.FC<HeroStatCardProps> = ({
  localized_name,
  pub_pick,
  pub_win,
  pubs_winRate,
  pro_pick,
  pro_win,
  pro_ban,
}) => {
  return (
    <div className="bg-darkGray border border-gold rounded-lg shadow-lg p-4 flex items-start space-x-4 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex-1">
        <h4 className="text-lg font-bold text-gold mb-2">{localized_name}</h4>
        <div className="text-lightText text-sm space-y-1">
          <p>
            <strong>Picks em Pubs:</strong> {pub_pick}
          </p>
          <p>
            <strong>Vitórias em Pubs:</strong> {pub_win}
          </p>
          <p>
            <strong>Pubs WinRate:</strong>{" "}
            <span
              className={`${
                Number(pubs_winRate) > 50 ? "text-accent" : "text-primary"
              }`}
            >
              {pubs_winRate}%
            </span>
          </p>
          <p>
            <strong>Picks em Pro Games:</strong> {pro_pick}
          </p>
          <p>
            <strong>Vitórias em Pro Games:</strong> {pro_win}
          </p>
          <p>
            <strong>Ban em Pro Games:</strong> {pro_ban}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroStatCard;
