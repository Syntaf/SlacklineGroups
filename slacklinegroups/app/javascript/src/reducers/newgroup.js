import { REQUEST_GROUP_SUBMIT, RECEIVE_GROUP_SUBMIT_RESPONSE } from '../actions/newgroup';

function newgroup(
  state = { isFetching: false, submitted: false, errors: [] },
  action
) {
  switch (action.type) {
    case REQUEST_GROUP_SUBMIT:
      return Object.assign({}, state, {
        isFetching: true,
        errors: []
      });
    case RECEIVE_GROUP_SUBMIT_RESPONSE:
      return Object.assign({}, state, {
        isFetching: false,
        submitted: action.status === 'success',
        errors: action.errors ? action.errors : []
      });
    default:
      return state;
  }
};

export default newgroup;