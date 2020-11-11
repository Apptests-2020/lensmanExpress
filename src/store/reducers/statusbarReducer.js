import {STATUSBAR} from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case STATUSBAR.STATUSBAR_HIDE: {
      return {
        data: action.payload,
      };
    }

    default:
      return state;
  }
};
