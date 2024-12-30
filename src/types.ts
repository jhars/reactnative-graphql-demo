export type ById<T> = { [index: string]: T };

export interface Player {
  id: number;
  Jersey: string;
  FirstName: string;
  LastName: string;
  goals: number;
  assists: number;
}

export interface League {
  id: serial;
  title: string;
  memberTeams: serial[];
  leagueOwner: serial;
}

export interface Team {
  id: serial;
  name: string;
  belongsToLeague: serial;
  teamOwner: serial;
  players: number[]
}

export interface Teams {
  [key: string]: Team
}

export interface CurrentUser {
  id: serial;
  email: string;
}