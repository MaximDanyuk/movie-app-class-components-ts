/*eslint-disable */
export interface IInitialState {
  searchedLoading: boolean;
  error: string | null;
}

export enum ActionEnum {
  SET_SEARCHED_MOVIES = 'SET_SEARCHED_MOVIES',
  SET_SEARCHED_MOVIES_SUCCESS = 'SET_SEARCHED_MOVIES_SUCCESS',
  SET_SEARCHED_MOVIES_ERROR = 'SET_SEARCHED_MOVIES_ERROR',
}

interface setSearchedMoviesAction {
  type: ActionEnum.SET_SEARCHED_MOVIES;
}

interface setSearchedMoviesSuccessAction {
  type: ActionEnum.SET_SEARCHED_MOVIES_SUCCESS;
}

interface setSearchedMoviesErrorAction {
  type: ActionEnum.SET_SEARCHED_MOVIES_ERROR;
  payload: string;
}

export type ActionType =
  | setSearchedMoviesAction
  | setSearchedMoviesSuccessAction
  | setSearchedMoviesErrorAction;
