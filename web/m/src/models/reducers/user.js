import {
  actionUser
} from '../actions';

const ACTIONS_TYPES = actionUser.ACTIONS_TYPES;

const user = (state = {}, action) => {

  switch (action.type) {

    case ACTIONS_TYPES.SET_USER_INFO:
      return Object.assign({}, state, action.payload);
    case ACTIONS_TYPES.SET_USER_LOGOUT:
      state = {};
      return state;
    case ACTIONS_TYPES.SET_USER_AVATAR:
      

      return Object.assign({},state,action.payload);
    default:
      return state;
  }
}
export default user;