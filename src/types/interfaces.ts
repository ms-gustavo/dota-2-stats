export interface CollapsibleContainerProps {
  title: string;
  children: React.ReactNode;
}

export interface ProPlayerType {
  account_id: number;
  steamid: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  profileurl: string;
  personaname: string;
  last_login: string;
  last_match_time: string;
  full_history_time: string;
  cheese: number;
  fh_unavailable: boolean;
  loccountrycode: string;
  name: string;
  country_code: string;
  fantasy_role: number;
  team_id: number;
  team_name: string;
  team_tag: string;
  is_locked: boolean;
  is_pro: boolean;
  locked_until: number;
}

export interface ProPlayersListComponentProps {
  proPlayers: ProPlayerType[];
  proPlayersError: boolean;
}

export interface TeamType {
  team_id: number;
  rating: number;
  logo_url: string;
  wins: number;
  losses: number;
  last_match_time: number;
  name: string;
  tag: string;
}

export interface TeamsListComponentProps {
  teams: TeamType[];
  teamsError: boolean;
}

export interface HeroStatType {
  id: number;
  name: string;
  primary_attr: "str" | "agi" | "int";
  attack_type: "Melee" | "Ranged";
  roles: string[];
  img: string;
  icon: string;
  base_health: number;
  base_health_regen: number;
  base_mana: number;
  base_mana_regen: number;
  base_armor: number;
  base_mr: number;
  base_attack_min: number;
  base_attack_max: number;
  base_str: number;
  base_agi: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
  attack_range: number;
  projectile_speed: number;
  attack_rate: number;
  base_attack_time: number;
  attack_point: number;
  move_speed: number;
  turn_rate: number | null;
  cm_enabled: boolean;
  legs: number;
  day_vision: number;
  night_vision: number;
  localized_name: string;
  "1_pick": number;
  "1_win": number;
  "2_pick": number;
  "2_win": number;
  "3_pick": number;
  "3_win": number;
  "4_pick": number;
  "4_win": number;
  "5_pick": number;
  "5_win": number;
  "6_pick": number;
  "6_win": number;
  "7_pick": number;
  "7_win": number;
  "8_pick": number;
  "8_win": number;
  turbo_picks: number;
  turbo_picks_trend: number[];
  turbo_wins: number;
  turbo_wins_trend: number[];
  pro_pick: number;
  pro_win: number;
  pro_ban: number;
  pub_pick: number;
  pub_pick_trend: number[];
  pub_win: number;
  pub_win_trend: number[];
}

export interface HeroStatListComponentProps {
  heroStats: HeroStatType[];
  heroStatsError: boolean;
}

export interface Player {
  account_id: number;
  hero_id: number;
  team_slot: number;
  team: number;
  name?: string;
  country_code?: string;
  fantasy_role?: number;
  team_id?: number;
  team_name?: string;
  team_tag?: string;
  is_locked?: boolean;
  is_pro?: boolean;
  locked_until?: number | null;
}

export interface MatchDetailsListComponentProps {
  matchDetails: MatchDetails[];
  currentlyOnGoingGamesContextTypeError: boolean;
}

export interface MatchDetails {
  activate_time: number;
  deactivate_time: number;
  server_steam_id: string;
  lobby_id: string;
  league_id: number;
  lobby_type: number;
  game_time: number;
  delay: number;
  spectators: number;
  game_mode: number;
  average_mmr: number;
  match_id: string;
  series_id: number;
  team_name_radiant: string;
  team_name_dire: string;
  team_logo_radiant: string;
  team_logo_dire: string;
  team_id_radiant: number;
  team_id_dire: number;
  sort_score: number;
  last_update_time: number;
  radiant_lead: number;
  radiant_score: number;
  dire_score: number;
  players: Player[];
  building_state: number;
  weekend_tourney_tournament_id: number;
  weekend_tourney_division: number;
  weekend_tourney_skill_level: number;
  weekend_tourney_bracket_round: number;
  custom_game_difficulty: number;
}

export interface SearchPlayerType {
  account_id: number;
  personaname: string;
  avatarfull: string;
  last_match_time: string;
  similarity: number;
}

export interface SearchPlayerResultListComponent {
  searchResults: SearchResultProps[];
}

export interface SearchResultProps {
  account_id: number;
  personaname: string;
  avatarfull: string;
  last_match_time: string;
  similarity: number;
}

export interface PlayerProfile {
  account_id: number;
  personaname: string;
  name: string | null;
  plus: boolean;
  cheese: number;
  steamid: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  profileurl: string;
  last_login: string | null;
  loccountrycode: string;
  status: string | null;
  fh_unavailable: boolean;
  is_contributor: boolean;
  is_subscriber: boolean;
}

export interface PlayerDetails {
  profile: PlayerProfile;
  rank_tier: number;
  leaderboard_rank: number | null;
}

export interface PlayersWL {
  win: number;
  lose: number;
}

export interface PlayerHeroes {
  hero_id: number;
  last_played: number;
  games: number;
  win: number;
  with_games: number;
  with_win: number;
  against_games: number;
  against_win: number;
}

export interface PlayerHeroesRanking {
  hero_id: number;
  score: number;
  percent_rank: number;
  card: number;
}

export interface RecentMatchesProps {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  hero_id: number;
  start_time: number;
  duration: number;
  game_mode: number;
  lobby_type: number;
  version: number | null;
  kills: number;
  deaths: number;
  assists: number;
  average_rank: number;
  xp_per_min: number;
  gold_per_min: number;
  hero_damage: number;
  tower_damage: number;
  hero_healing: number;
  last_hits: number;
  lane: string | null;
  lane_role: string | null;
  is_roaming: boolean | null;
  cluster: number;
  leaver_status: number;
  party_size: number | null;
  hero_variant: number;
}

