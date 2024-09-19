import { TeamCardProps } from "../../types/interfaces";
import { timeAgo } from "../../utils/timeAgo";
import { FaTrophy, FaChartLine, FaChartBar } from "react-icons/fa";

const TeamCard: React.FC<TeamCardProps> = ({
  last_match_time,
  logo_url,
  losses,
  name,
  rating,
  tag,
  wins,
}) => {
  return (
    <div className="bg-darkGray border border-gold p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
      <img
        className="w-16 h-16 rounded-full mr-4"
        src={logo_url}
        alt={`${name}'s avatar`}
      />
      <div>
        <h3 className="text-xl font-semibold text-gold">{name}</h3>

        <p className="text-sm text-lightText">Tag: {tag}</p>
        <p className="text-sm text-lightText flex items-center">
          <FaTrophy className="mr-2" />
          Pontuação: {rating.toFixed(2)}
        </p>
        <p className="text-sm text-green-600 flex items-center">
          <FaChartLine className="mr-2" />
          Vitórias: {wins}
        </p>
        <p className="text-sm text-red-600 flex items-center">
          <FaChartBar className="mr-2" />
          Derrotas: {losses}
        </p>
      </div>
      <p className="text-sm text-lightText">
        Último game: {timeAgo(last_match_time)}
      </p>
    </div>
  );
};

export default TeamCard;
