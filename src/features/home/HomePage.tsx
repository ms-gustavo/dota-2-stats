import React, { useEffect, useState } from "react";
import { useHeroContext } from "../../hooks/useHeroContext";
import { useProPlayerContext } from "../../hooks/useProPlayerContext";
import { useTeamsContext } from "../../hooks/useTeamsContext";
import { useCurrentlyOnGoingGamesContext } from "../../hooks/useCurrentlyOnGoingGamesContext";
import { searchPlayerByName } from "../../services/api";
import { useDebounce } from "../../hooks/useDebounce";
import { SearchPlayerType } from "../../types/interfaces";
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";
import CollapsibleContainer from "../../components/CollapsibleContainer";
import ProPlayersListComponent from "../../components/HomePageComponents/ProPlayersListComponent";
import TeamsListComponent from "../../components/HomePageComponents/TeamListComponent";
import HeroStatListComponent from "../../components/HomePageComponents/HeroStatsListComponent";
import MatchDeatilListComponent from "../../components/HomePageComponents/MatchDetailsListComponent";
import SearchPlayerListComponent from "../../components/HomePageComponents/SearchPlayersListComponent";

const HomePage: React.FC = () => {
  const { heroStats, heroStatsError } = useHeroContext();
  const { proPlayers, proPlayersError } = useProPlayerContext();
  const { teams, teamsError } = useTeamsContext();
  const { currentlyOnGoingGames, currentlyOnGoingGamesContextTypeError } =
    useCurrentlyOnGoingGamesContext();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchPlayerType[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      setIsError(false);
      searchPlayerByName(debouncedSearchTerm)
        .then((results) => {
          setSearchResults(results);
          setIsSearching(false);
        })
        .catch((error) => {
          setIsError(true);
          console.error(`Failed to fetch search results: ${error.message}`);
        });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="container mx-auto p-4 bg-background text-lightText">
      <Navbar />
      <h1 className="text-3xl font-cinzel font-bold mb-4 text-primary">
        Bem vindo ao DotA 2 Stats
      </h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Procurar por players..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full border rounded-lg text-primary"
        />
      </div>
      {isSearching && !isError ? (
        <Loader message="Carregando" />
      ) : searchResults.length > 0 ? (
        <SearchPlayerListComponent searchResults={searchResults} />
      ) : (
        <div className="lg:flex">
          <div className="lg:w-2/3">
            <div id="currentlyOngoingGames" className="p-2 lg:pt-20">
              <CollapsibleContainer title="Games ao vivo">
                <MatchDeatilListComponent
                  currentlyOnGoingGamesContextTypeError={
                    currentlyOnGoingGamesContextTypeError
                  }
                  matchDetails={currentlyOnGoingGames}
                />
              </CollapsibleContainer>
            </div>
            <div id="proPlayers" className="p-2 lg:pt-20">
              <CollapsibleContainer title="Top 10 Pro Players">
                <ProPlayersListComponent
                  proPlayers={proPlayers}
                  proPlayersError={proPlayersError}
                />
              </CollapsibleContainer>
            </div>
            <div id="teams" className="p-2 lg:pt-20">
              <CollapsibleContainer title="Top 10 Pro Times">
                <TeamsListComponent teams={teams} teamsError={teamsError} />
              </CollapsibleContainer>
            </div>
          </div>
          <div id="heroStats" className="lg:w-1/3 lg:pt-20">
            <CollapsibleContainer title="Estatísticas dos Heróis">
              <HeroStatListComponent
                heroStats={heroStats}
                heroStatsError={heroStatsError}
              />
            </CollapsibleContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
