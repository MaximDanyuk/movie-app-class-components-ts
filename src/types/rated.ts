/*eslint-disable */
export interface IInitialState {
  rated: any[];
  ratedLoading: boolean;
  error: string | null;
}

export enum ActionEnum {
  SET_RATED_MOVIES = 'SET_RATED_MOVIES',
  SET_RATED_MOVIES_SUCCESS = 'SET_RATED_MOVIES_SUCCESS',
  SET_RATED_MOVIES_ERROR = 'SET_RATED_MOVIES_ERROR',
}

interface setRatedMoviesAction {
  type: ActionEnum.SET_RATED_MOVIES;
}

interface setRatedMoviesSuccessAction {
  type: ActionEnum.SET_RATED_MOVIES_SUCCESS;
  payload: any[];
}

interface setRatedMoviesErrorAction {
  type: ActionEnum.SET_RATED_MOVIES_ERROR;
  payload: string;
}

export type ActionType =
  | setRatedMoviesAction
  | setRatedMoviesSuccessAction
  | setRatedMoviesErrorAction;
