export type ById<T> = { [index: string]: T };

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

interface Player {
  id: string;
  firstName: string;
  lastName: string;
  jersey: number;
  statistics: Statistics;
}

interface PlayerData {
  players: Player[];
}

export interface Players {
  data: PlayerData;
}

interface League {
  id: serial;
  title: string;
  teams: Team[];
}

interface LeagueData {
  leagues: League[];
}

interface Leagues {
  data: LeagueData;
}

export interface Team {
  id: string;
  name: string;
}

interface TeamData {
  teams: Team[]
}

export interface Teams {
  data: TeamData
}

export interface Roster {
  teamId: number;
  goalie: Player;
  defense1: Player;
  defense2: Player;
  lsm: Player;
  fo: Player;
  midfield1: Player;
  midfield2: Player;
  attack1: Player;
  attack2: Player;
}

interface RosterData {
  roster: Roster;
}

export interface Roster {
  data: RosterData;
}

//============================
//============================
export interface CurrentUser {
  id: serial;
  email: string;
}