import {
  combineReducers
} from 'redux';
import user from './user';
import dream from './dream';
import home from './home';

const rootReducer = combineReducers({
  user,
  dream,
  home
})

export default rootReducer;