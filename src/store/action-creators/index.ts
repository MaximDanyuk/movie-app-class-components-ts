/*eslint-disable */
import * as movieDataActionCreators from './movieData';
import * as paginationNumberCreators from './paginationNumber';
import * as ratedActionCreators from './rated';
import * as section from './section';
import * as movieGrade from './movieGrade';
import * as searchedActionCreators from './search';

const allCreators = {
  ...movieDataActionCreators,
  ...paginationNumberCreators,
  ...ratedActionCreators,
  ...section,
  ...movieGrade,
  ...searchedActionCreators,
};

export default allCreators;
