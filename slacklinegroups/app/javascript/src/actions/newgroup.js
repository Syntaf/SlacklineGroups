export const REQUEST_GROUP_VALIDATION = 'REQUEST_GROUP_VALIDATION';
export const RECEIVE_VALIDATION_RESPONSE = 'RECEIVE_VALIDATION_RESPONSE';

export function requestGroupValidation() {
  return {
    type: REQUEST_GROUP_VALIDATION
  };
}

export function receiveValidationResponse(json) {
  return {
    type: RECEIVE_VALIDATION_RESPONSE,
    errors: json.errors
  };
}

export function validateGroup(newGroupRequest) {
  return dispatch => {
    dispatch(requestGroupValidation());
    return fetch('/groups/validate', newGroupRequest.asRequestInit())
      .then(response => response.json())
      .then(json => dispatch(receiveValidationResponse(json)));
  }
}