/*eslint-disable */
import {
  ActionType,
  IInitialState,
  ActionEnum,
} from '../../types/section';

const initialState: IInitialState = {
  section: 'search',
};

export const sectionReducer = (
  state = initialState,
  action: ActionType,
): IInitialState => {
  switch (action.type) {
    case ActionEnum.CHANGE_SECTION:
      return { ...state, section: action.payload };
    default:
      return state;
  }
};
