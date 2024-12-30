import { AsyncActionState } from '../actions/asyncAction';
import { 
  FETCH_LEAGUES, fetchLeaguesAction
 } from '../actions/leaguesAction';
import { League } from '../types';


export type ReduxState = League[];
export const initialState = [];
export type LeaguesAction =
  | fetchLeaguesAction;

export function AllLeaguesReducer(state: ReduxState = initialState, action: LeaguesAction): ReduxState {
  if (action.type === FETCH_LEAGUES && action.state === AsyncActionState.Succeeded) {
  	console.log("===== PAYLOAD =====")
    console.log(action.payload)
    return [...action.payload];
  }


  return state;
}


