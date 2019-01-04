import {
  actionBackers
} from '../actions';

const ACTIONS_TYPES = actionBackers.ACTIONS_TYPES;

const backers = (state = {}, action) => {
  // Get one dream's detail
  if (
    action.type === ACTIONS_TYPES.GET_BACKERS_BY_USER_ID_STARTED
  ) {
    return {
      ...state,
      loading: true
    };
  } else if (
    action.type === ACTIONS_TYPES.GET_BACKERS_BY_USER_ID_SUCCESS
  ) {
    return Object.assign({}, state, {
      loading: false
    }, action.payload);
  } else if (
    action.type === ACTIONS_TYPES.GET_BACKERS_BY_USER_ID_FAIL
  ) {
    return { ...state,
      loading: false,
      error: action.payload.error
    };
  } else {
    return state;
  }
}

export default backers;