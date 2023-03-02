/*eslint-disable */
import { combineReducers } from 'redux';
import { movieDataReducer } from './movieDataReducer';
import { paginationNumberReducer } from './paginationNumberReducer';
import { ratedReducer } from './ratedReducer';
import { sectionReducer } from './sectionReducer';
import { movieGradeReducer } from './movieGradeReducer';
import { searchedReducer } from './searchedReducer';

export const rootReducer = combineReducers({
  movieData: movieDataReducer,
  paginationNumber: paginationNumberReducer,
  rated: ratedReducer,
  section: sectionReducer,
  movieGrade: movieGradeReducer,
  search: searchedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
