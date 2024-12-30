import { AsyncActionState } from '../actions/asyncAction';
import { 
  FETCH_TEAMS_BY_USER, fetchTeamsByUser
 } from '../actions/teamsAction';
import { Team } from '../types';

export type ReduxState = Team[];
export const initialState = [];
export type TeamsAction =
  | fetchTeamsByUserAction;

export function TeamsForUserReducer(state: ReduxState = initialState, action: TeamsAction): ReduxState {
  if (action.type === FETCH_TEAMS_BY_USER && action.state === AsyncActionState.Succeeded) {
    console.log("===== PAYLOAD =====")
    console.log(action.payload)
    return [...action.payload];
  }

  return state;
}