import { addNewTeamsToLeague } from '../services/teamService';
import { async, AsyncAction } from './asyncAction';
import { Player } from '../types'

// export type FetchPlayersByStatAction = AsyncAction<typeof FETCH_PLAYERS, Player[]>;
export const CREATE_NEW_TEAM_FOR_LEAGUE: 'CREATE_NEW_TEAM_FOR_LEAGUE' = 'CREATE_NEW_TEAM_FOR_LEAGUE';

export type NewTeamArgs = {
  userId: string;
  leagueId: string;
  name: string;
}
export function createNewTeamForLeague(args: NewTeamArgs) {
  return async(CREATE_NEW_TEAM_FOR_LEAGUE, addNewTeamsToLeague, args);
}
