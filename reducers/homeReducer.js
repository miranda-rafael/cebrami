import update from 'immutability-helper';

import {
  RESET_INITIAL_STATE,
  HANDLE_INPUT_CHANGE
} from '../constants/actionTypes';

const initialState = {
  name: ''
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {

    case RESET_INITIAL_STATE:
      return initialState;

    case HANDLE_INPUT_CHANGE:
      return update(state, {
        [action.payload.name]: { $set: action.payload.value }
      });

    default:
      return state;
  }
};

export { homeReducer };