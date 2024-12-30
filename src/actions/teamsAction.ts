import { getTeamsByUser } from '../services/teamService';
import { async, AsyncAction } from './asyncAction';
import { League } from '../types'

export const FETCH_TEAMS_BY_USER: 'FETCH_TEAMS_BY_USER' = 'FETCH_TEAMS_BY_USER';

export function fetchTeamsByUserAction(userId: string) {
  return async(FETCH_TEAMS_BY_USER, getTeamsByUser, userId);
}