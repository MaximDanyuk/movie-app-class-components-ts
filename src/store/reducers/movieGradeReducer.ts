/*eslint-disable */
import {
  ActionType,
  IInitialState,
  ActionEnum,
} from '../../types/movieGrade';

const initialState: IInitialState = {
  movieGrade: [],
};

export const movieGradeReducer = (
  state = initialState,
  action: ActionType,
): IInitialState => {
  switch (action.type) {
    case ActionEnum.SET_MOVIE_GRADE:
      return { ...state, movieGrade: action.payload };
    default:
      return state;
  }
};
