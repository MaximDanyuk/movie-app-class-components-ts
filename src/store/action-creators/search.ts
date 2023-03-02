/*eslint-disable */
import { Dispatch } from 'redux';
import { ActionEnum, ActionType } from '../../types/search';

export const searchedActionCreators = ({
  query,
  page,
}: {
  query: string;
  page: number;
}) => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({
        type: ActionEnum.SET_SEARCHED_MOVIES,
      });
      const res = fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=9e5c75ffd938a1f31a2794138fa3d88b&language=en-US&query=${query}&page=${page}`,
      );
      console.log(res);
      dispatch({
        type: ActionEnum.SET_SEARCHED_MOVIES_SUCCESS,
      });
      /* Тут передаем дату в общий стейт */
    } catch (e) {
      dispatch({
        type: ActionEnum.SET_SEARCHED_MOVIES_ERROR,
        payload: 'Нет ответа от сервера',
      });
    }
  };
};
