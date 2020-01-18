import { combineReducers } from 'redux';

import * as homeReducers from './homeReducer';

const rootReducer = combineReducers({
  ...homeReducers
});

export default rootReducer;