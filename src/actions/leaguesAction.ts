import { getAllLeagues } from '../services/leaguesService';
import { async, AsyncAction } from './asyncAction';
import { League } from '../types'


export const FETCH_LEAGUES: 'FETCH_LEAGUES' = 'FETCH_LEAGUES';
// export type FetchLeaguesAction = AsyncAction<typeof FETCH_LEAGUES, League[]>;

export function fetchLeaguesAction() {
  return async(FETCH_LEAGUES, getAllLeagues, null);
}



