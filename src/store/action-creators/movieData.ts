/*eslint-disable */

import { Dispatch } from 'redux';
import { ActionEnum, ActionType } from '../../types/movieData';

export const movieDataActionCreators = ({
  page,
}: {
  page: number;
}) => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: ActionEnum.FETCH_MOVIEDATA });
      const res = fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=9e5c75ffd938a1f31a2794138fa3d88b&language=en-US&page=${page}`,
      );
      console.log(res);
      dispatch({
        type: ActionEnum.FETCH_MOVIEDATA_SUCCESS,
        payload: [],
      });
    } catch (e) {
      dispatch({
        type: ActionEnum.FETCH_MOVIEDATA_ERROR,
        payload: 'Нет ответа от сервера',
      });
    }
  };
};
