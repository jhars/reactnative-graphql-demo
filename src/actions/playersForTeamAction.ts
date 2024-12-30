import { getPlayersForTeam } from '../services/playerService';
import { async, AsyncAction } from './asyncAction';
import { Player } from '../types'


export const FETCH_PLAYERS_FOR_TEAM: 'FETCH_PLAYERS_FOR_TEAM' = 'FETCH_PLAYERS_FOR_TEAM';

export function fetchPlayersForTeamAction(teamId: string) {
  return async(FETCH_PLAYERS_FOR_TEAM, getPlayersForTeam, teamId);
}
