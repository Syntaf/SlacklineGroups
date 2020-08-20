export const REQUEST_MAP_GROUPS = 'REQUEST_GROUPS';
export const RECEIVE_MAP_GROUPS = 'RECEIVE_GROUPS';

export function requestMapGroups() {
  return {
    type: REQUEST_MAP_GROUPS
  };
}

export function receiveMapGroups(json) {
  return {
    type: RECEIVE_MAP_GROUPS,
    groups: json,
    receivedAt: Date.now()
  };
}

export function fetchMapGroups() {
  return dispatch => {
    dispatch(requestMapGroups());
    return fetch('/groups')
      .then(response => response.json())
      .then(json => dispatch(receiveMapGroups(json)));
  }
}