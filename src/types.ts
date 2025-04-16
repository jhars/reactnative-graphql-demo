export type ById<T> = { [index: string]: T };

interface StatLine {
  points: number;
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

// export interface Player {
//   id: number;
//   Jersey: string;
//   FirstName: string;
//   LastName: string;
//   goals: number;
//   assists: number;
// }

// interface League {
//   id: serial;
//   title: string;
//   memberTeams: serial[];
//   leagueOwner: serial;
// }

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

// export interface Team {
//   id: serial;
//   name: string;
//   belongsToLeague: serial;
//   teamOwner: serial;
//   players: number[]
// }

// JH-NOTE: Add Roster Fetching Fields Here
export interface Team {
  id: serial;
  name: string;
}

// export interface Teams {
//   [key: string]: Team
// }
//JH-NOTE: this naming convention is confusing

interface TeamData {
  teams: Team[]
}

export interface Teams {
  data: TeamData
}

export interface RosterForTeamVars {
  teamsId: number;
}

//============================
//============================
export interface CurrentUser {
  id: serial;
  email: string;
}