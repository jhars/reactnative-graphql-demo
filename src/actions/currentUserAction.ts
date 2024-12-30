import { getCurrentUser } from '../services/userSessionService';
import { async, AsyncAction } from './asyncAction';
import { CurrentUser } from '../types'


export const CURRENT_USER: 'CURRENT_USER' = 'CURRENT_USER';
export type CurrentUserAction = AsyncAction<typeof CURRENT_USER, CurrentUser>;

export function currentUserAction() {
  return async(CURRENT_USER, getCurrentUser, null);
}