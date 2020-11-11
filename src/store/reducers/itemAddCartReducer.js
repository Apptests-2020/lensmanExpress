import {LAYOUT} from '../types';

export default (state = {cartList: []}, action) => {
  switch (action.type) {
    case LAYOUT.CART_ITEM: {
      const cartList = [...state.cartList];
      return {
        ...state,
        cartList: [...cartList, action.payload],
      };
    }

    case LAYOUT.CART_REMOVE: {
      const cartList = [...state.cartList];
      let index = action.payload;
      cartList.splice(index, 1);

      return {
        ...state,
        cartList: [...cartList],
      };
    }

    case LAYOUT.CART_UPDATE: {
      const cartList = state.cartList;

      return {
        ...state,
        cartList: cartList,
      };
    }

    default:
      return state;
  }
};
