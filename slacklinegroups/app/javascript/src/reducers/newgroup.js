import { REQUEST_GROUP_VALIDATION, RECEIVE_VALIDATION_RESPONSE } from '../actions/newgroup';

function newgroup(
  state = { isFetching: false, isValid: false, validationErrors: [] },
  action
) {
  switch (action.type) {
    case REQUEST_GROUP_VALIDATION:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_VALIDATION_RESPONSE:
      return Object.assign({}, state, {
        isFetching: false,
        validationErrors: action.errors
      });
    default:
      return state;
  }
};

export default newgroup;