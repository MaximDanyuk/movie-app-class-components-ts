/*eslint-disable */
import {
  ActionType,
  IInitialState,
  ActionEnum,
} from '../../types/rated';

const initialState: IInitialState = {
  rated: [],
  ratedLoading: false,
  error: null,
};

export const ratedReducer = (
  state = initialState,
  action: ActionType,
): IInitialState => {
  switch (action.type) {
    case ActionEnum.SET_RATED_MOVIES:
      return { ...state, ratedLoading: true };
    case ActionEnum.SET_RATED_MOVIES_SUCCESS:
      return { ...state, ratedLoading: false, rated: action.payload };
    case ActionEnum.SET_RATED_MOVIES_ERROR:
      return {
        ...state,
        ratedLoading: false,
        error: 'Ошибка при получении данных',
      };
    default:
      return state;
  }
};
