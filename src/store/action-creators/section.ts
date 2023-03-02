/*eslint-disable */
import { ActionEnum } from '../../types/section';

export const sectionCreators = (section: string) => {
  return {
    type: ActionEnum.CHANGE_SECTION,
    payload: section,
  };
};
