import { HeroStatType, PlayerHeroes } from "../types/interfaces";

export const getHeroNameById = (
  heroId: number,
  heroStats: HeroStatType[] | PlayerHeroes[]
): string => {
  const hero = heroStats.find((stat) => "id" in stat && stat.id === heroId);
  return hero && "localized_name" in hero
    ? hero.localized_name
    : "Unknown Hero";
};
