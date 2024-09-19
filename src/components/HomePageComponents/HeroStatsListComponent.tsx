import React, { useState } from "react";
import Card from "./../Card";
import HeroStatCard from "../../features/home/HeroStatCard";
import { HeroStatListComponentProps } from "../../types/interfaces";
import { useDebounce } from "../../hooks/useDebounce";
import ErrorContainer from "../ErrorContainer";

const HeroStatListComponent: React.FC<HeroStatListComponentProps> = ({
  heroStats,
  heroStatsError,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredHeroStats = heroStats.filter((hero) =>
    hero.localized_name
      .toLowerCase()
      .includes(debouncedSearchTerm.toLowerCase())
  );

  const sortedHeroStats = [...filteredHeroStats].sort((a, b) => {
    let aValue: number | string = 0;
    let bValue: number | string = 0;

    switch (sortBy) {
      case "pub_pick":
        aValue = a.pub_pick;
        bValue = b.pub_pick;
        break;
      case "pub_win":
        aValue = a.pub_win;
        bValue = b.pub_win;
        break;
      case "winrate":
        aValue = ((a.pub_win + a.pro_win) / (a.pub_pick + a.pro_pick)) * 100;
        bValue = ((b.pub_win + b.pro_win) / (b.pub_pick + b.pro_pick)) * 100;
        break;
      case "name":
        aValue = a.localized_name.toLowerCase();
        bValue = b.localized_name.toLowerCase();
        break;
      default:
        break;
    }

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <Card title="Estatísticas dos Heróis" className="relative">
      {heroStatsError ? (
        <ErrorContainer message="Erro ao carregar estatísticas de heróis" />
      ) : (
        <>
          <input
            type="text"
            placeholder="Procurar por herói"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-lg w-full text-primary"
          />
          <div className="mb-4">
            <label className="mr-2">Filtrar por:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg text-primary"
            >
              <option value="name">Nome</option>
              <option value="pub_pick">Picks em Pubs</option>
              <option value="pub_win">Vitórias em Pubs</option>
              <option value="winrate">Winrate</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="ml-2 p-2 border border-gray-300 rounded-lg"
            >
              {sortOrder === "asc" ? "Crescente" : "Decrescente"}
            </button>
          </div>
          <div className="overflow-auto max-h-[100vh]">
            <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {sortedHeroStats.map((heroStat) => {
                const pubsWinrate = (
                  ((heroStat.pub_win + heroStat.pro_win) /
                    (heroStat.pub_pick + heroStat.pro_pick)) *
                  100
                ).toFixed(2);

                return (
                  <HeroStatCard
                    key={heroStat.id}
                    localized_name={heroStat.localized_name}
                    pub_pick={heroStat.pub_pick}
                    pub_win={heroStat.pub_win}
                    pubs_winRate={pubsWinrate}
                    pro_pick={heroStat.pro_pick}
                    pro_win={heroStat.pro_win}
                    pro_ban={heroStat.pro_ban}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default HeroStatListComponent;
