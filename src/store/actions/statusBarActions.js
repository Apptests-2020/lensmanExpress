import {STATUSBAR} from '../types';

export const setStatusBar = (data) => {
  console.log('data in action', data);
  return (dispatch) => {
    return dispatch({
      type: STATUSBAR.STATUSBAR_HIDE,
      payload: data,
    });
  };
};
