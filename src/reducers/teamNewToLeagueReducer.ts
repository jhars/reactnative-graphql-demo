import { AsyncActionState } from '../actions/asyncAction';
import { 
  CREATE_NEW_TEAM_FOR_LEAGUE, createNewTeamForLeague
 } from '../actions/createNewTeamAction';
import { Team } from '../types';

export type ReduxState = Team;
export const initialState = {};
export type TeamsAction =
  | createNewTeamForLeague;

export function CreateNewTeamsForLeaagueReducer(state: ReduxState = initialState, action: TeamsAction): ReduxState {
  if (action.type === CREATE_NEW_TEAM_FOR_LEAGUE && action.state === AsyncActionState.Succeeded) {
    console.log("===== PAYLOAD =====")
    console.log(action.payload)
    // return action.payload;
    return initialState;
  }

  return state;
}