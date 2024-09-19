import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getPlayerHeroes,
  getPlayerRecentMatches,
  getPlayerWL,
  searchPlayerById,
} from "../../services/api";
import {
  PlayerDetails,
  PlayerHeroes,
  PlayersWL,
  RecentMatchesProps,
} from "../../types/interfaces";
import { getHeroNameById } from "../../utils/getHeroByNameId";
import { useHeroContext } from "../../hooks/useHeroContext";
import PlayerInfoCard from "./PlayerInfoCard";
import RecentMatchesListComponent from "../../components/PlayerComponents/RecentMatchesListComponent";
import CollapsibleContainer from "../../components/CollapsibleContainer";
import Loader from "../../components/Loader";
import PlayerInfoNavbar from "../../components/PlayerInfoNavbar";
import PlayerFilter from "./PlayerFilter";
import HeroStats from "./HeroStats/HeroStats";
import ErrorPage from "../../components/ErrorPage";

const PlayerDetailsPage: React.FC = () => {
  const { heroStats } = useHeroContext();
  const { accountId } = useParams<{ accountId: string }>();
  const [playerDetails, setPlayerDetails] = useState<PlayerDetails | null>(
    null
  );
  const [playerWL, setPlayerWL] = useState<PlayersWL | null>(null);
  const [recentMatches, setRecentMatches] = useState<
    RecentMatchesProps[] | null
  >(null);
  const [playerHeroes, setPlayerHeroes] = useState<PlayerHeroes[] | null>(null);
  const [filter, setFilter] = useState<string>("winrate");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function loadPlayerDetails() {
      if (accountId) {
        setIsLoading(true);
        try {
          const [details, wl, matches, heroes] = await Promise.all([
            searchPlayerById(accountId),
            getPlayerWL(accountId),
            getPlayerRecentMatches(accountId),
            getPlayerHeroes(accountId),
          ]);
          setPlayerDetails(details);
          setPlayerWL(wl);
          setRecentMatches(matches);
          setPlayerHeroes(heroes);
        } catch (error: unknown) {
          console.error("Error loading player details", error);
          setError(true);
        } finally {
          setIsLoading(false);
        }
      }
    }

    loadPlayerDetails();
  }, [accountId]);

  if (isLoading) {
    return <Loader message="Carregando detalhes de jogador..." />;
  }

  if (error) {
    return <ErrorPage message="Erro" />;
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const filteredHeroes = playerHeroes
    ? playerHeroes.filter((hero) =>
        getHeroNameById(hero.hero_id, heroStats)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto p-6 bg-background text-lightText">
      <PlayerInfoNavbar />
      {playerWL && playerDetails && (
        <div id="playerInfoCard">
          <PlayerInfoCard playerDetails={playerDetails} playerWL={playerWL} />
        </div>
      )}
      <div className="mt-8">
        <h2 className="text-2xl hidden lg:block font-bold text-primary mb-4">
          5 últimos jogos
        </h2>
        {recentMatches && recentMatches.length > 0 ? (
          <div id="recentMatches">
            <CollapsibleContainer title="5 Últimos jogos">
              <RecentMatchesListComponent recentMatches={recentMatches} />
            </CollapsibleContainer>
          </div>
        ) : (
          <p className="text-lightText">Não há jogos disponíveis</p>
        )}
      </div>
      <div id="heroStats" className="mt-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Estatísticas dos heróis
        </h2>

        <PlayerFilter
          filter={filter}
          handleFilterChange={handleFilterChange}
          searchTerm={searchTerm}
          onChange={setSearchTerm}
        />

        {filteredHeroes && filteredHeroes.length > 0 ? (
          <HeroStats
            filteredHeroes={filteredHeroes}
            filter={filter}
            heroStats={heroStats}
          />
        ) : (
          <p className="text-lightText">Não há estatísticas disponíveis</p>
        )}
      </div>
    </div>
  );
};

export default PlayerDetailsPage;
