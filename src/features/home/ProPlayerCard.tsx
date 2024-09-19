import React from "react";
import { FaCalendarAlt, FaGlobe, FaUser } from "react-icons/fa";

interface ProPlayerCardProps {
  avatar: string;
  personaname: string;
  team_name: string;
  loccountrycode: string;
  last_login: string;
  last_match_time: string;
  is_locked: boolean;
}

const ProPlayerCard: React.FC<ProPlayerCardProps> = ({
  avatar,
  personaname,
  team_name,
  loccountrycode,
  last_login,
  last_match_time,
  is_locked,
}) => {
  return (
    <div className="bg-darkGray border border-gold p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
      <img
        className="w-16 h-16 rounded-full mr-4"
        src={avatar}
        alt={`${personaname}'s avatar`}
      />
      <div>
        <h3 className="text-xl font-semibold flex items-center text-gold">
          <FaUser className="mr-2" />
          {personaname}
        </h3>
        {is_locked && <p className="text-primary">Perfil privado</p>}
        <p className="text-lightText">
          {team_name ? `Time: ${team_name}` : "No Team"}
        </p>
        <p className="text-lightText flex items-center">
          <FaGlobe className="mr-2" />
          País: {loccountrycode || "Unknown"}
        </p>
        <p className="text-lightText text-sm flex items-center">
          <FaCalendarAlt className="mr-2" />
          Último login:{" "}
          {last_login
            ? new Date(last_login).toLocaleDateString()
            : "Indisponível"}
        </p>
        <p className="text-lightText text-sm flex items-center">
          <FaCalendarAlt className="mr-2" />
          Último game: {new Date(last_match_time).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProPlayerCard;
