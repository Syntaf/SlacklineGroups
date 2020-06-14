import { combineReducers } from 'redux';
import { REQUEST_MAP_GROUPS, RECEIVE_MAP_GROUPS } from '../actions';

function map(
  state = {
    isFetching: true,
    groups: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_MAP_GROUPS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_MAP_GROUPS:
      return Object.assign({}, state, {
        isFetching: false,
        groups: action.groups,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  map
});

export default rootReducer;