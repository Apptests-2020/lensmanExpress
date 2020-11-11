import {combineReducers} from 'redux';
import {update} from 'lodash';

// import Auth from './authReducer';
// import UI from './uiReducer';
import Layout from './itemAddCartReducer';
import Login from './loginReducer';
import statusbar from './statusbarReducer';
// import School from './schoolReducer';
// import People from './peopleReducer';
// import Photo from './photoReducer';

import {COMMON} from '../types';

const allReducers = combineReducers({
  Layout,
  Login,
  statusbar,
});

const rootReducer = (state, action) => {
  let newState = {...state};
  switch (action.type) {
    case COMMON.RESET_FIELD:
      if (action.key) {
        newState = update(state, action.key, () => action.value);
      }
      return {
        ...newState,
      };
    default:
    // do nothing;
  }
  return allReducers(newState, action);
};

export default rootReducer;
