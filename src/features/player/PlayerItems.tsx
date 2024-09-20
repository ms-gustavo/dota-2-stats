import { PlayerStats } from "../../types/interfaces";
import { getPlayerItems } from "../../utils/getItem";

const PlayerItems = ({ player }: { player: PlayerStats }) => {
  const items = getPlayerItems(player);
  return (
    <div className="flex-col items-center justify-center">
      {items.map((item, index) =>
        item ? (
          <div key={index} className="flex items-center mx-2">
            <span className="text-gray-300 text-xs">{item.name}</span>
          </div>
        ) : null
      )}
    </div>
  );
};

export default PlayerItems;
