import {
  actionExplore
} from '../actions';

const ACTIONS_TYPES = actionExplore.ACTIONS_TYPES;

const explore = (state = {}, action) => {
  // Get one dream's detail
  if (
    action.type === ACTIONS_TYPES.GET_EXPLORE_FEEDS_STARTED ||
    action.type === ACTIONS_TYPES.SEARCH_DREAMS_STARTED
  ) {
    return {
      ...state,
      loading: true
    };
  } else if (
    action.type === ACTIONS_TYPES.GET_EXPLORE_FEEDS_SUCCESS ||
    action.type === ACTIONS_TYPES.SEARCH_DREAMS_SUCCESS
  ) {
    return Object.assign({}, state, {
      loading: false
    }, {
      news: action.payload
    });
  } else if (
    action.type === ACTIONS_TYPES.GET_EXPLORE_FEEDS_FAIL ||
    action.type === ACTIONS_TYPES.SEARCH_DREAMS_FAIL
  ) {
    return { ...state,
      loading: false,
      error: action.payload.error
    };
  } else {
    return state;
  }

}
export default explore;