import { AsyncActionState } from '../actions/asyncAction';
import { CURRENT_USER, currentUserAction } from '../actions/currentUserAction';
import { CurrentUser } from '../types';


export type ReduxState = CurrentUser;
export const initialState = []; //JH: do we nend this?
export type CurrentUserAction =
  | currentUserAction;

export function CurrentUserReducer(state: ReduxState = initialState, action: CurrentUserAction): ReduxState {
  if (action.type === CURRENT_USER && action.state === AsyncActionState.Succeeded) {
  	console.log("===== ACTION =====")
    console.log(action)

    const {email, id } = action.payload;

    console.log("=================")
    return action.payload;
  }

  return state;
}
