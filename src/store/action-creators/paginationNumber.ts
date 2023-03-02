/*eslint-disable */
import { ActionEnum } from '../../types/paginationNumber';

export const paginationNumberCreators = (
  paginationNumber: number,
) => {
  return {
    type: ActionEnum.SET_PAGINATION_DATA,
    payload: paginationNumber,
  };
};
