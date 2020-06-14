import { combineReducers } from 'redux';
import map from './map';

// Only one reducer at the moment
const rootReducer = combineReducers({
  map
});

export default rootReducer;