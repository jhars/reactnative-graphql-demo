import { AsyncActionState } from '../actions/asyncAction';
import { FETCH_PLAYERS_BY_STAT, fetchPlayersByStatisticAction } from '../actions/playersOrderedByStatisticAction';
import { Player } from '../types';


export type ReduxState = Player[];
export const initialState = [];
export type PlayersByStatAction =
  | fetchPlayersByStatisticAction;

export function PlayersByStatReducer(state: ReduxState = initialState, action: PlayersByStatAction): ReduxState {
  if (action.type === FETCH_PLAYERS_BY_STAT && action.state === AsyncActionState.Succeeded) {
  	console.log("===== ACTION =====")
  	console.log(action)
    return [...action.payload];
  }

  return state;
}
