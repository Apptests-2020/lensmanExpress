import {LOGIN} from '../types';

export const setLoginData = (data) => {
  console.log('data in action', data);
  return (dispatch) => {
    return dispatch({
      type: LOGIN.LOGIN_DATA,
      payload: data,
    });
  };
};
