// import { AsyncActionState } from '../actions/asyncAction';
// import { 
//   FETCH_TEAMS_BY_LEAGUE, fetchTeamsByLeagueAction
//  } from '../actions/teamsByLeagueAction';
// import { Team } from '../types';

// export type ReduxState = Team[];
// export const initialState = [];
// export type TeamsAction =
//   | fetchTeamsByLeagueAction;

// export function TeamsByLeagueReducer(state: ReduxState = initialState, action: TeamsAction): ReduxState {
//   if (action.type === FETCH_TEAMS_BY_LEAGUE && action.state === AsyncActionState.Succeeded) {
//     console.log("===== PAYLOAD - TEAMS BY LEAGUE REDUCER=====")
//     console.log(action.payload)
//     return [...action.payload];
//   }

//   return state;
// }


import { AsyncActionState } from '../actions/asyncAction';
import { 
  FETCH_TEAMS_BY_LEAGUE, fetchTeamsByLeagueAction
 } from '../actions/teamsByLeagueAction';
import { Team } from '../types';

export type ReduxState = Teams;
export const initialState = {};
export type TeamsAction =
  | fetchTeamsByLeagueAction;

export function TeamsByLeagueReducer(state: ReduxState = initialState, action: TeamsAction): ReduxState {
  if (action.type === FETCH_TEAMS_BY_LEAGUE && action.state === AsyncActionState.Succeeded) {
    console.log("===== PAYLOAD - TEAMS BY LEAGUE REDUCER=====")
    console.log(action.payload)
    return [...action.payload];
  }

  return state;
}