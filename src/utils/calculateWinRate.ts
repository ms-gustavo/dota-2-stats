export const calculateWinrate = (win: number, lose: number): number => {
  const totalGames = win + lose;
  return totalGames === 0
    ? 0
    : parseFloat(((win / totalGames) * 100).toFixed(2));
};
