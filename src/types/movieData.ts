/*eslint-disable */
export interface IInitialState {
  movieData: any[];
  movieDataLoading: boolean;
  error: null | string;
}

export enum ActionEnum {
  FETCH_MOVIEDATA = 'FETCH_MOVIEDATA',
  FETCH_MOVIEDATA_SUCCESS = 'FETCH_MOVIEDATA_SUCCESS',
  FETCH_MOVIEDATA_ERROR = 'FETCH_MOVIEDATA_ERROR',
}

interface fetchMovieDataAction {
  type: ActionEnum.FETCH_MOVIEDATA;
}

interface fetchMovieDataSuccessAction {
  type: ActionEnum.FETCH_MOVIEDATA_SUCCESS;
  payload: any[];
}

interface fetchMovieDataErrorAction {
  type: ActionEnum.FETCH_MOVIEDATA_ERROR;
  payload: string;
}

export type ActionType =
  | fetchMovieDataAction
  | fetchMovieDataSuccessAction
  | fetchMovieDataErrorAction;
