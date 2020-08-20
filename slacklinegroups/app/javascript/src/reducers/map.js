import { REQUEST_MAP_GROUPS, RECEIVE_MAP_GROUPS } from '../actions/map';

/**
 * Reduces actions related to map visualizations. Starts with an initial
 * state of isFetching: true as groups are fetched asynchronously on page load.
 * 
 * REQUEST_MAP_GROUPS: Sets isFetching to 'true', disabling MapNavigationBar
 * RECEIVE_MAP_GROUPS: Updates state with response from async request to fetch groups
 *
 * @param {Object} state 
 * @param {Object} action 
 */
function map(
  state = { isFetching: true, groups: [] },
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
};

export default map;