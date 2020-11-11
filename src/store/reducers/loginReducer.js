import {LOGIN} from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN.LOGIN_DATA: {
      return {
        data: action.payload,
      };
    }

    default:
      return state;
  }
};
