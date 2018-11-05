import {
  actionDream
} from '../actions';

const ACTIONS_TYPES = actionDream.ACTIONS_TYPES;

const dream = (state = {}, action) => {
  // Get one dream's detail
  if (action.type === ACTIONS_TYPES.GET_DREAM_DETAIL_STARTED) {
    return {
      ...state,
      loading: true
    };
  } else if (action.type === ACTIONS_TYPES.GET_DREAM_DETAIL_SUCCESS) {
    return Object.assign({}, state, {
      loading: false
    }, action.payload);
  } else if (action.type === ACTIONS_TYPES.GET_DREAM_DETAIL_FAIL) {
    return { ...state,
      loading: false,
      error: action.payload.error
    };
  } else {
    return state;
  }

}
export default dream;