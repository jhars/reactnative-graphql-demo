import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ReduxState } from '../reducers';


export enum AsyncActionState {
  Unstarted = 'UNSTARTED',
  Started = 'STARTED',
  Succeeded = 'SUCCEEDED',
  Failed = 'FAILED',
}

export type AsyncAction<T, I, P = any> = {
  type: T;
} & ({
  state: AsyncActionState.Started;
  payload: I;
} | {
  state: AsyncActionState.Succeeded;
  payload: P;
} | {
  state: AsyncActionState.Failed;
  payload: Error;
});

export function startedAsyncAction<T, I = any>(type: T, input: I): AsyncAction<T, I> {
  return {
    type,
    state: AsyncActionState.Started,
    payload: input
  };
}

export function succeededAsyncAction<T, I = any, P = any>(type: T, payload: P): AsyncAction<T, I, P> {
  return {
    type,
    state: AsyncActionState.Succeeded,
    payload,
  };
}

export function failedAsyncAction<T, I>(type: T, error: Error): AsyncAction<T, I> {
  return {
    type,
    state: AsyncActionState.Failed,
    payload: error,
  };
}

export function async<T, I, P = any>(type: T, action: (input: I) => Promise<P>, input: I, onSuccess: ((p: P) => Action) | null = null): ThunkAction<Promise<void>, ReduxState, void, Action | AsyncAction<T, I, P>> {
  return async (dispatch) => {
    console.info(`[INFO] ${type} ${AsyncActionState.Started}`);
    dispatch(startedAsyncAction(type, input));
    try {
      const payload = await action(input);
      console.info(`[INFO] ${type} ${AsyncActionState.Succeeded}`);
      dispatch(succeededAsyncAction<T, I, P>(type, payload));
      if (onSuccess) {
        dispatch(onSuccess(payload));
      }
    } catch (error) {
      console.warn(`[WARN] ${type} ${AsyncActionState.Failed}`, error);
      dispatch(failedAsyncAction<T, I>(type, error));
    }
  };
}
