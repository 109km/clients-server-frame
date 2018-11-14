import {
  actionUser
} from '../actions';

const ACTIONS_TYPES = actionUser.ACTIONS_TYPES;

const user = (state = {}, action) => {
  if (action.type === ACTIONS_TYPES.SET_USER_INFO) {
    return Object.assign({}, state, action.payload);
  } else if (action.type === ACTIONS_TYPES.SET_USER_LOGOUT) {
    state = {};
    return state;
  } else if (action.type === ACTIONS_TYPES.SET_USER_AVATAR) {
    return Object.assign({}, state, action.payload);
  } else if (
    action.type === ACTIONS_TYPES.UPDATE_USER_INFO_SUCCESS
  ) {
    return Object.assign({}, state, {
      loading: false
    }, action.payload);
  } else if (
    action.type === ACTIONS_TYPES.UPDATE_USER_INFO_FAIL
  ) {
    return { ...state,
      loading: false,
      error: action.payload.error
    };
  } else if (
    action.type === ACTIONS_TYPES.UPDATE_USER_INFO_STARTED
  ) {
    return {
      ...state,
      loading: true
    };
  } else {
    return state;
  }
}
export default user;