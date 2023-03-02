/*eslint-disable */
import { Dispatch } from 'redux';
import { ActionEnum, ActionType } from '../../types/rated';

export const ratedActionCreators = (guestId: string | number) => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({
        type: ActionEnum.SET_RATED_MOVIES,
      });
      const res = fetch(
        `https://api.themoviedb.org/3/guest_session/${guestId}/rated/movies?api_key=9e5c75ffd938a1f31a2794138fa3d88b&language=en-US&sort_by=created_at.asc`,
      );
      console.log(res);
      dispatch({
        type: ActionEnum.SET_RATED_MOVIES_SUCCESS,
        payload: [],
      });
    } catch (e) {
      dispatch({
        type: ActionEnum.SET_RATED_MOVIES_ERROR,
        payload: 'Нет ответа от сервера',
      });
    }
  };
};