export interface MatchProps {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  hero_id: number;
  start_time: number;
  duration: number;
  game_mode: number;
  lobby_type: number;
  version: number | null;
  kills: number;
  deaths: number;
  assists: number;
  average_rank: number;
  xp_per_min: number;
  gold_per_min: number;
  hero_damage: number;
  tower_damage: number;
  hero_healing: number;
  last_hits: number;
  lane: string | null;
  lane_role: string | null;
  is_roaming: boolean | null;
  cluster: number;
  leaver_status: number;
  party_size: number | null;
  hero_variant: number;
}

export interface RecentMatchCardProps {
  match: MatchProps;
}

export interface IndividualRecentMatchDetailProps {
  players: PlayerStats[];
  od_data: ODData;
  picks_bans: PickesBansDetails[];
  barracks_status_dire: number;
  barracks_status_radiant: number;
  cluster: number;
  dire_score: number;
  duration: number;
  engine: number;
  first_blood_time: number;
  flags: 1;
  game_mode: number;
  human_players: number;
  leagueid: number;
  lobby_type: number;
  match_id: number;
  match_seq_num: number;
  metadata: never;
  patch: number;
  pre_game_duration: number;
  radiant_score: number;
  radiant_win: boolean;
  region: number;
  replay_salt?: number;
  replay_url?: string;
  series_id?: number;
  series_type?: number;
  start_time: number;
  tower_status_dire: number;
  tower_status_radiant: number;
}

export interface PickesBansDetails {
  hero_id: number;
  is_pick: true;
  order: number;
  team: number;
}

export interface ODData {
  has_api: boolean;
  has_gcdata: boolean;
  has_parsed: boolean;
}

export interface Benchmarks {
  raw: number;
  pct: number;
}

export interface PlayerStats {
  player_slot: number;
  party_id?: number;
  permanent_buffs?: never[];
  party_size?: number;
  account_id: number;
  team_number: number;
  team_slot: number;
  hero_id: number;
  hero_variant: number;
  item_0: number;
  item_1: number;
  item_2: number;
  item_3: number;
  item_4: number;
  item_5: number;
  backpack_0: number;
  backpack_1: number;
  backpack_2: number;
  item_neutral: number;
  kills: number;
  deaths: number;
  assists: number;
  leaver_status: number;
  last_hits: number;
  denies: number;
  gold_per_min: number;
  xp_per_min: number;
  level: number;
  net_worth: number;
  aghanims_scepter: number;
  aghanims_shard: number;
  moonshard: number;
  hero_damage: number;
  tower_damage: number;
  hero_healing: number;
  gold: number;
  gold_spent: number;
  ability_upgrades_arr: number[];
  personaname: string;
  name: string | null;
  last_login: string;
  radiant_win: boolean;
  start_time: number;
  duration: number;
  cluster: number;
  lobby_type: number;
  game_mode: number;
  is_contributor: boolean;
  patch: number;
  region: number;
  isRadiant: boolean;
  win: number;
  lose: number;
  total_gold: number;
  total_xp: number;
  kills_per_min: number;
  kda: number;
  abandons: number;
  rank_tier: number;
  is_subscriber: boolean;
  benchmarks:
    | Benchmarks
    | {
        gold_per_min: Benchmarks;
        xp_per_min: Benchmarks;
        kills_per_min: Benchmarks;
        last_hits_per_min: Benchmarks;
        hero_damage_per_min: Benchmarks;
        hero_healing_per_min: Benchmarks;
        tower_damage: Benchmarks;
      };
}

export interface HeroStatCardProps {
  localized_name: string;
  pub_pick: number;
  pub_win: number;
  pubs_winRate: string;
  pro_pick: number;
  pro_win: number;
  pro_ban: number;
}

export interface MatchDetailProps {
  activate_time: number;
  average_mmr: number;
  match_id: string;
  last_update_time: number;
  radiant_score: number;
  dire_score: number;
  players: Player[];
}

export interface ProPlayerCardProps {
  avatar: string;
  personaname: string;
  team_name: string;
  loccountrycode: string;
  last_login: string;
  last_match_time: string;
  is_locked: boolean;
}

export interface TeamCardProps {
  last_match_time: number;
  logo_url: string;
  name: string;
  tag: string;
  rating: number;
  wins: number;
  losses: number;
}

export interface HeroStatsProps {
  filteredHeroes: FilteredHeroes[];
  filter: string;
  heroStats: HeroStatType[];
}

export interface FilteredHeroes {
  hero_id: number;
  last_played: number;
  games: number;
  win: number;
  with_games: number;
  with_win: number;
  against_games: number;
  against_win: number;
}

export interface MatchDetailsHeaderProps {
  radiantScore: number;
  direScore: number;
  radiantWin: boolean;
}

export interface MatchDetailsCardProps {
  matchDetails: IndividualRecentMatchDetailProps;
  radiantWin: boolean;
}

export interface TeamDetailsProps {
  teamTitle: string;
  team: PlayerStats[];
}

export interface PlayerFilterProps {
  filter: string;
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  searchTerm: string;
  onChange: (value: React.SetStateAction<string>) => void;
}

export interface PlayerInfoCardProps {
  playerDetails: PlayerDetails;
  playerWL: PlayersWL;
}

export interface RecentMatchesListComponentProps {
  recentMatches: RecentMatchesProps[];
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}