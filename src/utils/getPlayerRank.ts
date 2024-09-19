export function getRankName(rank_tier: number): string {
  const rankNames = [
    "Herald",
    "Guardian",
    "Crusader",
    "Archon",
    "Legend",
    "Ancient",
    "Divine",
    "Immortal",
  ];

  const rankGroup = Math.floor(rank_tier / 10);

  if (rank_tier === 80) {
    return "Immortal";
  }

  const rankName = rankNames[rankGroup - 1];
  return rankName;
}

export function getRankStars(rank_tier: number): number {
  if (rank_tier === 80) {
    return 0;
  }

  const star = rank_tier % 10;
  return star;
}
