/*eslint-disable */
import {
  ActionType,
  IInitialState,
  ActionEnum,
} from '../../types/paginationNumber';

const initialState: IInitialState = {
  paginationNumber: 1,
};

export const paginationNumberReducer = (
  state = initialState,
  action: ActionType,
): IInitialState => {
  switch (action.type) {
    case ActionEnum.SET_PAGINATION_DATA:
      return { ...state, paginationNumber: action.payload };
    default:
      return state;
  }
};
