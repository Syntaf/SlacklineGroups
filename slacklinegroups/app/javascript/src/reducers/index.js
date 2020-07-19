import { combineReducers } from 'redux';
import map from './map';
import newgroup from './newgroup';

// Only one reducer at the moment
const rootReducer = combineReducers({
  map,
  newgroup
});

export default rootReducer;