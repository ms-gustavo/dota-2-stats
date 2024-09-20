import items from "dotaconstants/build/items.json";
import { ItemProps, PlayerStats } from "../types/interfaces";

const getItemById = (itemId: number): ItemProps | undefined => {
  const itemArray: ItemProps[] = Object.values(items) as ItemProps[];

  return itemArray.find((item) => item.id === itemId);
};

export const getPlayerItems = (player: PlayerStats) => {
  console.log(items);
  const playerItems = [
    getItemById(player.item_0),
    getItemById(player.item_1),
    getItemById(player.item_2),
    getItemById(player.item_3),
    getItemById(player.item_4),
    getItemById(player.item_5),
  ];
  console.log(playerItems);
  return playerItems.map((item) => {
    if (item && "dname" in item) {
      return { name: item.dname, img: item.img };
    }
    return null;
  });
};
