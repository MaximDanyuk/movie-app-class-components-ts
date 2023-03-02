/*eslint-disable */
export interface IInitialState {
  movieGrade: any[];
}

export enum ActionEnum {
  SET_MOVIE_GRADE = 'SET_MOVIE_GRADE',
}

interface movieGradeAction {
  type: ActionEnum.SET_MOVIE_GRADE;
  payload: any[];
}

export type ActionType = movieGradeAction;
