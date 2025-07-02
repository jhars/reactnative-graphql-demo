export type ById<T> = { [index: string]: T };

export interface DropPlayerRequestObject {
  leagueId: number;
  playerId: number;
  rosterSpot: RosterSpot;
  rosterId: string;
  playerInfo: Player;
}

export interface SelectDropPlayerObject {
  leagueId: number;
  playerId: number;
  rosterSpot: RosterSpot;
  rosterId: string;
  playerInfo: Player;
}

export enum SortColumnName {
  Name = "Name",
  Points = "Points",
  Position = "Position",
}

export enum Position {
  G = "G",
  D = "D",
  LSM = "LSM",
  SSDM = "SSDM",
  FO = "FO",
  M = "M",
  A = "A",
}

export enum RosterSpot {
  GOALIE = "GOALIE",
  DEFENSE1 = "DEFENSE1",
  DEFENSE2 = "DEFENSE2",
  LSM = "LSM",
  SSDM = "SSDM",
  FO = "FO",
  MIDFIELD1 = "MIDFIELD1",
  MIDFIELD2 = "MIDFIELD2",
  ATTACK1 = "ATTACK1",
  ATTACK2 = "ATTACK2",
  BENCH1 = "BENCH1",
  BENCH2 = "BENCH2",
  BENCH3 = "BENCH3",
  BENCH4 = "BENCH4",
}

interface StatLine {
  points: number;
  goals: number;
  assists: number;
  turnovers: number;
  groundBalls: number;
  faceoffsWon: number;
  saves: number;
}

interface Statistics {
  statLineLastSeason: StatLine;
}

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  statistics: Statistics;
  position: Position;
}

export interface PlayerData {
  players: Player[];
}

export interface Players {
  data: PlayerData;
}

export interface League {
  id: string;
  title: string;
  teams: Team[];
}

export interface LeaguesData {
  leagues: League[];
}

// interface Leagues {
//   data: LeaguesData;
// }

export interface Team {
  id: string;
  name: string;
  league: League;
}

export interface TeamsData {
  teams: Team[];
}

// interface Teams {
//   data: TeamsData;
// }

export interface Roster {
  id: string;
  teamId: number;
  teamInfo: Team;
  goalie: Player;
  defense1: Player;
  defense2: Player;
  lsm: Player;
  ssdm: Player;
  fo: Player;
  midfield1: Player;
  midfield2: Player;
  attack1: Player;
  attack2: Player;
}

export interface RosterData {
  roster: Roster;
}

interface AddPlayerToTeamRosterData {
  addPlayerToTeamRoster: Roster;
}

export interface AddPlayerToTeamRosterMutationResponse {
  data: AddPlayerToTeamRosterData;
}

//============================
//============================
export interface CurrentUser {
  id: string;
  email: string;
  preferred_username: string;
}
