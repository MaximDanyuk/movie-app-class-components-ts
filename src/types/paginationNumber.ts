/*eslint-disable */
export interface IInitialState {
  paginationNumber: number;
}

export enum ActionEnum {
  SET_PAGINATION_DATA = 'SET_PAGINATION_DATA',
}

interface setPaginationDataAction {
  type: ActionEnum.SET_PAGINATION_DATA;
  payload: number;
}

export type ActionType = setPaginationDataAction;
