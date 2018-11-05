import {
  combineReducers
} from 'redux';
import user from './user';
import dream from './dream';

const rootReducer = combineReducers({
  user,
  dream
})

export default rootReducer;