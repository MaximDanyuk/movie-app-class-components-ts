/*eslint-disable */
import {
  ActionType,
  IInitialState,
  ActionEnum,
} from '../../types/movieData';

const initialState: IInitialState = {
  movieData: [],
  movieDataLoading: false,
  error: null,
};

export const movieDataReducer = (
  state = initialState,
  action: ActionType,
): IInitialState => {
  switch (action.type) {
    case ActionEnum.FETCH_MOVIEDATA:
      return { ...state, movieDataLoading: true };
    case ActionEnum.FETCH_MOVIEDATA_SUCCESS:
      return {
        ...state,
        movieDataLoading: false,
        movieData: action.payload,
      };
    case ActionEnum.FETCH_MOVIEDATA_ERROR:
      return {
        ...state,
        movieDataLoading: false,
        error: 'Ошибка при получении данных',
      };
    default:
      return state;
  }
};
