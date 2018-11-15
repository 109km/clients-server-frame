import {
  actionHome
} from '../actions';

const ACTIONS_TYPES = actionHome.ACTIONS_TYPES;

const home = (state = {}, action) => {
  // Get one dream's detail
  if (
    action.type === ACTIONS_TYPES.GET_HOME_FEEDS_STARTED
  ) {
    return {
      ...state,
      loading: true
    };
  } else if (
    action.type === ACTIONS_TYPES.GET_HOME_FEEDS_SUCCESS
  ) {
    return Object.assign({}, state, {
      loading: false
    }, {
      news: action.payload
    });
  } else if (
    action.type === ACTIONS_TYPES.GET_HOME_FEEDS_FAIL
  ) {
    return { ...state,
      loading: false,
      error: action.payload.error
    };
  } else {
    return state;
  }

}
export default home;