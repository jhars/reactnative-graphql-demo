import { AsyncActionState } from '../actions/asyncAction';
import { FETCH_PLAYERS_FOR_TEAM, fetchPlayersForTeamAction } from '../actions/playersForTeamAction';
import { Player } from '../types';


export type ReduxState = Player[];
export const initialState = [];
export type PlayersAction =
  | fetchPlayersForTeamAction;

export function PlayersForTeamReducer(state: ReduxState = initialState, action: PlayersAction): ReduxState {
  if (action.type === FETCH_PLAYERS_FOR_TEAM && action.state === AsyncActionState.Succeeded) {
    console.log("===== ACTION =====")
    return [...action.payload];
  }

  return state;
}
