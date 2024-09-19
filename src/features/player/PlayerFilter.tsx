import React from "react";
import { PlayerFilterProps } from "../../types/interfaces";

const PlayerFilter: React.FC<PlayerFilterProps> = ({
  filter,
  handleFilterChange,
  searchTerm,
  onChange: setSearchTerm,
}) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2">
          Filtrar por:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-lg text-primary"
        >
          <option value="winrate">Winrate</option>
          <option value="games">Total de jogos</option>
          <option value="win">Vitórias</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Procurar herói..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-lg w-full text-primary"
      />
    </>
  );
};

export default PlayerFilter;
