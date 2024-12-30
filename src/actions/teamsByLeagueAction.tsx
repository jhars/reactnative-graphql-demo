import { getTeamsByLeague } from '../services/teamService';
import { async, AsyncAction } from './asyncAction';
import { Teams } from '../types'

export type FetchTeamsByLeagueAction = AsyncAction<typeof FETCH_TEAMS_BY_LEAGUE, Teams>;
export const FETCH_TEAMS_BY_LEAGUE: 'FETCH_TEAMS_BY_LEAGUE' = 'FETCH_TEAMS_BY_LEAGUE';

export function fetchTeamsByLeagueAction(leagueId: string) {
  return async(FETCH_TEAMS_BY_LEAGUE, getTeamsByLeague, leagueId);
}
