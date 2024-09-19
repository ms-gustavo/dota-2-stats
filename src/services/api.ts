import axios from "axios";

const API_BASE_URL = "https://api.opendota.com/api";

export const fetchProPlayers = async () => {
  const response = await axios.get(`${API_BASE_URL}/proPlayers`);
  return response.data;
};

export const fetchTeams = async () => {
  const response = await axios.get(`${API_BASE_URL}/teams`);
  return response.data;
};

export const fetchHeroStats = async () => {
  const response = await axios.get(`${API_BASE_URL}/heroStats`);
  return response.data;
};

export const fetchCurrentlyOnGoingGames = async () => {
  const response = await axios.get(`${API_BASE_URL}/live`);
  return response.data;
};

export const searchPlayerByName = async (playerName: string) => {
  const response = await axios.get(`${API_BASE_URL}/search?q=${playerName}`);
  return response.data;
};

export const searchPlayerById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/players/${id}`);
  return response.data;
};

export const getPlayerWL = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/players/${id}/wl`);
  return response.data;
};

export const getPlayerRecentMatches = async (id: string) => {
  const response = await axios.get(
    `${API_BASE_URL}/players/${id}/recentMatches`
  );
  return response.data;
};

export const getPlayerHeroes = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/players/${id}/heroes`);
  return response.data;
};

export const getPlayerHeroesRakings = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/players/${id}/rankings`);
  return response.data;
};

export const getMatchDeatils = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/matches/${id}`);
  return response.data;
};
