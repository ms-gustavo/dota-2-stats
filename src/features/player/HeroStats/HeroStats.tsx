import React from "react";
import { getHeroNameById } from "../../../utils/getHeroByNameId";
import { calculateWinrate } from "../../../utils/calculateWinRate";
import { HeroStatType } from "../../../types/interfaces";

interface HeroStatsProps {
  filteredHeroes: FilteredHeroes[];
  filter: string;
  heroStats: HeroStatType[];
}

interface FilteredHeroes {
  hero_id: number;
  last_played: number;
  games: number;
  win: number;
  with_games: number;
  with_win: number;
  against_games: number;
  against_win: number;
}

const HeroStats: React.FC<HeroStatsProps> = ({
  filteredHeroes,
  filter,
  heroStats,
}) => {
  const sortedPlayerHeroes = filteredHeroes.sort((a, b) => {
    switch (filter) {
      case "winrate":
        return (
          calculateWinrate(b.win, b.games - b.win) -
          calculateWinrate(a.win, a.games - a.win)
        );
      case "games":
        return b.games - a.games;
      case "win":
        return b.win - a.win;
      case "name":
        return getHeroNameById(a.hero_id, heroStats).localeCompare(
          getHeroNameById(b.hero_id, heroStats)
        );
      default:
        return 0;
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedPlayerHeroes.slice(0, 9).map((hero) => {
        const winrate = calculateWinrate(hero.win, hero.games - hero.win);
        return (
          <div
            key={hero.hero_id}
            className="bg-darkGray p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-bold text-gold mb-2">
              {getHeroNameById(hero.hero_id, heroStats)}
            </h3>
            <p className="text-lightText text-lg">
              Total de jogos: {hero.games}
            </p>
            <p className="text-lightText text-lg">Vitórias: {hero.win}</p>
            <p
              className={`${
                winrate > 50 ? "text-accent" : "text-primary"
              } text-lg`}
            >
              Winrate: {winrate}%
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HeroStats;
