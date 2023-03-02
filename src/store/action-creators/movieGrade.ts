/*eslint-disable */

import { ActionEnum } from '../../types/movieGrade';

export const movieGradeCreators = (movieGrade: any[]) => {
  return {
    type: ActionEnum.SET_MOVIE_GRADE,
    payload: movieGrade,
  };
};
