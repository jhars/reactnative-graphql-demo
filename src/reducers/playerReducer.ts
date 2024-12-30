import { AsyncActionState } from '../actions/asyncAction';
import { FETCH_PLAYERS, fetchPlayersAction } from '../actions/playerAction';
import { Player } from '../types';


export type ReduxState = Player[];
export const initialState = [];
export type PlayersAction =
  | fetchPlayersAction;

export function PlayerReducer(state: ReduxState = initialState, action: PlayersAction): ReduxState {
  if (action.type === FETCH_PLAYERS && action.state === AsyncActionState.Succeeded) {
    console.log("===== ACTION =====")
    return [...action.payload];
  }

  return state;
}
