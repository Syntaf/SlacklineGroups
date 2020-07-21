export const REQUEST_GROUP_SUBMIT = 'REQUEST_GROUP_SUBMIT';
export const RECEIVE_GROUP_SUBMIT_RESPONSE = 'RECEIVE_GROUP_SUBMIT_RESPONSE';

export function requestGroupSubmit() {
  return {
    type: REQUEST_GROUP_SUBMIT
  };
}

export function receiveGroupSubmitResponse(json) {
  return {
    type: RECEIVE_GROUP_SUBMIT_RESPONSE,
    errors: json.errors
  };
}

export function submitGroup(newGroupRequest) {
  return dispatch => {
    dispatch(requestGroupSubmit());
    return fetch('/groups', newGroupRequest.asRequestInit())
      .then(response => response.json())
      .then(json => dispatch(receiveGroupSubmitResponse(json)));
  }
}