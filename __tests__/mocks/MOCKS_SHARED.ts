import {CurrentUser, Player, Position, Statistics, StatLine, Team, Roster} from '../../src/data/types';

const MOCK_STATLINE_SEASON: StatLine = {
	points: 23
}

const MOCK_STATISTICS: Statistics = {
	statLineLastSeason: MOCK_STATLINE_SEASON
}

export const MOCK_PLAYER: Player = {
	id: "216",
	firstName: "Happy",
	lastName: "Gilmore",
	statistics: MOCK_STATISTICS,
	position: Position.G
}

export const MOCK_PLAYER_DEFENSE1: Player = {
	id: "3001",
	firstName: "Defense",
	lastName: "One",
	statistics: MOCK_STATISTICS,
	position: Position.D
}

export const MOCK_PLAYER_DEFENSE2: Player = {
	id: "3002",
	firstName: "Defeense",
	lastName: "Two",
	statistics: MOCK_STATISTICS,
	position: Position.D
}

export const MOCK_PLAYER_LSM: Player = {
	id: "555",
	firstName: "Long",
	lastName: "Pole",
	statistics: MOCK_STATISTICS,
	position: Position.LSM
}

export const MOCK_PLAYER_SSDM: Player = {
	id: "667",
	firstName: "Shortie",
	lastName: "McStickens",
	statistics: MOCK_STATISTICS,
	position: Position.SSDM
}

export const MOCK_PLAYER_FOGO: Player = {
	id: "867",
	firstName: "FaceOff",
	lastName: "GetOff",
	statistics: MOCK_STATISTICS,
	position: Position.FO
}

export const MOCK_PLAYER_MIDFIELD1: Player = {
	id: "1001",
	firstName: "Midfield",
	lastName: "One",
	statistics: MOCK_STATISTICS,
	position: Position.M
}

export const MOCK_PLAYER_MIDFIELD2: Player = {
	id: "1002",
	firstName: "Midfield",
	lastName: "Two",
	statistics: MOCK_STATISTICS,
	position: Position.M
}

export const MOCK_PLAYER_ATTACK1: Player = {
	id: "217",
	firstName: "Shooter",
	lastName: "McGavin",
	statistics: MOCK_STATISTICS,
	position: Position.A
}

export const MOCK_PLAYER_ATTACK2: Player = {
	id: "2000",
	firstName: "Attack",
	lastName: "Two",
	statistics: MOCK_STATISTICS,
	position: Position.A
}

const MOCK_LEAGUE: League = {
  id: "2",
  title: "MACH TWO LEAGUE"
}

export const MOCK_TEAM: Team = {
	id: "12",
	name: "MOCKAVELIONS",
	league: MOCK_LEAGUE
}

export const MOCK_ROSTER: Roster = {
	id: "MOCK-RSTR-MOCK-RSTR",
	teamId: 12,
	teamInfo: MOCK_TEAM,
	goalie: MOCK_PLAYER,
	defense1: MOCK_PLAYER_DEFENSE1,
	defense2: MOCK_PLAYER_DEFENSE2,
	lsm: MOCK_PLAYER_LSM,
	ssdm: MOCK_PLAYER_SSDM,
	fo: MOCK_PLAYER_FOGO,
	midfield1: MOCK_PLAYER_MIDFIELD1,
	midfield2: MOCK_PLAYER_MIDFIELD2,
	attack1: MOCK_PLAYER_ATTACK1,
	attack2: MOCK_PLAYER_ATTACK2
}

export const MOCK_CURRENT_USER: CurrentUser = {
  id: "CRNT-USER-CRNT-USR",
  email: "current@User.edu",
  preferred_username: "CurrentUser"
}

// JH-NOTE: unused
// const MOCK_QUERY_01 = {
//   request: {
//     query: GET_SORTED_PLAYERS,
//     variables: {
//     	"orderBy":{
//     		"field":"points",
//     		"order":"DESC"
//     },
//     "availableForLeagueId":null,
//   	"position":null
//     }
//   },
//   result: {
//     data: MOCK_ALLPLAYERS_RESPONSE
//   },
// };
