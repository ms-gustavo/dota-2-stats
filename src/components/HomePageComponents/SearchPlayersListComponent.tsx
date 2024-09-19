import React from "react";
import { SearchPlayerResultListComponent } from "../../types/interfaces";
import SearchPlayerCard from "../../features/home/SearchPlayerCard";

const SearchPlayerListComponent: React.FC<SearchPlayerResultListComponent> = ({
  searchResults,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((player) => (
          <SearchPlayerCard
            key={player.account_id}
            account_id={player.account_id}
            personaname={player.personaname}
            avatarfull={player.avatarfull}
            last_match_time={player.last_match_time}
            similarity={player.similarity}
          />
        ))}
      </div>
    </>
  );
};

export default SearchPlayerListComponent;
