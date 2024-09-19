import React from "react";
import { SearchResultProps } from "../../types/interfaces";
import { useNavigate } from "react-router-dom";

const SearchPlayerCard: React.FC<SearchResultProps> = ({
  account_id,
  personaname,
  avatarfull,
  last_match_time,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/player/${account_id}`);
  };

  return (
    <div
      key={account_id}
      className="bg-darkGray border border-gold p-4 rounded-lg cursor-pointer"
      onClick={handleCardClick}
    >
      <h2 className="text-lg font-bold">{personaname}</h2>
      <img
        className="w-16 h-16 rounded-full mr-4"
        src={avatarfull}
        alt={`${personaname}'s avatar`}
      />
      <p>ID: {account_id}</p>
      {last_match_time && (
        <p>
          Último game:{" "}
          {new Date(
            new Date(last_match_time).getTime() + -3 * 60 * 60 * 1000
          ).toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default SearchPlayerCard;
