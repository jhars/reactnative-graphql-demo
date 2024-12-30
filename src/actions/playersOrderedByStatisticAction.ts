import { getPlayersOrderedByStatistic } from '../services/playerService';
import { async, AsyncAction } from './asyncAction';
import { Player } from '../types'

export type FetchPlayersByStatAction = AsyncAction<typeof FETCH_PLAYERS, Player[]>;
export const FETCH_PLAYERS_BY_STAT: 'FETCH_PLAYERS_BY_STAT' = 'FETCH_PLAYERS_BY_STAT';

export type OrderedStatsArgs = {
  stat: string;
  order: 'ASC' | 'DESC';
}


export function fetchPlayersByStatisticAction(orderedStat: OrderedStatsArgs) {
  return async(FETCH_PLAYERS_BY_STAT, getPlayersOrderedByStatistic, orderedStat);
}
