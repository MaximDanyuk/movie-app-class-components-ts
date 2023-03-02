/*eslint-disable */
export interface IInitialState {
  section: string;
}

export enum ActionEnum {
  CHANGE_SECTION = 'CHANGE_SECTION',
}

interface changeActionAction {
  type: ActionEnum.CHANGE_SECTION;
  payload: string;
}

export type ActionType = changeActionAction;
