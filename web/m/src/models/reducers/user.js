import {
  Actions
} from '../actions';

const user = (state = {}, action) => {
  switch (action.type) {
    case Actions.SET_USER_INFO:
      return Object.assign({
        isLogin: true
      }, state, action);
    case Actions.SET_USER_LOGOUT:
      state.username = null;
      state.id = null;
      state.avatarUlr = null;
      state.isLogin = false;
      return state;
    default:
      return state
  }
}
export default user;