import {LAYOUT} from '../types';

export const setCartItem = (data) => {
  return (dispatch) => {
    return dispatch({
      type: LAYOUT.CART_ITEM,
      payload: data,
    });
  };
};

export const removeFromCart = (data) => {
  return (dispatch) => {
    return dispatch({
      type: LAYOUT.CART_REMOVE,
      payload: data,
    });
  };
};

export const updateCart = (data) => {
  return (dispatch) => {
    return dispatch({
      type: LAYOUT.CART_UPDATE,
      payload: data,
    });
  };
};
