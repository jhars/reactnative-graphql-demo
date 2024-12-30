import { getPlayers } from '../services/playerService';
import { async, AsyncAction } from './asyncAction';
import { Player } from '../types'


export const FETCH_PLAYERS: 'FETCH_PLAYERS' = 'FETCH_PLAYERS';
export type FetchPlayersAction = AsyncAction<typeof FETCH_PLAYERS, Player[]>;

export function fetchPlayersAction() {
  return async(FETCH_PLAYERS, getPlayers, null);
}
