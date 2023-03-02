/*eslint-disable */
import {
  ActionType,
  IInitialState,
  ActionEnum,
} from '../../types/search';

const initialState: IInitialState = {
  searchedLoading: false,
  error: null,
};

export const searchedReducer = (
  state = initialState,
  action: ActionType,
): IInitialState => {
  switch (action.type) {
    case ActionEnum.SET_SEARCHED_MOVIES:
      return { ...state, searchedLoading: true };
    case ActionEnum.SET_SEARCHED_MOVIES_SUCCESS:
      return {
        ...state,
        searchedLoading: false,
      };
    case ActionEnum.SET_SEARCHED_MOVIES_ERROR:
      return {
        ...state,
        searchedLoading: false,
        error: 'Ошибка при получении данных',
      };
    default:
      return state;
  }
};
